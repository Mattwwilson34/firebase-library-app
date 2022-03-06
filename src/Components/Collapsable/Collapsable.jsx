import React, { useState } from 'react';

const Collapsable = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { description, isbn, pages, published, website } = props.book;

  return (
    <div className='Collapsable'>
      <button className='Button_Add_Info' onClick={() => setIsOpen(!isOpen)}>
        expand Info
      </button>
      <div className={isOpen ? 'content show' : 'content'}>
        <p className='Card_Description'>
          <span className='Bold'>Description:</span>
          <br></br>
          {description}
        </p>
        <p className='Card_Pages'>
          <span className='Bold'>Pages:</span> {pages}
        </p>
        <p className='Card_ISBN'>
          <span className='Bold'>ISBN:</span> {isbn}
        </p>
        <p className='Card_published'>
          <span className='Bold'>Published:</span> {published}
        </p>
        <p className='Card_Website'>
          <span className='Bold'>Website:</span> {website}
        </p>
      </div>
    </div>
  );
};

export default Collapsable;
