import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationType = 'fadeUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case 'fadeUp':
          element.style.opacity = '0';
          element.style.transform = 'translateY(60px)';
          break;
        case 'fadeIn':
          element.style.opacity = '0';
          break;
        case 'slideLeft':
          element.style.opacity = '0';
          element.style.transform = 'translateX(-60px)';
          break;
        case 'slideRight':
          element.style.opacity = '0';
          element.style.transform = 'translateX(60px)';
          break;
        case 'scale':
          element.style.opacity = '0';
          element.style.transform = 'scale(0.8)';
          break;
        case 'stagger':
          element.style.opacity = '0';
          element.style.transform = 'translateY(40px)';
          break;
      }
      element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    };

    const animateIn = () => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) translateX(0) scale(1)';
      }, delay);
    };

    setInitialState();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateIn();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationType, delay, duration, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Stagger animation for multiple children
interface StaggerAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  className?: string;
}

const StaggerAnimation: React.FC<StaggerAnimationProps> = ({ 
  children, 
  staggerDelay = 100, 
  animationType = 'fadeUp',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : getInitialTransform(animationType)
          }`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Parallax scroll effect
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxScroll: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Advanced scroll-triggered animations
interface AdvancedScrollAnimationProps {
  children: React.ReactNode;
  triggerOnce?: boolean;
  rootMargin?: string;
  className?: string;
}

const AdvancedScrollAnimation: React.FC<AdvancedScrollAnimationProps> = ({
  children,
  triggerOnce = true,
  rootMargin = '0px 0px -100px 0px',
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial classes
    element.classList.add('scroll-animate-initial');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate-in');
            entry.target.classList.remove('scroll-animate-initial');
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('scroll-animate-in');
            entry.target.classList.add('scroll-animate-initial');
          }
        });
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [triggerOnce, rootMargin]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Text reveal animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const words = text.split(' ');
    element.innerHTML = words
      .map((word, index) => 
        `<span class="word" style="display: inline-block; opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${(index * 100) + delay}ms;">${word}</span>`
      )
      .join(' ');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll('.word');
            words.forEach((word) => {
              (word as HTMLElement).style.opacity = '1';
              (word as HTMLElement).style.transform = 'translateY(0)';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [text, delay]);

  return <div ref={elementRef} className={className} />;
};

// Counter animation
interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
              
              setCount(currentValue);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};

export {
  ScrollAnimation,
  StaggerAnimation,
  ParallaxScroll,
  AdvancedScrollAnimation,
  TextReveal,
  CounterAnimation
};

function getInitialTransform(animationType: string) {
  switch (animationType) {
    case 'fadeUp':
      return 'opacity-0 translate-y-4';
    case 'fadeIn':
      return 'opacity-0';
    case 'slideLeft':
      return 'opacity-0 translate-x-4';
    case 'slideRight':
      return 'opacity-0 translate-x-4';
    case 'scale':
      return 'opacity-0 scale-90';
    default:
      return '';
  }
}
