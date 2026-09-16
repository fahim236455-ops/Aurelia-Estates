import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import NotFound from './NotFound';
import { articles } from '../data/articles';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) return <NotFound />;

  const related = articles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <PageTransition title={article.title} description={article.excerpt}>
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto min-h-screen">
        
        <Link to="/journal" className="inline-flex items-center text-xs tracking-widest uppercase text-primary/60 hover:text-primary transition-colors mb-16 cursor-none">
          <ChevronLeft size={14} className="mr-2" />
          Back to Journal
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-xs tracking-widest text-primary/60 uppercase">{article.category}</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="text-xs tracking-widest text-primary/40 uppercase">{article.date}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12">
            {article.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-[16/9] w-full mb-16 overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div 
            className="prose prose-lg max-w-none text-primary/80 prose-headings:font-display prose-headings:font-normal prose-headings:text-primary prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>
        
        {/* Related */}
        <div className="mt-32 pt-16 border-t border-primary/10">
          <h3 className="font-display text-2xl mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map(rel => (
              <Link key={rel.id} to={`/journal/${rel.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="font-display text-xl group-hover:text-accent transition-colors">{rel.title}</h4>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
