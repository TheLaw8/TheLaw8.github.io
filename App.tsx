import React, { useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { Layout } from './components/Layout';
import { BlockRenderer } from './components/BlockRenderer';
import { Calendar } from './components/Calendar';
import { getSortedPosts, getPostById } from './services/blogData';

// --- Page: Home ---
const HomePage: React.FC = () => {
  const sortedPosts = useMemo(() => getSortedPosts(), []);
  const latestPost = sortedPosts[0];

  return (
    <div className="animate-fade-in py-16 px-4">
      {latestPost ? (
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <h2 className="text-nature-800 font-serif text-2xl md:text-3xl font-bold tracking-wide">Latest Blog Entry</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-1 duration-300 border border-nature-100">
            {latestPost.coverImage && (
              <div className="md:w-1/2 h-64 md:h-auto relative group">
                 <img 
                  src={latestPost.coverImage} 
                  alt={latestPost.title} 
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
            <div className={`p-8 flex flex-col justify-center ${latestPost.coverImage ? 'md:w-1/2' : 'w-full'}`}>
              <div className="flex items-center gap-2 text-nature-500 text-sm mb-3 font-sans tracking-wide">
                <CalendarIcon size={14} /> {latestPost.date}
              </div>
              <h3 className="text-3xl font-serif font-bold text-nature-900 mb-4">{latestPost.title}</h3>
              <p className="text-nature-700 mb-6 line-clamp-3 leading-relaxed font-serif">{latestPost.summary}</p>
              <Link to={`/blog/${latestPost.id}`} className="text-nature-600 font-bold hover:text-nature-800 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans">
                Read Full Post <ArrowRight size={16} />
              </Link>
            </div>
          </div>
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
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-nature-900">Travel Blog</h1>
          </header>

          <div className="space-y-12">
            {sortedPosts.map(post => (
              <article key={post.id} className="group bg-white p-6 rounded-xl shadow-sm border border-nature-200 hover:shadow-md transition-shadow">
                {post.coverImage && (
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg mb-6 shadow-sm border border-nature-100">
                    <div className="w-full h-64 md:h-80 overflow-hidden relative">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                      />
                    </div>
                  </Link>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-nature-500 mb-3 font-sans uppercase tracking-widest">
                     <CalendarIcon size={14} />
                    <span>{post.date}</span>
                    {post.location && (
                      <>
                        <span>•</span>
                        <span>{post.location}</span>
                      </>
                    )}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-3xl font-serif font-bold text-nature-800 group-hover:text-nature-600 mb-3 transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-nature-600 mb-6 line-clamp-3 text-lg leading-relaxed font-serif">{post.summary}</p>
                  <Link to={`/blog/${post.id}`} className="text-nature-800 hover:text-nature-600 font-serif italic text-base flex items-center gap-2">
                    Read Entry <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
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
              <span className="mx-2">•</span>
              <span>{post.location}</span>
            </>
          )}
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-nature-900 mb-8 leading-tight">
          {post.title}
        </h1>
        {post.coverImage && (
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mt-10">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      {/* Post Content */}
      <div className="prose prose-nature prose-lg mx-auto bg-white p-8 md:p-16 rounded-xl shadow-sm border border-nature-50">
        {post.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
        
        {/* Footer of the post */}
        <div className="mt-20 pt-10 border-t border-nature-100 flex justify-between text-nature-500 text-sm font-sans tracking-wide">
           <Link to="/blog" className="hover:text-nature-800 flex items-center gap-2 transition-colors uppercase font-bold text-xs">
             <ArrowRight className="rotate-180" size={16} /> Back to Blog
           </Link>
           <span>{post.date}</span>
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