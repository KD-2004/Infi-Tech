import {
  ServiceItem,
  ProblemSolutionItem,
  ProductItem,
  TechnologyCategory,
  ProjectItem,
  ProcessStage,
  FAQItem,
  TeamMember,
  MissionValue
} from '../types';

export const COMPANY_INFO = {
  name: 'INFITECH SOLUTIONS',
  tagline: 'Websites That Help Local Businesses Grow.',
  heroHeadline: 'A Professional Website That Helps You Get More Customers.',
  heroSubheadline: 'We build fast, modern and mobile-friendly websites for local businesses. Showcase your products or services, add WhatsApp and Google Maps, and make it easier for customers to contact you.',
  aboutHeadline: 'YOUR ONLINE PRESENCE MATTERS.',
  contactHeadline: "LET'S GET YOUR BUSINESS ONLINE.",
  contactSubtext: "Tell us about your business and we'll show you how your website could look.",
  email: 'infitechsolutions03@gmail.com',
  phone: '+91 99676 03319',
  status: 'Custom Websites • Reasonable Pricing • Get a Free Quote',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    number: '01',
    title: 'Business Website',
    subtitle: 'Professional Online Presence for Local Businesses',
    shortDesc: 'A modern, mobile-friendly website that introduces your business, products, services, location and contact details.',
    fullDesc: 'We design and build clean, fast websites tailored for local businesses. Give your customers a credible place to see what you offer, find your address on Google Maps, and contact you in one tap.',
    whatWeProvide: [
      '3–5+ custom designed responsive pages (Home, About, Products/Services, Contact)',
      '1-Tap WhatsApp chat button and direct phone calling',
      'Interactive Google Maps with shop/office location',
      'Clear business hours, timings, and address display',
      'Mobile-first responsive design for all smartphone screens',
      'Basic local SEO setup to help customers find you on Google'
    ],
    whatWeCanBuild: [
      'Retail shop and showroom showcase websites',
      'Local manufacturing company profiles and capability overviews',
      'Wholesale business websites with inquiry features',
      'Service business booking and enquiry hubs',
      'Restaurant and cafe websites with digital menus and directions'
    ],
    whoNeedsIt: [
      'Local shops and retailers looking to establish trust online',
      'Manufacturers and wholesalers who want B2B inquiries',
      'Professional service providers needing a credible digital card',
      'Businesses with no website or an outdated non-mobile site'
    ],
    typicalUseCases: [
      'Helping local customers find your store location and open hours',
      'Letting prospective clients browse your core services before calling',
      'Displaying verified customer testimonials and photos of your work',
      'Capturing customer inquiries via WhatsApp directly from the website'
    ],
    deliverables: [
      'Fully responsive, high-speed website live on your domain',
      '1-Tap WhatsApp & Click-to-Call mobile integration',
      'Google Maps embedded location with directions link',
      'Fast SSL security certificate & hosting setup assistance',
      'Complete launch walkthrough and contact form testing'
    ],
    technologies: ['Mobile-First', 'Fast Loading', 'WhatsApp Ready', 'Google Maps', 'SEO Optimized'],
    iconName: 'Globe'
  },
  {
    id: 'product-catalogue',
    number: '02',
    title: 'Product / Catalogue Website',
    subtitle: 'Showcase Your Products, Collections & Categories',
    shortDesc: 'Show your products, collections, categories, sizes, colours, specifications and enquiry options.',
    fullDesc: 'Stop making customers guess what you sell. We build visual product catalogue websites where customers can browse your items, view details and prices, and inquire on WhatsApp with one click.',
    whatWeProvide: [
      'Organized category and collection browsing (e.g. New Arrivals, Best Sellers)',
      'Product detail views with high-res photos, sizes, and specs',
      'Direct "Inquire on WhatsApp" button on every product item',
      'Filterable product lists by category, brand, or material',
      'Seasonal offers and promotional announcement banners',
      'Downloadable PDF catalogue or brochure buttons'
    ],
    whatWeCanBuild: [
      'Clothing, garment, and fashion collection showcases',
      'Jewellery and luxury ornament product galleries',
      'Furniture and home decor showrooms with dimensions',
      'Hardware, tools, and building materials specification lists',
      'Electronics and mobile shop product directories with specs'
    ],
    whoNeedsIt: [
      'Clothing and fashion stores wanting to show latest stock',
      'Jewellery shops wanting premium, elegant product displays',
      'Furniture showrooms displaying materials and dimensions',
      'Wholesalers needing to share catalogues with retail buyers'
    ],
    typicalUseCases: [
      'Sharing a single product link on WhatsApp with interested buyers',
      'Allowing customers to browse entire product collections before visiting',
      'Promoting festival discounts and clearance stock online',
      'Receiving specific product inquiries with image and SKU pre-filled'
    ],
    deliverables: [
      'Complete product catalogue system with category navigation',
      'Product gallery pages with WhatsApp enquiry triggers',
      'Easy-to-use content management or guided update support',
      'Optimized lightweight product images for rapid mobile loading',
      'Promotional banner sections for seasonal discounts'
    ],
    technologies: ['Product Galleries', 'WhatsApp Enquiry', 'Category Filters', 'Image Optimization', 'Mobile UX'],
    iconName: 'Layers'
  },
  {
    id: 'ecommerce-store',
    number: '03',
    title: 'E-Commerce Website',
    subtitle: 'Sell Products Online with Cart, Checkout & Payments',
    shortDesc: 'Sell products online with product pages, cart, checkout, payments and order management.',
    fullDesc: 'Turn your local shop into an online store. We build reliable e-commerce websites with product listings, shopping carts, secure payment gateways (UPI, Cards, NetBanking), and order tracking.',
    whatWeProvide: [
      'Full e-commerce store with product categories and search',
      'Seamless shopping cart and mobile checkout flow',
      'Payment gateway integration (UPI, QR, Credit/Debit Cards, Net Banking, COD)',
      'Automated WhatsApp and email order confirmation notifications',
      'Inventory and stock status management dashboard',
      'Discount coupon codes and free shipping threshold rules'
    ],
    whatWeCanBuild: [
      'Retail fashion and apparel online stores',
      'Packaged food, spices, and organic groceries stores',
      'Handcrafted goods, cosmetics, and lifestyle brands',
      'Direct-to-consumer (D2C) brand shopping portals',
      'B2B wholesale order placement portals with minimum order rules'
    ],
    whoNeedsIt: [
      'Shops looking to expand sales beyond their local neighbourhood',
      'Local brands launching their own direct-to-consumer store',
      'Wholesalers taking repeat orders digitally from retailers',
      'Businesses wanting automated online payments and orders'
    ],
    typicalUseCases: [
      'Accepting payments 24/7 via UPI and cards automatically',
      'Shipping products pan-India with automated order summaries',
      'Running promotional discount campaigns with promo codes',
      'Tracking sales revenue and customer orders in a single view'
    ],
    deliverables: [
      'Fully functioning e-commerce store with product catalogue',
      'Integrated payment gateway with UPI & Card processing',
      'Order management dashboard and customer notification setup',
      'Shipping and tax calculation rules configuration',
      'Mobile-optimized fast checkout interface'
    ],
    technologies: ['UPI / Card Payments', 'Shopping Cart', 'Order Management', 'Inventory Tracking', 'SSL Security'],
    iconName: 'Cpu'
  },
  {
    id: 'google-local-presence',
    number: '04',
    title: 'Google + Local Presence',
    subtitle: 'Help Nearby Customers Find & Visit Your Store',
    shortDesc: 'Make it easier for customers to find your business, understand what you offer and reach your location.',
    fullDesc: 'When people in your area search for products or services on Google, make sure they find your business first. We configure your Google Maps location, business profile, and local search visibility.',
    whatWeProvide: [
      'Google Maps embed with one-click driving directions',
      'Google Business Profile setup and optimization guidance',
      'Structured business name, address, phone number (NAP) data',
      'Display of opening hours, holidays, and service coverage areas',
      'Customer reviews and rating badge integration',
      'Local keyword optimization for your city and area'
    ],
    whatWeCanBuild: [
      'Local store locators and directions landing pages',
      'Service area pages for businesses serving multiple pin codes',
      'Google review highlight widgets to build instant customer trust',
      'Click-to-call direct dialers optimized for mobile searchers',
      'Local business schema markup for Google Search results'
    ],
    whoNeedsIt: [
      'Physical shops and showrooms dependent on foot traffic',
      'Service providers (repairs, beauty, clinics, consultants, contractors)',
      'Restaurants, cafes, and bakeries welcoming local walk-ins',
      'Any business wanting to show up when nearby users search on Google'
    ],
    typicalUseCases: [
      'Letting a customer tap "Directions" to open Google Maps directly to your shop',
      'Showing verified customer reviews on your site to build confidence',
      'Clearly displaying whether you are open right now',
      'Ranking for searches like "[your service] near me" or "[your city]"'
    ],
    deliverables: [
      'Google Maps interactive module on the website',
      'Google Business Profile coordination checklist',
      'Local SEO metadata and schema markup embedded',
      'Prominently displayed phone number, address, and timings',
      'Review submission link widget for happy customers'
    ],
    technologies: ['Google Maps', 'Local SEO', 'Business Hours', 'Customer Reviews', 'Click-to-Call'],
    iconName: 'Smartphone'
  },
  {
    id: 'whatsapp-enquiry-setup',
    number: '05',
    title: 'WhatsApp & Enquiry Setup',
    subtitle: 'Turn Website Visitors Into Direct Conversations',
    shortDesc: 'Turn website visitors into conversations with direct WhatsApp, call and enquiry options.',
    fullDesc: 'Local customers in India prefer chatting on WhatsApp. We integrate smart WhatsApp chat buttons, one-tap calling, and easy enquiry forms so you never miss a prospective customer.',
    whatWeProvide: [
      'Floating WhatsApp button on every page for instant chat',
      'Pre-filled WhatsApp message templates with product or service context',
      'One-tap click-to-call buttons placed prominently on mobile',
      'Simple enquiry forms that forward directly to your email or WhatsApp',
      'Quick inquiry triggers on individual products and services',
      'No complicated sign-up barriers for your customers'
    ],
    whatWeCanBuild: [
      'Direct WhatsApp order enquiry workflows',
      'Call-back request forms for busy business owners',
      'Quotation request forms with photo/document upload',
      'Custom enquiry forms tailored to your business questions',
      'Instant customer enquiry alerts sent to your mobile phone'
    ],
    whoNeedsIt: [
      'Any business whose primary sales channel is WhatsApp or phone calls',
      'Wholesalers receiving bulk rate queries from buyers',
      'Shops wanting quick, casual conversations with interested shoppers',
      'Service businesses scheduling appointments or providing estimates'
    ],
    typicalUseCases: [
      'A customer clicks WhatsApp and immediately messages "I want to know the price of this item"',
      'A mobile user taps Call and speaks to your sales desk immediately',
      'Receiving inquiries after business hours so you can reply the next morning',
      'Capturing customer name and requirements without friction'
    ],
    deliverables: [
      'Active floating WhatsApp widget configured to your phone number',
      'Click-to-call direct dialers tested on iOS and Android',
      'Simple enquiry form with automatic notification dispatch',
      'Pre-composed WhatsApp inquiry message strings',
      'Full cross-browser testing for instant message handoff'
    ],
    technologies: ['WhatsApp API', 'Click-to-Call', 'Instant Enquiries', 'Fast Lead Capture', 'Mobile Triggers'],
    iconName: 'Bot'
  },
  {
    id: 'website-maintenance',
    number: '06',
    title: 'Website Maintenance & Updates',
    subtitle: 'Keep Your Products, Prices & Photos Fresh',
    shortDesc: 'Keep your website updated with new products, photos, offers, prices, pages and business information.',
    fullDesc: 'Your business evolves, and your website should too. We provide friendly ongoing support to update your product photos, change prices, post festival offers, and ensure your website is always fast and secure.',
    whatWeProvide: [
      'Quick updates for new products, photos, and price lists',
      'Seasonal festival banner changes and promotional offers',
      'Domain and hosting renewal management assistance',
      'Speed optimization and regular uptime monitoring',
      'Contact details, address, and timings updates anytime',
      'Dedicated support via WhatsApp and phone'
    ],
    whatWeCanBuild: [
      'Monthly product catalogue refresh workflows',
      'Festival and holiday promotion banner packs',
      'Easy content management dashboards for self-edits',
      'Regular backup and security maintenance schedules',
      'Performance tune-ups for fast mobile loading'
    ],
    whoNeedsIt: [
      'Shop owners who frequently add new arrivals and stock',
      'Businesses running seasonal discounts (Diwali, New Year, Sale)',
      'Owners who do not have time to manage technical website details',
      'Companies wanting a single dependable team for all digital tasks'
    ],
    typicalUseCases: [
      'Messaging us photos of 10 new products on WhatsApp to add to the site',
      'Updating your store timings during festive seasons',
      'Adding a new service or branch location to your website',
      'Ensuring your website never goes down or displays outdated information'
    ],
    deliverables: [
      'Direct WhatsApp support line for quick update requests',
      'Fast turnaround for content and photo additions',
      'Automated daily backups and SSL renewal checks',
      'Mobile speed checks and error monitoring',
      'Peace of mind that your website is taken care of'
    ],
    technologies: ['Fast Updates', 'Hosting Support', 'Uptime Monitoring', 'Content Refresh', 'Dedicated Support'],
    iconName: 'Sparkles'
  }
];

