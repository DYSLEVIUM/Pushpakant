import React from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './IntroductionSection.module.scss';

import { motion } from 'framer-motion';

const IntroductionSection = () => {
  return (
    <div id="intro" className={sectionStyles.sectionContainer}>
      <motion.div
        initial={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        className={styles.introductionContainer}
      >
        <span className={styles.salutation}>
          <img
            src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
            alt="Hello GIF"
          />
          <h4>Hi, my name is</h4>
        </span>

        <h1>Pushpakant Behera.</h1>
        <h2>I love to build things</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nam in
          omnis cumque eum animi esse exercitationem temporibus eveniet
          perspiciatis. Similique animi atque impedit perspiciatis error maxime
          reiciendis recusandae vel. Quibusdam quasi culpa unde aperiam minima
          voluptas rem ipsum numquam tempore eligendi, vero ut facere
          voluptates. Voluptatum rem eaque eius!
        </h3>
      </motion.div>
    </div>
  );
};

export default IntroductionSection;