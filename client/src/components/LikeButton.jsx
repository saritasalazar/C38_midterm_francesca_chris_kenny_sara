import React from 'react';
import './Random.css';


const LikeButton =() => {
    const [likes, setLikes] = React.useState(0)
    
    const addLike = () =>{
        setLikes(likes + 1);
    }
    
    return(
        <div>
        <button id="likeme" onClick={addLike}> <span role="img" aria-label="heart">❤️ </span>{likes}</button>
     </div>
    )
}



export default LikeButton; 