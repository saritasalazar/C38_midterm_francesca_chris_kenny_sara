import React from 'react';
import { Facebook, Twitter } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import './Random.css';


const SharingButtons = () => {
  const url = 'https://get-litty-app.herokuapp.com/';
  const shareText = "Let's get Litty!";

  return (
    <div className="share-buttons">
      <Facebook url={url} />
      <Twitter url={url} shareText={shareText} />
    </div>
  );
};

export default SharingButtons;
