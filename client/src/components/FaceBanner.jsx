import React, { useEffect } from 'react';
import { useCycle } from 'framer-motion';
import FImageHolder from './FImageHolder';
import FIconHolder from './FIconHolder';
import { faceScene } from '../data/scenes';
import './FaceBanner.css';

const SLIDE_CHANGE_TIME_MS = 5000;
function FaceBanner() {
  const [currentFScene, setCurrentFScene] = useCycle(faceScene);
  useEffect(() => {
    const timeOut = setTimeout(setCurrentFScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentFScene, setCurrentFScene]);
  return (
    <div className="hero1">
      <FIconHolder icon={currentFScene.icon} />
      <FImageHolder
        img={currentFScene.Face1}
        width="100px"
        className="face-image face__one"
      />
      <FImageHolder
        img={currentFScene.Face2}
        width="100px"
        className="face-image face__two"
      />
      <FImageHolder
        img={currentFScene.Face3}
        width="100px"
        className="face-image face__three"
      />
      <FImageHolder
        img={currentFScene.Face4}
        width="100px"
        className="face-image face__four"
      />
    </div>
  );
}
export default FaceBanner;
