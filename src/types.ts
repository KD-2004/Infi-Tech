export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  whatWeProvide: string[];
  whatWeCanBuild: string[];
  whoNeedsIt: string[];
  typicalUseCases: string[];
  deliverables: string[];
  technologies: string[];
  accentColor?: string;
  iconName: string;
}

export interface ProblemSolutionItem {
  id: string;
  problemTitle: string;
  problemDesc: string;
  problemPainPoints: string[];
  solutionTitle: string;
  solutionDesc: string;
  solutionBenefits: string[];
  impactMetric: string;
  category: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  architecture: string[];
  techStack: string[];
  badge: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    tags: string[];
    level: 'Core' | 'Specialized' | 'Enterprise';
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientIndustry: string;
  category: string;
  categories?: string[];
  summary: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  caseStudy: {
    challenge: string;
    goals: string[];
    researchAndUx: string;
    architecture: string;
    development: string;
    securityMeasures: string[];
    testingAndQa: string;
    results: string[];
    futureImprovements: string[];
  };
}

export interface ProcessStage {
  step: string;
  name: string;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
  durationEstimate: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  projectBrief?: ProjectBriefData;
  isStreaming?: boolean;
}

export interface ProjectBriefData {
  projectTitle: string;
  primaryGoal: string;
  targetUsers: string;
  coreFeatures: string[];
  recommendedPlatforms: string[];
  suggestedIntegrations: string[];
  estimatedTimeline: string;
  budgetTier: string;
  recommendedServices: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budgetTier?: string;
  timeline?: string;
  message: string;
  subscribeUpdates?: boolean;
}

export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  description: string;
  email: string;
  photo: string;
  altText: string;
}

export interface MissionValue {
  title: string;
  description: string;
}
