import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-primary/10 pb-12 mb-12 last:border-0 last:mb-0 last:pb-0"
    >
      <Link to={`/journal/${article.slug}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 lg:col-span-4 overflow-hidden aspect-[4/3] relative">
          <motion.img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
        
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-[10px] tracking-[0.15em] font-medium text-primary/50 uppercase">{article.category}</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="text-[10px] tracking-[0.15em] font-medium text-primary/40 uppercase">{article.date}</span>
          </div>
          
          <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors">
            {article.title}
          </h3>
          
          <p className="text-[14px] font-light leading-relaxed text-primary/70 mb-6 max-w-2xl">
            {article.excerpt}
          </p>
          
          <span className="inline-flex items-center text-[11px] tracking-[0.15em] font-medium uppercase text-primary border-b border-primary/20 pb-1 group-hover:border-accent group-hover:text-accent transition-colors self-start">
            Read Article
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
