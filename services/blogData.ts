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
    // coverImage: '/images/Wooper.jpg',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Test Entry'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "This is a test paragraph."
      },
      {
        type: BlockType.IMAGE,
        content: '/images/Wooper.jpg',
        meta: {
          alt: 'Wooper'
        }
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Wooper's Birthday!"
      }
    ]
  },
  {
    id: '24-Nov-2025-v1',
    title: 'Leaving Melbourne',
    date: '2025-11-24',
    location: 'Melbourne - Chengdu',
    summary: 'Melbourne to Chengdu',
    blocks: [
      {
        type: BlockType.HEADER,
        content: 'Melbourne to Chengdu'
      },
      {
        type: BlockType.PARAGRAPH,
        content: "Taking flight 3U3886 to Chengdu"
      },
      {
        type: BlockType.IMAGE,
        content: '/images/24-Nov-2025/Planes.jpg',
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