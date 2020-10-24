import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'A quiet and friendly place to relax! Hidden Acres RV Park is located in Princeton, TX. On Lake Lavon, lush trees, with beach access, 20 min from Plano and McKinney!',
  title: 'Hidden Acres RV Park',
  url: 'https://www.hiddenacresrv.com',
  author: 'Vijit Singh',
  keywords: ['rv park near me', 'rv near me', 'rv park near princeton tx', 'rv park near lake lavon tx', 'rv park near mckinney tx', 'rv park near plano tx', 'rv park near frisco txt', 'rv park near dallas tx', 'campground near me'],
  img: '../../images/logo/HiddenAcresRVCampgroundLogo1.png',
  twitterId: '@Hidden_Acres_RV',
  facebookId: '',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />
      <meta property="og:locale" content={SEO_DATA.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />

      <link rel="canonical" href="https://www.hiddenacresrv.com"/>
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
