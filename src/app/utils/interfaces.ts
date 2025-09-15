/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string | null;
  metaViewport: string | null;
  canonicalURL: string | null;
  structuredData: string | null;
}

export interface Job {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  location: string;
  experience: string;
  description: string;
  responsibilities: string;
  requirements: string;
  isOpen: boolean;
  createdAt: string; 
  updatedAt: string; 
  publishedAt: string; 
  tags: any;
}

export interface Tag {
  type: string; 
  children: TagChild[];
}

export interface TagChild {
  text: string; 
  type: string;
}

export interface applicationDetails {
  name: string;
  email: string;
}


export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author: string;
  tags: string[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
  Seo: Seo;
}