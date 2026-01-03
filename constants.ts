/**
 * Project Data Constants
 * 
 * This file contains the complete project portfolio data that powers both
 * the React application and the static landing page. Each project includes
 * metadata, descriptions, technical details, and functioning steps.
 * 
 * Structure:
 * - Projects are stored in a typed array conforming to the Project interface
 * - Each project has a unique ID, metadata, links, and step-by-step functioning details
 * - Thumbnails are referenced from the /public/thumbnails directory
 * 
 * @module constants
 */

import { Project } from './types';

/**
 * Complete portfolio of projects
 * 
 * Each project contains:
 * - id: Unique identifier
 * - title: Project name
 * - description: Comprehensive project overview
 * - category: Classification (AI/ML, SaaS, FinTech, DevTools, BioTech)
 * - tags: Technology stack and keywords
 * - thumbnailUrl: Path to project thumbnail image
 * - deploymentLink: Live deployment URL
 * - repoLink: GitHub repository URL (optional)
 * - functioning: Step-by-step breakdown of how the project works
 * - createdAt: Project creation date (ISO format)
 */
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Flagr',
    description: 'Flagr is a modern AI-driven document analysis and chat platform built with React and TypeScript. By unifying intelligent document processing with a natural language conversational interface, Flagr allows users to seamlessly query documents and instantly flags suspicious or risky content within contracts.',
    category: 'AI/ML',
    tags: ['React', 'TypeScript', 'AI', 'NLP', 'Document Processing'],
    thumbnailUrl: '/screenshots/Screenshot 2026-01-03 013332.png',
    deploymentLink: 'https://flagr.vercel.app/',
    createdAt: '2025-01-01',
    functioning: [
      { step: 1, title: 'Document Upload', description: 'Users upload documents (PDF, DOCX, TXT) which are validated and preprocessed for analysis.' },
      { step: 2, title: 'AI Analysis', description: 'Advanced language models parse and analyze document content, extracting key information and context.' },
      { step: 3, title: 'Interactive Chat', description: 'Users engage in natural language conversations to query, explore, and extract insights from their documents.' }
    ]
  },
  {
    id: '2',
    title: 'Sach.ai',
    description: 'An intelligent food analyzer that uses AI to provide personalized dietary insights. Built for the EnCode 2026 Hackathon with a focus on AI-native experience, real-time streaming, and generative UI. Sach.ai empowers users to make informed dietary choices by analyzing food items, ingredients, and nutritional content through advanced AI models.',
    category: 'AI/ML',
    tags: ['AI', 'Health Tech', 'Real-time', 'Generative UI', 'Nutrition'],
    thumbnailUrl: '/screenshots/Screenshot 2026-01-03 013757.png',
    deploymentLink: 'https://truth-pulse-seven.vercel.app/',
    createdAt: '2026-01-02',
    functioning: [
      { step: 1, title: 'Food Recognition', description: 'Users input or photograph food items which are identified using computer vision models.' },
      { step: 2, title: 'Nutritional Analysis', description: 'AI analyzes nutritional content, ingredients, and provides personalized dietary recommendations.' },
      { step: 3, title: 'Real-time Insights', description: 'Streaming generative UI delivers instant, interactive feedback and suggestions based on user preferences and health goals.' }
    ]
  },
  {
    id: '3',
    title: 'ResQ',
    description: 'ResQ is a production-ready emergency response platform designed for real-time incident coordination. Built with React, TypeScript, Supabase, and Leaflet, it connects citizens, emergency responders, and resources in critical moments. The platform provides geospatial visualization, real-time updates, and coordination tools to streamline emergency response and save lives.',
    category: 'SaaS',
    tags: ['React', 'TypeScript', 'Supabase', 'Leaflet', 'Real-time', 'Emergency Response'],
    thumbnailUrl: '/screenshots/Screenshot 2026-01-03 014140.png',
    deploymentLink: 'https://res-q-f.vercel.app/',
    createdAt: '2025-12-15',
    functioning: [
      { step: 1, title: 'Incident Reporting', description: 'Citizens report emergencies through a simple interface with geolocation and incident details.' },
      { step: 2, title: 'Resource Coordination', description: 'Emergency responders receive real-time notifications and can coordinate resources and personnel via the platform.' },
      { step: 3, title: 'Live Tracking', description: 'Interactive map powered by Leaflet displays live incident locations, responder positions, and status updates.' }
    ]
  },
  {
    id: '4',
    title: 'DjedOPS',
    description: 'DjedOPS is a mission-critical monitoring platform providing operators and traders with real-time visibility into the Djed algorithmic stablecoin protocol on the Ergo blockchain. Built with a "Financial Brutalism" design philosophy, it combines live blockchain data, 3D visualizations, and automated risk management tools. The platform ensures transparency, stability monitoring, and operational insights for the Djed ecosystem.',
    category: 'FinTech',
    tags: ['Blockchain', 'Ergo', 'Real-time', 'Crypto', '3D Visualization', 'Risk Management'],
    thumbnailUrl: '/screenshots/Screenshot 2026-01-03 014950.png',
    deploymentLink: 'https://djed-ops.vercel.app/',
    createdAt: '2025-11-20',
    functioning: [
      { step: 1, title: 'Blockchain Monitoring', description: 'Continuously polls Ergo blockchain nodes for Djed protocol state, reserve ratios, and transaction data.' },
      { step: 2, title: 'Real-time Visualization', description: 'Displays live metrics, 3D graphs, and risk indicators using WebGL-based rendering for instant insights.' },
      { step: 3, title: 'Automated Alerts', description: 'Risk management engine triggers alerts and notifications when reserve ratios or stability thresholds are breached.' }
    ]
  },
  {
    id: '5',
    title: 'Alert-Aid',
    description: 'Alert Aid is a production-ready disaster prediction and alert system built with React, TypeScript, and advanced ML capabilities. Features an interactive 3D globe, real-time weather monitoring, and intelligent risk assessment. The platform provides early warnings for natural disasters, helping communities prepare and respond effectively to emergencies.',
    category: 'AI/ML',
    tags: ['Machine Learning', 'React', 'TypeScript', 'Disaster Prediction', '3D', 'Weather'],
    thumbnailUrl: '/screenshots/Screenshot 2026-01-03 015733.png',
    deploymentLink: 'https://alert-aid.vercel.app/',
    createdAt: '2025-10-10',
    functioning: [
      { step: 1, title: 'Data Aggregation', description: 'Collects real-time weather data, seismic activity, and environmental indicators from global sources.' },
      { step: 2, title: 'ML Prediction', description: 'Machine learning models analyze patterns and predict potential disasters with confidence scores and timelines.' },
      { step: 3, title: 'Alert Distribution', description: 'Sends geo-targeted alerts via multiple channels (SMS, push, email) with actionable safety instructions.' }
    ]
  },
  {
    id: '6',
    title: 'FlowKey',
    description: 'Flowkey is an AI-powered platform that enables the generation of complete system designs from a single prompt, streamlining the system architecture process.',
    category: 'AI/ML',
    tags: ['React', 'TypeScript', 'Tailwind', 'Google Gemini', 'AI Chat', 'Accessibility'],
    thumbnailUrl: '/screenshots/Screenshot 2026-01-03 020600.png',
    deploymentLink: 'https://flow-key-iota.vercel.app/',
    createdAt: '2026-01-03',
    functioning: [
      { step: 1, title: 'Chat Initialization', description: 'Establishes persistent session with Google Gemini API and loads conversation history from local storage.' },
      { step: 2, title: 'Streaming Responses', description: 'Real-time streaming of AI responses with token-by-token rendering for immediate user feedback.' },
      { step: 3, title: 'Conversation Persistence', description: 'Automatically saves chat history and context, enabling seamless continuation of conversations across sessions.' }
    ]
  }
];