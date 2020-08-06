import React, { useEffect } from 'react';
import { useCycle } from 'framer-motion';
import ImageHolder from './ImageHolder';
import IconHolder from './IconHolder';
import { drinkScene } from './scenes';
import './banner.css';

const SLIDE_CHANGE_TIME_MS = 5000;
function Banner() {
  const [currentScene, setCurrentScene] = useCycle(drinkScene);
  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);
  return (
    <div className="hero">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        width="200px"
        className="drink-image drink__one"
      />
      <ImageHolder
        img={currentScene.image2}
        width="200px"
        className="drink-image drink__two"
      />
      <ImageHolder
        img={currentScene.image3}
        width="200px"
        className="drink-image drink__three"
      />
    </div>
  );
}
export default Banner;
