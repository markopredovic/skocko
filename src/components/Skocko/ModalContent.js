import React from 'react';

const ModalContent = ({lang}) => {
  return (
    <div className="l-modal-content">
      {lang === 'en' ? (<div><p>This is popular Serbian quiz game Slagalica Skocko.</p>
      <p>The goal is to find out random generated 4 signs combination.</p>
      <p>
        The appliation generate random 4 signs combination from 6 alowed signs: spade,
        club, heart, diamond, star and "skocko"
      </p>
      <p>Player has 6 atempts to find the right combination.</p>
      <p>To submit one 4 signs combination click on signs,
        then click on 'Confirm' button.
      </p>
      <p>Delete selected combination by clicking on 'Delete'</p>
      <p>After combination is submitted , application calculate result and return number of signs on right position (red) and not right position (yellow).</p>
      <p>Good luck!</p></div>) : (<div>Uputstvo</div>) }

    </div>
  );
}

export default ModalContent;