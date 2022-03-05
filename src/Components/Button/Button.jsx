import '../../App.css';

const Button = (props) => {
  const { text, handleClick, read } = props;
  return (
    <button
      style={read ? { backgroundColor: 'green' } : {}}
      onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
