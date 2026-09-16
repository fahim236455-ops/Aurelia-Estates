import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

export default function Journal() {
  return (
    <PageTransition title="Journal" description="Editorial concepts on architecture, design, and lifestyle.">
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen">
        <SectionHeading 
          eyebrow="EDITORIAL"
          heading="FROM THE JOURNAL"
          subheading="Thoughts on modern residential design, architecture, and the spaces we call home."
        />
        
        <div className="mt-24">
          {articles.map((article, idx) => (
            <ArticleCard key={article.id} article={article} index={idx} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
