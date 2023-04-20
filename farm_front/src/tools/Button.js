
function Button(props) {
  

  return (
    <span className=''>
      <button
        type="button"
        className='btn btn-primary'
        onClick={props.actionToDo}
      >
       {props.txt}
      </button>
    </span>
  );
}

export default Button;