export const PROBLEM_SOLUTIONS: ProblemSolutionItem[] = [
  {
    id: 'ps-no-website',
    problemTitle: 'NO WEBSITE OR OUTDATED ONLINE PRESENCE',
    problemDesc: 'Customers have to depend on social media, outdated directories, or word of mouth to understand your business, making you look less established than competitors.',
    problemPainPoints: [
      'Customers cannot quickly see what you sell or what services you provide',
      'Phone number and WhatsApp are hard to find, causing lost sales',
      'Business looks outdated and less trustworthy compared to modern competitors'
    ],
    solutionTitle: 'PROFESSIONAL BUSINESS WEBSITE',
    solutionDesc: 'We build a modern, clean website that introduces your business, highlights your products and services, and builds instant credibility before customers visit or call.',
    solutionBenefits: [
      'Instantly establishes credibility and trust with every prospective buyer',
      'One-tap calling and direct WhatsApp messaging placed prominently',
      'Works beautifully on all mobile phones, tablets, and computers'
    ],
    impactMetric: 'Instant Credibility & Trust',
    category: 'Online Presence'
  },
  {
    id: 'ps-no-product-info',
    problemTitle: 'CUSTOMERS CANNOT SEE PRODUCTS OR SERVICES',
    problemDesc: 'Prospective buyers do not know what you actually have in stock, your variety, or your specialities, leading to unnecessary confusion or skipped visits.',
    problemPainPoints: [
      'Repeatedly sending the same photos manually to dozens of WhatsApp chats',
      'Customers assuming you do not have what they want and going elsewhere',
      'No organized place to showcase your best collections, categories, or projects'
    ],
    solutionTitle: 'VISUAL PRODUCT & CATALOGUE SHOWCASE',
    solutionDesc: 'We organize your products, services, categories, photos, and specifications so customers can browse easily and inquire with one click on WhatsApp.',
    solutionBenefits: [
      'Clean catalogue with categories, high-resolution photos, and descriptions',
      'Direct "Inquire on WhatsApp" button on every single product',
      'Easy to share catalogue links with customers on WhatsApp and social media'
    ],
    impactMetric: 'Show What You Sell',
    category: 'Product Showcase'
  },
  {
    id: 'ps-hard-to-contact',
    problemTitle: 'DIFFICULT TO CALL, MESSAGE OR FIND ON MAPS',
    problemDesc: 'When prospective buyers search for your business, your address is missing, your phone number is not clickable, and there are no directions.',
    problemPainPoints: [
      'Customers getting lost or calling repeatedly for landmark directions',
      'Frustration when numbers cannot be clicked directly from mobile search',
      'Missing out on customers who prefer sending a quick WhatsApp message'
    ],
    solutionTitle: '1-TAP WHATSAPP, CALL & GOOGLE MAPS',
    solutionDesc: 'We place one-tap WhatsApp, instant calling, and interactive Google Maps directions right at your customers fingers across the entire website.',
    solutionBenefits: [
      'One-tap to open a pre-filled WhatsApp conversation with your business',
      'One-tap to call your sales desk directly from any mobile device',
      'Embedded Google Maps providing seamless turn-by-turn driving directions'
    ],
    impactMetric: '1-Tap WhatsApp & Calls',
    category: 'Direct Contact'
  },
  {
    id: 'ps-poor-mobile',
    problemTitle: 'POOR MOBILE EXPERIENCE & SLOW LOADING',
    problemDesc: 'Over 85% of local customers browse on mobile phones. Sluggish websites with tiny unreadable text cause visitors to leave within 3 seconds.',
    problemPainPoints: [
      'Slow loading on mobile network connections frustrates visitors',
      'Broken layouts, tiny text, and hard-to-click buttons on smartphone screens',
      'High bounce rate before customers even see what you offer'
    ],
    solutionTitle: 'LIGHTNING-FAST MOBILE-FIRST DESIGN',
    solutionDesc: 'Every website we build is crafted mobile-first, loading in under 1 second with clear fonts, big buttons, and a smooth touch experience.',
    solutionBenefits: [
      'Sub-second page load times scoring 95+ on Google speed tests',
      'Touch-friendly navigation designed specifically for thumb browsing',
      'Clean, uncluttered layout that makes reading and deciding effortless'
    ],
    impactMetric: '95+ Speed & Mobile-First',
    category: 'Mobile UX'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'whatsapp-calling',
    name: 'WhatsApp & 1-Tap Calling',
    tagline: 'Instant Mobile Customer Communication',
    description: 'Floating WhatsApp widget, click-to-call buttons, and pre-filled inquiry message templates that turn web visitors into active phone conversations.',
    category: 'Direct Enquiries',
    features: [
      'Floating WhatsApp button accessible from every page',
      '1-Tap mobile click-to-call phone number dialer',
      'Pre-composed inquiry messages tailored to specific products',
      'No apps or complex logins required for your customers'
    ],
    architecture: ['WhatsApp Web API', 'Tel Protocol', 'Mobile Triggers'],
    techStack: ['WhatsApp', 'Click-to-Call', 'Mobile UX', 'Instant Alerts'],
    badge: '1-Tap Chat'
  },
  {
    id: 'product-showcase',
    name: 'Product & Service Catalogue',
    tagline: 'Visual Collections, Categories & Highlights',
    description: 'Clean, organized photo galleries and product categories showing what you sell with descriptions, specifications, and direct inquiry actions.',
    category: 'Catalogue Engine',
    features: [
      'Category browsing for easy navigation (e.g. Menswear, Jewellery, Hardware)',
      'High-resolution optimized photos that load quickly on mobile',
      'Item specifications, dimensions, materials, and price options',
      'Direct WhatsApp inquiry button attached to each product'
    ],
    architecture: ['Dynamic Galleries', 'Category Filters', 'Image Optimization'],
    techStack: ['Visual Galleries', 'Filter Tabs', 'Fast CDN', 'PDF Catalogues'],
    badge: 'Organized Showcase'
  },
  {
    id: 'google-maps-presence',
    name: 'Google Maps & Local Presence',
    tagline: 'Directions, Business Hours & Customer Trust',
    description: 'Interactive Google Maps module, store timings, service areas, and customer review badges helping nearby customers find and trust your business.',
    category: 'Local Visibility',
    features: [
      'Interactive Google Maps with direct navigation button',
      'Prominently displayed shop opening hours and holiday notices',
      'Customer review and testimonial highlights',
      'SEO-friendly address and local area tagging'
    ],
    architecture: ['Google Maps API', 'Local Schema', 'Review Widgets'],
    techStack: ['Google Maps', 'Local SEO', 'Business Hours', 'Trust Badges'],
    badge: 'Find on Maps'
  }
];

