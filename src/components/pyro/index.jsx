import React, { memo } from 'react';
import './pyro.scss';

const Pyro = memo(({ isHide = false }) => (
  <>
    <div className={`pyro${isHide ? ' hidden' : ''}`}>
      <div className="before" />
      <div className="after" />
    </div>
  </>
));

export default Pyro;
