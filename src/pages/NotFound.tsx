import PageTransition from '../components/PageTransition';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <PageTransition title="Page Not Found">
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-6xl md:text-8xl mb-6 text-primary">404</h1>
        <p className="text-xs tracking-widest uppercase text-primary/60 mb-12">PAGE NOT FOUND</p>
        <Button to="/">RETURN HOME</Button>
      </div>
    </PageTransition>
  );
}
