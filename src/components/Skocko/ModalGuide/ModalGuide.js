import React from 'react';

const ModalGuide = ({showModalGuide, closeModal, children}) => {


  const onCloseHandler = () => {
    closeModal();
  }

  return(
    <>
    {showModalGuide ? <div className="l-modal">
      <span className="l-close" onClick={onCloseHandler}>&times;</span>
      {children}
    </div> : null }
    </>
  )
}

export default ModalGuide;