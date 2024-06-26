import { useEffect } from 'react';

const Helmet = ({ title, titleEntire, children }) => {
  document.title = titleEntire || (title ? `${title} | Satek` : 'Satek');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default Helmet;
