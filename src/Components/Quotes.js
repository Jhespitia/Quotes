import { useState } from 'react';
import quotes from '../Components/quotes.json';

const Quotes = () => {

  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState (quotes[0].author);
  
  let arrayColors = ['#FFF000', '#7CFC00', '#00FFFF', '#9932CC', '#FF0000','#778899'];
  const [color, setColors] = useState ('black');
  

  const click = () =>{
    
    let randomNum = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * arrayColors.length ++);
    
    setQuote(quotes[randomNum].quote);
    setAuthor(quotes[randomNum].author);
    setColors(arrayColors[randomColor]);
  }

  return(

    <div id="body"style={{backgroundColor:color}}>
      <div id="quoteBox">
        <div id ='icon'className='fa-solid fa-quote-left'style={{color:color}}></div>
          <div id="text"style={{color:color}}> <p> {quote}</p></div>
          <div id="author"style={{color:color}}>{author}.</div>
          <div id="button">
          <button onClick = {click} id="new-quote" style={{backgroundColor:color}}> Next </button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;

