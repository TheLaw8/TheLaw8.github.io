import { BlogPost, BlockType } from '../types';

/* 
  INSTRUCTIONS FOR MANAGING CONTENT:
  
  1. IMAGES:
     - Create a folder named `images` inside your `public` folder.
     - Ideally, create subfolders for each day or post to keep things organized.
     - Example: `public/images/day-01/cover.jpg`
     - When referencing in code below, use the path starting with `/images/...`
       (e.g., content: '/images/day-01/cover.jpg')

  2. ADDING A POST:
     - Create a unique ID (slug).
     - Add the object to the `posts` array.
     - Commit and push to GitHub.
*/

export const posts: BlogPost[] = [
  {
    id: 'test',
    title: 'Test',
    date: '2025-11-23',
    location: 'Melbourne, Australia',
    summary: 'This is a test entry.',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Test Entry'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "This is a test paragraph to verify the new design and layout."
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Previous Test',
    date: '2025-11-22',
    location: 'Sydney, Australia',
    summary: 'Another test entry for the previous day.',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Second Test Entry'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "This is a second test paragraph to verify the calendar and list sorting."
      }
    ]
  }
];

// Helper to sort posts by date (newest first)
export const getSortedPosts = (): BlogPost[] => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostById = (id: string): BlogPost | undefined => {
  return posts.find(p => p.id === id);
};

export const getPostsByMonth = (year: number, month: number): BlogPost[] => {
  return posts.filter(p => {
    const d = new Date(p.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
};