import React from 'react';

const RenderHtmlContent = ({ content }) => (
  // eslint-disable-next-line react/no-danger
  <div className="render-html-wrapper" dangerouslySetInnerHTML={{ __html: content || '' }} />
);

export default RenderHtmlContent;
