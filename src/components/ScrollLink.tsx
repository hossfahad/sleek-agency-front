import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface ScrollLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  smooth?: boolean;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

/**
 * A component that extends React Router's Link with smooth scrolling capabilities
 * for hash links within the current page.
 * 
 * - If the link is to a hash on the current page, it scrolls smoothly
 * - If the link is to a hash on another page, it navigates and then scrolls
 * - For non-hash links, it behaves like a regular Link
 */
const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  smooth = true,
  className = '',
  activeClassName = '',
  onClick,
  children,
  ...rest
}) => {
  const location = useLocation();
  const isHashLink = to.startsWith('#');
  
  // If it's just a hash link, handle it with smooth scrolling
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) onClick();
    
    if (isHashLink) {
      e.preventDefault();
      const targetId = to.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto'
        });
        
        // Update URL hash without page reload
        window.history.pushState(null, '', to);
      }
    } else if (to.includes('#') && to.split('#')[0] === location.pathname) {
      // Local hash link in the format "/current-page#section"
      e.preventDefault();
      const targetId = to.split('#')[1];
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto'
        });
        
        // Update URL hash without page reload
        window.history.pushState(null, '', to);
      }
    }
  };
  
  // If it's a pure hash link like "#contact", convert it to a proper href
  const href = isHashLink ? to : to;
  
  // Determine if the link is active (for styling purposes)
  const isActive = location.pathname === to.split('#')[0] || 
                  (isHashLink && location.hash === to);
  
  // Combine classes based on active state
  const combinedClassName = isActive && activeClassName 
    ? `${className} ${activeClassName}` 
    : className;
  
  return (
    <Link
      to={to}
      className={combinedClassName}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ScrollLink; 