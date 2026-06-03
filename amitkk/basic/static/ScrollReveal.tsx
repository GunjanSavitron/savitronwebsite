import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, [threshold]);

  const hiddenTransform =
    direction === 'left' ? 'translate-x-[-40px]' :
    direction === 'right' ? 'translate-x-[40px]' :
    direction === 'none' ? '' :
    'translate-y-10';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
