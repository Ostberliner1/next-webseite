function Button({ buttonText, onClickHandler }){

  const nav = (event) => {
    if(onClickHandler){
      onClickHandler(event)
    }
  }
  return(
      <button 
      onClick={onClickHandler}
      className="
      bg-red-300
      hover:bg-red-700 
      text-white
      font-bold
      py-4
      px-2
      
      m-2
      transition-colors
      duration-1800
      ease-in-out
      "
       >
          {buttonText}
      </button>

  );
}
export default Button;