import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { motion } from 'framer-motion';

type BlogCardProps = {
  post: {
    data: {
      title: string;
      image?: string;
      tags: string[];
      date: Date | string;
      description?: string;
      draft?: boolean;
      [key: string]: any;
    };
    slug: string;
    // Add other properties if needed
  };
  className?: string;
};

export default function BlogCard({ post, className }: BlogCardProps) {
  const { data: frontmatter } = post;
  const date = typeof frontmatter.date === 'string' ? new Date(frontmatter.date) : frontmatter.date;
  
  return (
    <motion.div
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card/30 backdrop-blur-md transition-all hover:shadow-md",
        className
      )}
      
    >
      {frontmatter.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="h-full w-full object-cover transition-transform duration-100 group-hover:scale-101"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white bg-re">
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-purple-600 px-2 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
              {frontmatter.tags.length > 3 && (
                <span className="inline-flex items-center rounded-full bg-purple-600 px-2 py-1 text-xs font-medium text-white">
                  +{frontmatter.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 text-xl font-semibold">{frontmatter.title}</h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm text-foreground/70">{frontmatter.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-foreground/60">{formatDate(date)}</span>
          <span className="text-sm font-medium text-purple-500">Read more →</span>
        </div>
      </div>
    </motion.div>
  );
}
