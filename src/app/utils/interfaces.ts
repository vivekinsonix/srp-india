/* eslint-disable @typescript-eslint/no-explicit-any */

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
  is_main: boolean;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface GalleryItem {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any; // or a specific type if you know the formats object shape
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Events {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  summary: string;
  date: string;
  category: string;
  body: string;
  links: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Seo: Seo;
  gallery: GalleryItem[];
}

export interface QuestionField {
  id: number;
  documentId: string;
  text: string;
  label: string;
  type: string;
  required: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CareersBenifits {
  id: number;
  documentId: string;
  content: string; // Markdown/HTML string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}

export interface Suppliers {
  company_name: string;
  email: string;
  website: string;
  offering: string;
  
}
