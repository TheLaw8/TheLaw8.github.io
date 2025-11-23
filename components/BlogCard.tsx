import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'vertical' | 'horizontal'; // 'vertical' for list, 'horizontal' for featured/home
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'vertical' }) => {
  const isHorizontal = variant === 'horizontal';

  return (
    <article className={`
      group relative bg-white rounded-2xl overflow-hidden border border-nature-100
      transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1
      flex shadow-md h-full
      ${isHorizontal ? 'flex-col md:flex-row' : 'flex-col'}
    `}>
      {/* 
        PREVIEW IMAGE SECTION
        This pulls the 'coverImage' URL from your blogData.ts 
      */}
      {post.coverImage && (
        <Link 
          to={`/blog/${post.id}`} 
          className={`
            block overflow-hidden relative shrink-0
            ${isHorizontal ? 'md:w-7/12 min-h-[350px]' : 'w-full h-64 md:h-72'}
          `}
        >
          {/* Brightening overlay removed to keep image clear, relying on hover zoom for effect */}
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </Link>
      )}

      {/* CONTENT SECTION */}
      <div className={`
        flex flex-col justify-center p-8 relative
        ${isHorizontal ? 'md:w-5/12' : 'w-full flex-grow'}
      `}>
        {/* Meta Tags (Date & Location) */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-sans font-bold tracking-widest mb-4 uppercase">
          
          {/* Date */}
          <div className="flex items-center gap-1.5 bg-nature-50 text-nature-600 px-2 py-1 rounded-md">
            <CalendarIcon size={12} />
            <span>{post.date}</span>
          </div>
          
          {/* Location - Now darker and clearer (not opaque) */}
          {post.location && (
            <div className="flex items-center gap-1.5 text-nature-700">
              <MapPin size={12} />
              <span>{post.location}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <Link to={`/blog/${post.id}`} className="block">
          <h2 className={`
            font-serif font-bold text-nature-900 mb-4 leading-tight transition-colors group-hover:text-nature-700
            ${isHorizontal ? 'text-3xl md:text-4xl' : 'text-2xl'}
          `}>
            {post.title}
          </h2>
        </Link>

        {/* Summary */}
        <p className="text-nature-600 mb-8 line-clamp-3 leading-relaxed font-serif text-base opacity-90">
          {post.summary}
        </p>

        {/* Read More Button - Static Arrow */}
        <div className="mt-auto pt-4 border-t border-nature-100">
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-nature-800 transition-colors hover:text-nature-500"
          >
            Read Entry
            <ArrowRight size={14} className="text-nature-400" />
          </Link>
        </div>
      </div>
    </article>
  );
};