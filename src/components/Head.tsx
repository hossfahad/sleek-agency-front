import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title: string;
  description: string;
}

const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href="https://enhancedpoints.com/" />
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-R2RCM86MFE"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-R2RCM86MFE');
      `}</script>
    </Helmet>
  );
};

export default Head;
