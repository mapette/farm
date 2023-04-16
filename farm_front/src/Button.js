
function Button(props) {
  

  return (
    <span className=''>
      <button
        type="button"
        className='btn btn-primary'
      >
       {props.txt}
      </button>
    </span>
  );
}

export default Button;
