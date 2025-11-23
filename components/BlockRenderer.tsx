import React from 'react';
import { ContentBlock, BlockType } from '../types';
import { Play } from 'lucide-react';

interface BlockRendererProps {
  block: ContentBlock;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block.type) {
    case BlockType.HEADER:
      return (
        <h2 className="text-2xl md:text-3xl font-serif text-nature-800 font-bold mt-8 mb-4">
          {block.content}
        </h2>
      );

    case BlockType.PARAGRAPH:
      return (
        <p className="text-lg text-ink leading-relaxed mb-6 font-serif">
          {block.content}
        </p>
      );

    case BlockType.IMAGE:
      return (
        <figure className="my-8 group">
          <div className="overflow-hidden rounded-lg shadow-md border border-nature-200">
            <img 
              src={block.content as string} 
              alt={block.meta?.alt || 'Blog image'} 
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-nature-600 mt-2 italic font-serif">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case BlockType.QUOTE:
      return (
        <blockquote className="border-l-4 border-nature-400 pl-4 italic text-xl text-nature-700 my-8 py-2 bg-nature-50 rounded-r-lg">
          "{block.content}"
        </blockquote>
      );
      
    case BlockType.LIST:
      if (Array.isArray(block.content)) {
        return (
          <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-lg text-ink font-serif">
            {block.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      }
      return null;

    case BlockType.YOUTUBE:
      return (
        <div className="my-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md border border-nature-200 bg-nature-900">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${block.content}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {block.caption && (
            <div className="text-center text-sm text-nature-600 mt-2 italic font-serif flex items-center justify-center gap-1">
              <Play size={12} /> {block.caption}
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};