export interface FunctioningStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'SaaS' | 'BioTech' | 'FinTech' | 'AI/ML' | 'DevTools';
  tags: string[];
  thumbnailUrl: string;
  deploymentLink: string;
  repoLink?: string;
  functioning: FunctioningStep[];
  detailedContent?: string;
  createdAt: string;
}

export type SortOption = 'newest' | 'oldest' | 'az';