import React from 'react';
import './Random.css';

const RandomDrink= () => {
    return (

        <div> 
        <h1 id="drinkname"> MY COCKTAIL</h1>
        <div class="randomBox">
            <img id="randomdrink" src="https://images.unsplash.com/photo-1560523967-bcfe1e72c2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
           <div>
               <h2>RECIPE:</h2>
               <div id="recipe">
            <p> Quisque velit nisic, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
           <button id="bookmarkButton">BOOKMARK ME</button>
            </div>
                </div>
                </div>
                </div>

  )
}




export default RandomDrink;
