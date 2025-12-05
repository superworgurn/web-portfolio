// src/compo/BlogDetail.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, Share2, User, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
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

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const blogs: BlogPost[] = blogsData as BlogPost[];
  const blog = blogs.find(b => b.id === parseInt(id || '0'));

  const transformContentToMarkdown = (content: string) => {
    if (!content) return "";
    return content
      .replace(/★/g, '## ')
      .replace(/☆/g, '### ')
      .replace(/\n/g, '\n\n');
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Blog Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-surface/50 px-4 h-16 flex items-center">
        <div className="max-w-4xl w-full mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-text/60 hover:text-text transition-colors"
          >
            <div className="p-2 rounded-full group-hover:bg-surface/50 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="hidden sm:inline font-medium">Back to Site</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-text hover:bg-surface/50 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
            <button className="p-2 hover:text-text hover:bg-surface/50 rounded-full transition-colors">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-10 md:py-16">
        {/* Article Header */}
        <header className="mb-10">
          <div className="mb-4">
            <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <User size={24} className="text-text/80" />
              </div>
            </div>
            <div>
              <p className="font-bold text-text">{blog.author}</p>
              <div className="flex items-center gap-3 text-sm text-text/60">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-12 -mx-6 md:-mx-0">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-auto md:rounded-lg shadow-lg"
          />
        </figure>

        {/* Article Content */}
        <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none font-serif 
          prose-headings:font-sans prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
          prose-p:leading-8 prose-p:text-text/90 prose-p:mb-6
          prose-img:rounded-xl prose-a:text-primary">
          
          <ReactMarkdown>
            {transformContentToMarkdown(blog.content)}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-surface">
          <h4 className="font-bold mb-4">Related Tags</h4>
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-surface text-text/70 text-sm rounded-full hover:bg-surface/80 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <div className="bg-surface/50 py-12 px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.id !== blog.id && b.category === blog.category)
              .slice(0, 2)
              .map(relatedBlog => (
                <div 
                  key={relatedBlog.id}
                  onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                  className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedBlog.imageUrl} 
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold mb-2 line-clamp-2">{relatedBlog.title}</h4>
                    <p className="text-text/60 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;