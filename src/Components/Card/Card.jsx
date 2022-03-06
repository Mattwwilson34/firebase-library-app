import '../../App.css';
import Button from '../Button/Button';
import React, { useState } from 'react';
import Collapsable from '../Collapsable/Collapsable';

const Card = (props) => {
  const { title, subtitle, author, read } = props.book;
  const { handleReadButtonClick } = props;

  const [alreadyRead, setAlreadyRead] = useState(read);

  return (
    <div className='Card'>
      <h2 className='Card_Title'>{title}</h2>
      <h3 className='Card_Subtitle'>{subtitle}</h3>
      <h4 className='Card_Author'>By: {author}</h4>
      <Button
        className='Button_Read'
        text='Read'
        read={alreadyRead}
        handleClick={(e) => {
          handleReadButtonClick(e);
          setAlreadyRead(!alreadyRead);
        }}
      />
      <Collapsable book={props.book} />
    </div>
  );
};

export default Card;
