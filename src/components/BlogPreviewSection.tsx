import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlogPreviewSectionProps {
  className?: string;
}

export default function BlogPreviewSection({ className }: BlogPreviewSectionProps) {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define fetchPosts outside useEffect so it can be called from other places
  const fetchPosts = async () => {
    try {
      // Use the prerendered static JSON file
      const response = await fetch("/api/blog-preview/data.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (!data.posts || !Array.isArray(data.posts)) {
        console.warn("Blog posts data is not in expected format:", data);
        setPosts([]);
      } else {
        setPosts(data.posts.slice(0, 3)); // Only get the latest 3
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setError(error instanceof Error ? error.message : "Failed to load blog posts");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section id="blog" className={cn("py-16", className)}>
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">📝 Latest from the Blog</h2>
          <p className="text-foreground/70 max-w-2xl">
            Check out my latest articles.
          </p>
        </motion.div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 rounded-lg bg-card/20 animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => {
                setIsLoading(true);
                setError(null);
                fetchPosts();
              }}
              className="px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full hover:bg-purple-500/20 transition-colors"
            >
              Try again
            </button>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-64 overflow-hidden rounded-lg border border-border/40 bg-card/30 backdrop-blur-md transition-all hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {post.data.image && (
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={post.data.image}
                      alt={post.data.title}
                      className="h-full w-full object-cover transition-transform duration-100 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
                    {post.data.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-foreground/70">
                    {post.data.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <p className="text-foreground/70">No blog posts found.</p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-500 transition-colors hover:bg-purple-500/20"
          >
            View all articles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
