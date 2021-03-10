import React from 'react';

const ExternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other} rel="noreferrer noopener" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;
