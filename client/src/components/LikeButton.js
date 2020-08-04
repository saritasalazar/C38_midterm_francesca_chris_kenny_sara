import React from 'react';
import './Random.css';


const LikeButton =() => {
    const [likes, setLikes] = React.useState(0)
    
    const addLike = () =>{
        setLikes(likes + 1);
    }
    
    return(
    
        <button id="likeme" onClick={addLike}>Like me ❤️     {likes}</button>
     
    )
}



// Be sure each item in your index/gallery/list has a unique key in its parent html element (div, li, etc) — key={item.id}
// Pass that id in as a prop when you are rendering the button component — <LikeButton itemId={item.id} />
// Add the id to the button — <button onClick={this.addLike} id={this.props.itemId}>Likes: {this.state.likes} </button>


export default LikeButton; 