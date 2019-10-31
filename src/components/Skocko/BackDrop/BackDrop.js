import React from 'react';

const BackDrop = ({ showModalGuide, closeModal }) => {
  return (
  <>
    {showModalGuide ? <div id="backdrop" onClick={() => closeModal()}></div> : null}
  </>)
};

export default BackDrop;