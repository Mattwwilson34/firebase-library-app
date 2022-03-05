import '../../App.css';
import Button from '../Button/Button';

const Card = (props) => {
  const {
    title,
    subtitle,
    author,
    description,
    isbn,
    pages,
    published,
    website,
    read,
  } = props.book;
  const { handleReadButtonClick } = props;
  return (
    <div className='Card'>
      <h2 className='Card_Title'>{title}</h2>
      <h3 className='Card_Subtitle'>{subtitle}</h3>
      <h4 className='Card_Author'>By: {author}</h4>
      <Button text='Read' read={read} handleClick={handleReadButtonClick} />
      <div className='Card_Add_Info_Container'>
        <p className='Card_Description'>{description}</p>
        <p className='Card_Pages'>{pages}</p>
        <p className='Card_ISBN'>{isbn}</p>
        <p className='Card_published'>{published}</p>
        <p className='Card_Website'>{website}</p>
      </div>
    </div>
  );
};

export default Card;
