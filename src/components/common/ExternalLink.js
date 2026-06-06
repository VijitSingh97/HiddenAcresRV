import React from 'react';

const ExternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
