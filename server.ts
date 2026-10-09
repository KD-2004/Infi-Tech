import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const PORT = 3000;

// Lazy initialization of GoogleGenAI SDK client
let genAiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!genAiClient && process.env.GEMINI_API_KEY) {
    genAiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return genAiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Healthcheck endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'INFITECH SOLUTIONS Platform Engine',
      timestamp: new Date().toISOString()
    });
  });

  // Contact / Project Inquiry endpoint
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, projectType, message, budgetTier, timeline, company, phone } = req.body;
      
      console.log(`[INFITECH INQUIRY] New project brief received from ${name} (${email}) for [${projectType}]:`, {
        company,
        phone,
        budgetTier,
        timeline,
        messageLength: message?.length
      });

      res.status(200).json({
        success: true,
        message: 'Inquiry received. A senior systems architect will review within 24 hours.',
        inquiryId: `INF-${Math.floor(100000 + Math.random() * 900000)}`
      });
    } catch (err) {
      console.error('[INFITECH INQUIRY] Error processing request:', err);
      res.status(500).json({ error: 'Failed to process inquiry' });
    }
  });

  // AI Architect Chatbot endpoint (Gemini API server proxy)
  app.post('/api/ai/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message string is required' });
      }

      const ai = getGenAI();

      const systemInstruction = `You are the AI Systems Architect at INFITECH SOLUTIONS (an enterprise technology consultancy and software engineering company).
Tagline: "Infinite Possibilities. Intelligent Solutions."

Core Engineering Domains at INFITECH:
1. AI & AUTOMATION: Autonomous agents, LLM orchestration, intelligent document extraction, deterministic workflow engines.
2. SOFTWARE DEVELOPMENT: Custom SaaS platforms, microservices, deterministic database architectures, enterprise backends.
3. WEB DEVELOPMENT & SPATIAL UX: 3D WebGL / Three.js interactive platforms, sub-second web performance, mathematical typography.
4. MOBILE APPLICATIONS: Native Swift/Kotlin & high-concurrency cross-platform applications.
5. CYBERSECURITY & RESILIENCE: Zero-Trust architectures, VAPT, threat modeling, cryptographically isolated data boundaries.
6. CLOUD ARCHITECTURE & DEVOPS: Kubernetes orchestration, automated multi-region failover, Infrastructure as Code (Terraform).
7. BUSINESS OPERATING SYSTEMS: Custom ERPs, inventory sync, warehouse management, unified dashboards.
8. DIGITAL TRANSFORMATION: Legacy modernization, mainframe-to-cloud migration, legacy workflow automation.

Proprietary Engines:
- InfiCore™: Enterprise ERP/operations foundation
- InfiFlow™: Event-driven background automation pipeline
- InfiShield™: Zero-trust security & auditing sentinel
- InfiAgent™: Enterprise cognitive LLM gateway with guardrails

Guidelines:
- Tone: Professional, authoritative, concise, engineering-grounded, helpful.
- Suggest practical architectures and tech stacks (e.g. TypeScript, React, Go, Python, PostgreSQL, Redis, Kubernetes).
- Highlight our guarantees: 100% Client IP ownership, zero data retention for AI calls, sub-second SLAs, and transparent sprint cycles.
- Keep answers concise (2-4 paragraphs max) with clear formatting.`;

      if (!ai) {
        // Fallback if GEMINI_API_KEY is not configured yet
        return res.json({
          reply: `Thank you for your inquiry regarding "${message}". At INFITECH SOLUTIONS, our engineering team specializes in architecting scalable solutions across AI, custom software, cloud infrastructure, and zero-trust cybersecurity. Feel free to submit your project details via the Contact section for a dedicated architectural scoping call.`
        });
      }

      // Generate response using modern Google GenAI SDK with gemini-2.5-flash
      const chatResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `${systemInstruction}\n\nUser Question: ${message}` }]
          }
        ]
      });

      const replyText = chatResponse.text || "Thank you for consulting INFITECH SOLUTIONS. How else may we assist your technology strategy?";

      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error('[AI Chat Error]:', err);
      return res.json({
        reply: "INFITECH SOLUTIONS delivers mission-critical software and AI systems. Please submit your inquiry through the contact form to connect with our solutions architecture team."
      });
    }
  });

  // Explicit public folder serving
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Vite development middleware or production static serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[INFITECH SERVER] Running on port ${PORT} (host 0.0.0.0)`);
  });
}

startServer();
