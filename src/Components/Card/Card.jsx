import '../../App.css';

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
  } = props.book;
  return (
    <div className='Card'>
      <h2 className='Card_Title'>{title}</h2>
      <h3 className='Card_Subtitle'>{subtitle}</h3>
      <h4 className='Card_Author'>{author}</h4>
      <p className='Card_Description'>{description}</p>
      <p className='Card_Pages'>{pages}</p>
      <p className='Card_ISBN'>{isbn}</p>
      <p className='Card_published'>{published}</p>
      <p className='Card_Website'>{website}</p>
    </div>
  );
};

export default Card;
