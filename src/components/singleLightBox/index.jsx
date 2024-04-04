import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';

const SingleLightbox = ({
  thumb, className, large,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavLink to="#" location={{}} onClick={() => setIsOpen(true)}>
        <img src={thumb} alt="thumbnail" className={className} />
      </NavLink>

      {isOpen && (
        <Lightbox mainSrc={large} onCloseRequest={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default SingleLightbox;
