import React, { useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar as CalendarIcon } from 'lucide-react';
import { Layout } from './components/Layout';
import { BlockRenderer } from './components/BlockRenderer';
import { Calendar } from './components/Calendar';
import { BlogCard } from './components/BlogCard'; // <--- Import the new component
import { getSortedPosts, getPostById } from './services/blogData';

// --- Page: Home ---
const HomePage: React.FC = () => {
  const sortedPosts = useMemo(() => getSortedPosts(), []);
  const latestPost = sortedPosts[0];

  return (
    <div className="animate-fade-in py-16 px-4">
      {latestPost ? (
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <h2 className="text-nature-800 font-serif text-2xl md:text-3xl font-bold tracking-wide">
              Latest Blog Entry
            </h2>
          </div>
          
          {/* USE THE NEW COMPONENT HERE (Horizontal Variant) */}
          <BlogCard post={latestPost} variant="horizontal" />

        </div>
      ) : (
        <div className="text-center py-20 max-w-2xl mx-auto border-2 border-dashed border-nature-200 rounded-xl">
           <h2 className="text-2xl font-serif text-nature-800 mb-2">Welcome</h2>
           <p className="text-nature-600">No blog entries yet. Check back soon for updates!</p>
        </div>
      )}
    </div>
  );
};

// --- Page: Blog List ---
const BlogListPage: React.FC = () => {
  const sortedPosts = useMemo(() => getSortedPosts(), []);
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Post List */}
        <div className="lg:w-2/3">
          <header className="mb-12 border-b border-nature-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-nature-900">
              My Blog
            </h1>
            <p className="text-nature-500 mt-4 font-serif text-lg">
            </p>
          </header>

          <div className="space-y-12">
            {sortedPosts.map(post => (
              // USE THE NEW COMPONENT HERE (Default Vertical Variant)
              <BlogCard key={post.id} post={post} variant="vertical" />
            ))}
            
            {sortedPosts.length === 0 && (
               <div className="text-center py-20 text-nature-400 border-2 border-dashed border-nature-200 rounded-xl bg-white">
                  <p className="font-serif text-xl">No entries found. Time to start the adventure!</p>
               </div>
            )}
          </div>
        </div>

        {/* Right Column: Sidebar (Calendar & Utils) */}
        <div className="lg:w-1/3 space-y-10">
           <div className="sticky top-28">
             <h3 className="font-serif font-bold text-nature-800 mb-6 flex items-center gap-2 text-xl">
                <CalendarIcon size={20} /> Archive
             </h3>
             <Calendar 
                posts={sortedPosts} 
                onSelectDate={(id) => navigate(`/blog/${id}`)}
             />
           </div>
        </div>

      </div>
    </div>
  );
};

// --- Page: Single Blog Post ---
const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPostById(id || '');

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif text-nature-800 mb-4">Entry Not Found</h2>
        <Link to="/blog" className="text-nature-600 hover:underline font-sans">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
      {/* Post Header */}
      <header className="text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-nature-500 mb-6 font-sans text-xs tracking-[0.2em] uppercase font-bold">
          <span>{post.date}</span>
          {post.location && (
            <>
              <span className="mx-2 text-nature-300">•</span>
              <span>{post.location}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-nature-900 mb-8 leading-tight">
          {post.title}
        </h1>
        {post.coverImage && (
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mt-10 border border-nature-200">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      {/* Post Content */}
      <div className="prose prose-nature prose-lg mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-nature-100">
        {post.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
        
        {/* Footer of the post */}
        <div className="mt-20 pt-10 border-t border-nature-100 flex justify-between text-nature-500 text-sm font-sans tracking-wide">
           <Link to="/blog" className="hover:text-nature-800 flex items-center gap-2 transition-colors uppercase font-bold text-xs">
             <ArrowRight className="rotate-180" size={16} /> Back to Blog
           </Link>
        </div>
      </div>
    </article>
  );
};

// --- Main App Component ---
function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;