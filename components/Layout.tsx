import React from 'react';
import { BookOpen, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-nature-900 border-b-2 border-nature-800" 
      : "text-nature-600 hover:text-nature-800 hover:border-b-2 hover:border-nature-300";
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all">
        {/* Changed from max-w-7xl to w-full with generous padding to reduce margins relative to content */}
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex justify-between h-20">
            {/* Brand / Name */}
            <div className="flex items-center">
              <Link to="/" className="font-serif text-2xl md:text-3xl font-bold text-nature-900 tracking-tight hover:opacity-80 transition-opacity">
                Lawrence Hider
              </Link>
            </div>
            
            {/* Nav Links */}
            <div className="flex items-center space-x-6 md:space-x-8">
              <Link 
                to="/" 
                className={`py-1 text-sm uppercase tracking-widest font-serif font-bold transition-all duration-200 ${isActive('/')}`}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`py-1 text-sm uppercase tracking-widest font-serif font-bold transition-all duration-200 ${isActive('/blog')}`}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-nature-900 text-nature-200 py-10 mt-12 border-t border-nature-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-sans text-sm opacity-80 tracking-wide">
            Copyright © 2025 Lawrence Hider. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};