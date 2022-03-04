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
  console.log(props);
  return (
    <div className='Card'>
      <h2 className='Card_Title'>{title}</h2>
      <h3 className='Card_Author'>{author}</h3>
      <p className='Card_Description'>{description}</p>
    </div>
  );
};

export default Card;
