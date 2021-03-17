import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const ANIMATION_DURATION_S = 0.8;
const getVariants = (direction) => ({
  initial: {
    y: direction === 'top' ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: 'easeInOut' }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: 'easeInOut' }
  }
});
function FIconHolder({ icon, text }) {
  return (
    <div className="icon-holder1">
      <AnimatePresence>
        <motion.div
          className="icon-holder__icon1"
          key={text + 'icon'}
          variants={getVariants('top')}
          initial={'initial'}
          exit={'initial'}
          animate={'animate'}
        >
          <img src={icon.src} alt={icon.alt} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default FIconHolder;
