export enum BlockType {
  PARAGRAPH = 'paragraph',
  HEADER = 'header',
  IMAGE = 'image',
  YOUTUBE = 'youtube',
  QUOTE = 'quote',
  LIST = 'list'
}

export interface ContentBlock {
  type: BlockType;
  content: string | string[]; // Text content, Image URL, or Video ID
  caption?: string; // Optional caption for images/videos
  meta?: {
    height?: number;
    width?: number;
    alt?: string;
  };
}

export interface BlogPost {
  id: string; // Unique slug, e.g., '2023-10-27-departure'
  title: string;
  date: string; // ISO format YYYY-MM-DD
  summary: string; // Short excerpt for the card view
  coverImage?: string; // URL for the cover image
  location?: string; // e.g., "Kyoto, Japan"
  blocks: ContentBlock[];
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  hasPost: boolean;
  postId?: string;
}