export const TECHNOLOGIES: TechnologyCategory[] = [
  {
    id: 'mobile-design',
    title: 'Mobile-First & Performance',
    description: 'Fast, responsive design optimized for smartphones and smooth browsing.',
    items: [
      { name: 'Mobile-First Layout', description: 'Engineered specifically for smartphone screens where 85%+ of local customers browse.', tags: ['Mobile', 'Responsive', 'Touch-Friendly'], level: 'Core' },
      { name: 'Fast Page Loading', description: 'Sub-second loading speeds on mobile data networks so visitors never wait.', tags: ['Fast', 'Speed', '95+ Score'], level: 'Core' },
      { name: 'Clean Modern Design', description: 'Clear typography and spacious layouts that make your business look professional.', tags: ['Design', 'Credibility'], level: 'Core' },
      { name: 'Cross-Device Support', description: 'Looks sharp on iPhones, Android phones, tablets, laptops, and desktops.', tags: ['iOS', 'Android', 'Desktop'], level: 'Enterprise' }
    ]
  },
  {
    id: 'local-features',
    title: 'Local Customer Tools',
    description: 'Practical features that make it easy for local buyers to call, chat, and visit.',
    items: [
      { name: '1-Tap WhatsApp', description: 'Direct chat button opening a pre-filled WhatsApp conversation on your phone.', tags: ['WhatsApp', 'Direct Chat'], level: 'Core' },
      { name: '1-Tap Phone Call', description: 'Clickable phone numbers enabling instant dialing from any smartphone.', tags: ['Calling', 'Direct Contact'], level: 'Core' },
      { name: 'Google Maps Location', description: 'Interactive map and directions link leading customers to your door.', tags: ['Google Maps', 'Directions'], level: 'Core' },
      { name: 'Business Hours & Timings', description: 'Clear indicators of when your store or office is open for visits.', tags: ['Timings', 'Open Hours'], level: 'Specialized' }
    ]
  },
  {
    id: 'business-features',
    title: 'Product & Enquiry Systems',
    description: 'Showcase your items and capture customer requirements around the clock.',
    items: [
      { name: 'Product Galleries', description: 'Organized categories, photos, and specs for everything you sell.', tags: ['Products', 'Catalogue'], level: 'Core' },
      { name: 'Online Enquiry Forms', description: 'Simple contact forms capturing customer requirements 24/7.', tags: ['Enquiry', 'Lead Capture'], level: 'Core' },
      { name: 'Promotional Banners', description: 'Highlight festival discounts, new arrivals, and special promotions.', tags: ['Offers', 'Discounts'], level: 'Specialized' },
      { name: 'Customer Testimonials', description: 'Show real customer reviews and photos to build immediate trust.', tags: ['Trust', 'Reviews'], level: 'Core' }
    ]
  },
  {
    id: 'hosting-security',
    title: 'Hosting & Reliability',
    description: 'Secure, dependable website hosting with SSL encryption and domain support.',
    items: [
      { name: 'SSL Security Certificate', description: 'Green padlock (HTTPS) protecting your visitors and boosting Google trust.', tags: ['SSL', 'Secure HTTPS'], level: 'Core' },
      { name: 'Custom Domain Setup', description: 'Help connecting your own .com or .in domain name (e.g. yourshop.com).', tags: ['Domain', '.in / .com'], level: 'Core' },
      { name: '99.9% Uptime Hosting', description: 'Reliable cloud servers ensuring your website is always online and accessible.', tags: ['Cloud', 'High Uptime'], level: 'Enterprise' },
      { name: 'Ongoing Update Support', description: 'Friendly support to update photos, prices, and text whenever needed.', tags: ['Support', 'Maintenance'], level: 'Specialized' }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-chandragarments',
    title: 'Chandragarments B2B Platform',
    clientIndustry: 'Wholesale Manufacturing & Garments',
    category: 'Wholesale & B2B',
    categories: ['Wholesale', 'Manufacturing', 'Web'],
    summary: 'A full-stack B2B digital showroom and wholesale ordering system featuring pack-based pricing, real-time stock status, and a modern UI.',
    technologies: ['B2B Showroom', 'Pack Pricing', 'Wholesale Orders', 'WhatsApp Support', 'Real-Time Stock'],
    metrics: [
      { label: 'Order Velocity', value: '+240%' },
      { label: 'Stock Accuracy', value: '100%' },
      { label: 'Manual Calls', value: '-85%' }
    ],
    liveUrl: 'https://chandragarments-wholesale.ai.studio/',
    caseStudy: {
      challenge: 'Chandragarments relied on manual WhatsApp messages and paper ledgers, causing overselling risks, inventory confusion, and a lack of organized B2B showcase for new collections.',
      goals: [
        'Develop a clean digital showroom for bulk B2B garment buyers across India',
        'Implement pack-based wholesale pricing and Minimum Order Quantity (MOQ) rules',
        'Provide instant WhatsApp communication for order confirmations and queries'
      ],
      researchAndUx: 'Created a high-density, structured digital catalogue allowing retail shop buyers to quickly select sizes, colours, pack quantities, and place wholesale inquiries.',
      architecture: 'React frontend with Express/Node.js backend and real-time inventory management for wholesale dispatching.',
      development: 'Integrated quick category filters, pack-size calculators, and an automated WhatsApp order summary generator.',
      securityMeasures: [
        'Secure authentication and role-based access for wholesale admin',
        'Atomic inventory checks preventing duplicate reservations',
        'Encrypted data storage and HTTPS transmission'
      ],
      testingAndQa: 'Tested wholesale ordering workflows with multi-item bulk orders and verified WhatsApp message generation.',
      results: [
        'Eliminated manual paper-based order recording and phone confusion',
        'Wholesale buyers easily browse collections and place bulk repeat orders',
        'Elevated brand perception across wholesale distributors and retailers'
      ],
      futureImprovements: [
        'Transport lorry receipt (LR) tracking updates via SMS/WhatsApp',
        'Automated GST invoice generation module'
      ]
    }
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'TELL US',
    title: 'Tell Us About Your Business',
    description: 'Send us your business name, location, what products or services you sell, and what you want the website to achieve.',
    activities: [
      'Share your business name, shop location, and contact details',
      'Tell us what products, services, or collections you offer',
      'Share your existing photos, logo, or price list (if available)',
      'Discuss your timeline and package preferences'
    ],
    deliverables: [
      'Clear project requirement summary',
      'Recommended page structure and features list',
      'Transparent, reasonable custom quote with zero hidden fees',
      'Initial concept direction'
    ],
    durationEstimate: 'Day 1'
  },
  {
    step: '02',
    name: 'DEMO',
    title: 'See Your Demo / Proposed Design',
    description: 'We create a tailored website concept and layout so you can see how your business will look online before moving forward.',
    activities: [
      'We prepare a preview of your proposed homepage and layout',
      'Showcase how your products, services, WhatsApp, and Google Maps will look',
      'Review together and gather your feedback or changes',
      'Fine-tune color scheme, text, and structure'
    ],
    deliverables: [
      'Interactive website concept preview',
      'Mobile view walkthrough on smartphone screens',
      'Confirmed feedback and content adjustment checklist',
      'Approval to proceed with full website build'
    ],
    durationEstimate: '2 – 4 Days'
  },
  {
    step: '03',
    name: 'BUILD',
    title: 'We Build & Optimise Your Website',
    description: 'We develop the full website, add all your pages, photos, descriptions, WhatsApp buttons, Google Maps, and optimise it for mobile speed.',
    activities: [
      'Build all agreed pages (Home, About, Products, Contact, etc.)',
      'Configure 1-tap WhatsApp chat and click-to-call buttons',
      'Embed interactive Google Maps with your exact shop location',
      'Test fast loading speeds and mobile layout across all smartphones'
    ],
    deliverables: [
      'Complete, working website on a private test link',
      'All product photos, text, and pricing populated',
      'Fully functioning contact forms and WhatsApp triggers',
      'Google Core Web Vitals speed optimization'
    ],
    durationEstimate: '1 – 2 Weeks'
  },
  {
    step: '04',
    name: 'GO LIVE',
    title: 'Connect Domain & Publish Online',
    description: 'We test everything thoroughly, connect your custom domain name (.com or .in), set up SSL security, and launch your website live.',
    activities: [
      'Connect your custom domain name (e.g. yourbusiness.com)',
      'Install secure SSL (HTTPS) certificate with green padlock',
      'Perform final testing on Android and iPhone devices',
      'Hand over your live website and provide guidance on future updates'
    ],
    deliverables: [
      'Live website published on your custom domain',
      'Active SSL security certificate',
      'Direct WhatsApp support channel for future updates',
      'Guidance on sharing your website link with customers'
    ],
    durationEstimate: 'Launch Day'
  }
];

export const WHY_INFITECH_PILLARS = [
  {
    id: 'pillar-business-focused',
    title: 'Built Around Your Business',
    description: 'We design the website around what you actually sell, who your local customers are, and how people prefer to contact you.'
  },
  {
    id: 'pillar-not-a-template',
    title: 'Not Just a Generic Template',
    description: 'Your website should look like your actual shop or showroom, with your colors, your real photos, and your distinct identity.'
  },
  {
    id: 'pillar-mobile-first',
    title: 'Mobile-First for Every Phone',
    description: 'Your customers browse on their phones. We ensure every button, photo, and text looks crisp and easy to tap on all screen sizes.'
  },
  {
    id: 'pillar-easy-contact',
    title: 'Easy WhatsApp & Call Actions',
    description: 'WhatsApp, phone calling, enquiry forms, and Google Maps are placed where customers can use them in one single tap.'
  },
  {
    id: 'pillar-fast-simple',
    title: 'Fast Loading & Simple to Browse',
    description: 'No slow, cluttered pages. We focus on a smooth, instantaneous experience so customers find what they need in seconds.'
  },
  {
    id: 'pillar-affordable',
    title: 'Reasonable & Fair Pricing',
    description: 'Clear, custom quotes designed around what you actually need without expensive agency overhead or inflated packages.'
  },
  {
    id: 'pillar-support',
    title: 'Support After Your Launch',
    description: 'We help you update products, photos, festival offers, prices, and business details anytime after your website is live.'
  },
  {
    id: 'pillar-one-team',
    title: 'One Reliable Team for Everything',
    description: 'Website development, updates, domain, hosting setup, Google Maps, and local digital support all handled in one place.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-cost',
    category: 'Pricing & Cost',
    question: 'How much does a website cost?',
    answer: 'We provide fair, reasonable pricing tailored around your exact requirements, budget, and business goals with no agency overhead or inflated packages. Tell us what you need and we will provide a clear, transparent custom quote.'
  },
  {
    id: 'faq-time',
    category: 'Timelines',
    question: 'How long does it take to build the website?',
    answer: 'Most small business websites can be completed in around 1–3 weeks depending on how quickly content and photos are provided, revisions, and functionality requirements.'
  },
  {
    id: 'faq-mobile',
    category: 'Mobile & Speed',
    question: 'Will my website work properly on mobile phones?',
    answer: 'Yes, 100%. Every website we build is designed mobile-first and tested thoroughly across Android phones, iPhones, tablets, and desktop computers.'
  },
  {
    id: 'faq-whatsapp',
    category: 'Features',
    question: 'Can customers contact me directly through WhatsApp?',
    answer: 'Yes! We add a prominent floating WhatsApp button, pre-filled inquiry message templates, and one-tap click-to-call buttons throughout the website.'
  },
  {
    id: 'faq-maps',
    category: 'Location',
    question: 'Can you add our shop location and Google Maps?',
    answer: 'Yes. We embed an interactive Google Maps module with your exact location and a direct "Get Directions" button so nearby customers can navigate to your store easily.'
  },
  {
    id: 'faq-products',
    category: 'Product Catalogue',
    question: 'Can you showcase all my products and categories?',
    answer: 'Yes. We can build organized product galleries, category filters (e.g., Menswear, Jewellery, Furniture, Hardware), product detail pages, and direct WhatsApp inquiry buttons for each item.'
  },
  {
    id: 'faq-content',
    category: 'Content & Photos',
    question: 'Do I need to provide all the content and text myself?',
    answer: 'You only need to provide basic information about what you sell, your address, timings, and photos. We will help structure, write, and organize the content professionally for the website.'
  },
  {
    id: 'faq-domain-hosting',
    category: 'Domain & Hosting',
    question: 'Do you provide domain name (.com / .in) and hosting?',
    answer: 'Yes. We assist with domain registration guidance (.com, .in, etc.), hosting setup, and SSL security configuration so your website is fast and secure.'
  },
  {
    id: 'faq-updates',
    category: 'Maintenance',
    question: 'Can I update photos, prices, or offers later?',
    answer: 'Yes. We provide ongoing support to update your products, photos, prices, and festival offers whenever you need. We can also provide an easy content management setup if you prefer to edit yourself.'
  },
  {
    id: 'faq-redesign',
    category: 'Redesign',
    question: 'Can you redesign my existing old website?',
    answer: 'Yes! We can modernize your existing website, improve the mobile browsing experience, make the information easy to find, and add WhatsApp and Google Maps.'
  },
  {
    id: 'faq-business-size',
    category: 'Business Types',
    question: 'Do you only work with large companies?',
    answer: 'No. We specifically focus on local businesses, shops, retailers, wholesalers, manufacturers, showrooms, restaurants, and growing service providers in India.'
  },
  {
    id: 'faq-industry',
    category: 'Customization',
    question: 'Can you create a website tailored for my specific industry?',
    answer: 'Yes. We customize the design, colors, and layout around your specific business type — whether clothing, jewellery, grocery, furniture, electronics, hardware, manufacturing, salon, or professional services.'
  },
  {
    id: 'faq-demo',
    category: 'Free Demo',
    question: 'Can I see a demo before deciding to purchase?',
    answer: 'Yes! Simply share your business name and what you sell, and we can prepare a free website concept preview showing how your business could look online with no obligation.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tushar-navraja',
    number: '01',
    name: 'Tushar Navraja',
    role: 'Founder & CEO',
    description: 'Leads the overall vision, business strategy, client relationships, and growth of INFITECH SOLUTIONS. Focused on understanding business challenges and turning them into effective technology solutions.',
    email: 'tusharnavarja9@gmail.com',
    photo: '/tushar.jpg?v=3',
    altText: 'Tushar Navraja, Founder & CEO of INFITECH SOLUTIONS'
  },
  {
    id: 'kaushal-dholakiya',
    number: '02',
    name: 'Kaushal Dholakiya',
    role: 'Co-Founder & CTO',
    description: 'Leads technology, software development, AI solutions, and technical architecture. Responsible for building scalable, secure, and high-performance digital products.',
    email: 'kaushaldholakiya4@gmail.com',
    photo: '/kaushal.jpg?v=3',
    altText: 'Kaushal Dholakiya, Co-Founder & CTO of INFITECH SOLUTIONS'
  },
  {
    id: 'aryan-yadav',
    number: '03',
    name: 'Aryan Yadav',
    role: 'Co-Founder & COO',
    description: 'Oversees operations, project management, client coordination, and business execution. Ensures projects are delivered efficiently while maintaining quality and client satisfaction.',
    email: 'aryany3456@gmail.com',
    photo: '/aryan.jpg?v=3',
    altText: 'Aryan Yadav, Co-Founder & COO of INFITECH SOLUTIONS'
  }
];

export const COMPANY_VALUES: MissionValue[] = [
  {
    title: 'INNOVATION',
    description: 'We explore modern technology to build useful solutions for real-world problems.'
  },
  {
    title: 'RELIABILITY',
    description: 'We focus on dependable products, thoughtful engineering and quality execution.'
  },
  {
    title: 'IMPACT',
    description: 'We build technology with a clear purpose: creating meaningful value for businesses.'
  }
];
