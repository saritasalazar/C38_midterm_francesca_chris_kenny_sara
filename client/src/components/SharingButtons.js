import React from 'react' ;
import { Facebook, Twitter } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import './Random.css';


//we need to replace the URL below with our heroku URL once deployed 

const SharingButtons = () => {
    const url = 'https://github.com/caspg/react-sharingbuttons'
    const shareText = 'Check this site!'
  
    return (
      <div className="share-buttons">
        <Facebook url={url} />
        <Twitter url={url} shareText={shareText} />
      </div>
    )
  }


  export default SharingButtons; 