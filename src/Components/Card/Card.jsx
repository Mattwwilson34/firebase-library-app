import '../../App.css';

const Card = (props) => {
  return (
    <div className='Card'>
      <h2 className='Card_Title'>Harry Potter and the Order of the Phoenix</h2>
      <h3 className='Card_Author'>By: J.K. Rollings</h3>
      <p className='Card_Description'>
        Suspendisse lectus rhoncus vitae mattis aliquam fames interdum aliquet
        adipiscing tristique tincidunt, fermentum posuere massa purus finibus
        sit curae ad lorem malesuada. Lacus viverra dapibus ad lectus rhoncus
        nec mattis facilisi nullam quisque proin integer, nostra nascetur auctor
        etiam augue scelerisque massa morbi habitant euismod. Condimentum
        maximus penatibus lacus leo cubilia ac laoreet nisi sodales, habitasse
        eu nulla mauris erat litora rutrum porttitor.
      </p>
    </div>
  );
};

export default Card;
