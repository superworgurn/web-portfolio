// src/compo/Blogs.tsx (ปรับปรุงบางส่วน)
import { useState } from 'react';
import { Calendar, User, Clock, ChevronRight, ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; 
import { Link } from 'react-router-dom'; 
import blogsData from '../data/blog.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
}

const Blogs = () => {
  const blogs: BlogPost[] = blogsData as BlogPost[];
  const [showAll, setShowAll] = useState(false);

  const filteredBlogs = showAll ? blogs : blogs.slice(0, 4);
  const featuredBlogs = blogs.filter(blog => blog.featured);

  return (
    <section id="blogs" className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and design
          </p>
        </div>

        {/* Featured Blog Section */}
        {featuredBlogs.length > 0 && (
          <div className="mb-16">
            <Link to={`/blog/${featuredBlogs[0].id}`}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredBlogs[0].imageUrl} 
                      alt={featuredBlogs[0].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-primary text-sm font-bold mb-2">{featuredBlogs[0].category}</span>
                    <h3 className="text-2xl font-bold mb-4">{featuredBlogs[0].title}</h3>
                    <p className="text-text/60 mb-6 line-clamp-3">{featuredBlogs[0].excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      Read Article <ChevronRight size={20}/>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-text/50">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-text/60 mb-4 line-clamp-3 flex-grow text-sm">{blog.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-surface/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-text/60">
                      <User size={14} /> {blog.author.split(' ')[0]}
                    </div>
                    <span className="text-primary text-xs font-bold flex items-center">
                      READ <ChevronRight size={14}/>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Show More Button */}
        {blogs.length > 4 && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="px-8 py-3 bg-white border border-surface shadow-sm hover:shadow-md text-text rounded-full font-medium transition-all"
            >
              {showAll ? 'Show Less' : 'View All Stories'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;