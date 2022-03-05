import '../../App.css';

const Button = (props) => {
  const { text, handleClick, read, className } = props;
  return (
    <button
      className={className}
      style={read ? { backgroundColor: '#9ae3a3' } : {}}
      onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
