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
        <p className='Card_Description'>{description}</p>
        <p className='Card_Pages'>{pages}</p>
        <p className='Card_ISBN'>{isbn}</p>
        <p className='Card_published'>{published}</p>
        <p className='Card_Website'>{website}</p>
      </div>
    </div>
  );
};

export default Collapsable;
