import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageTransitionProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function PageTransition({ children, title, description }: PageTransitionProps) {
  const fullTitle = `${title} | Aurelia Estates | Concept Project`;
  const defaultDesc = "Aurelia Estates is a fictional premium real estate website concept created by Fahim Studio.";

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDesc} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen pt-[104px]" // To account for fixed navbar
      >
        {children}
      </motion.div>
    </>
  );
}
