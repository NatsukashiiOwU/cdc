import React from 'react';
import styles from './Map.module.scss';

import planetImg from '../../../assets/images/planet.png';
import mapImg from '../../../assets/images/map-ulsu.png';
import Button from '../../UI/Button';

const Map = () => (
  <div className={styles.map}>
    <div className={styles.map__planet}>
      <img className={styles.map__planetImage} src={planetImg} alt="#" />
    </div>
    <div className={styles.map__container}>
      <div className={styles.map__images}>
        <div className={styles.map__ellipse}>.</div>
        <div className={styles.map__mapUlsu}>
          <img className={styles.map__mapUlsuImage} src={mapImg} alt="#" />
        </div>
      </div>
      <div className={styles.map__title}>
        <h1>Ульяновская область</h1>
      </div>
      <div className={styles.map__content}>
        <div className={styles.map__contentText}>
          <h2>
            более
            <span> 50</span>
          </h2>
          <span>КОД</span>
        </div>
        <div className={styles.map__contentButton}>
          <Button>весь список код-классов</Button>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(Map);
