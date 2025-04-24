function Search({ buttonText, onClickHandler }){

       return(
        <div className="
        bg-red-800
        container
    mx-auto
    text-center
        mt-12
        px-1
        py-1
        
        
        " 
        
            >
            <form className="
            text-red-500
            text-4xl
            mx-auto
            px-1
            py-1
        
            ">
                
                <input className="
                
                 bg-white          
                p-2               
                border            
                border-gray-400   
                rounded           
                text-black
                
                py-6
                text-l
                "
            type="text" placeholder="Suche dein Lieblingslied"></input>
            <button className="
            bg-gradient-to-r from-black via-blue-800 to-purple-800
            
            text-white
            font-bold
            py-4
            px-2
            
            
            transition-colors
            duration-1800
            ease-in-out
            animate-bounce
            m-3
            " 
            type="submit">LETS GO</button>
            </form>
        </div>
    
  
    );
  }
  export default Search;