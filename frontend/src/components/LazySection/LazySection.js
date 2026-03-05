import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import './LazySection.css';

function Loader() {
  return (
    <div className="lazy-loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

function LazySection({ children, height = '200px' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '150px',
  });

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {inView && <Suspense fallback={<Loader />}>{children}</Suspense>}
    </div>
  );
}

export default LazySection;
