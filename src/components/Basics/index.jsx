import React, { useState, memo } from 'react';
import cn from 'classnames';
import styles from './Basics.module.scss';

// eslint-disable-next-line import/no-unresolved
import Icon from '../UI/Icon';

import img1 from '../../assets/images/Basics/img.png';
import img2 from '../../assets/images/Basics/img2.png';

const DATA = {
  content: [
    {
      title: 'КОД–КЛАССЫ',
      description: 'Ульяновского\u00a0Государственного\u00a0Университета',
      textContent: ['Деятельность организована в рамках реализации стратегического проекта «Развитие сообщества Код-классов партнерских школ УлГУ»', 'Код-класс – клуб программирования на базе школы или учреждения дополнительного образования региона.'],
      image: img1,
    },
    {
      title: '«Дом научной коллаборации» им.Ж.И.\u00a0Алфёрова',
      description: 'Лаборатории по профилям:',
      textContent: ['- робототехника, \n - беспилотные летательные аппараты,',
        '- схемотехника, \n - 3D моделирование и печать,',
        '- виртуальная и дополненная реальность, \n - современные технологии.',
      ],
      contacts: ['e-mail: cio@ulsu.ru', '+7(8422)32-84-66'],
      image: img2,
    },
  ],
  items: [
    {
      id: 0,
      title: '50+',
      description: 'КОД-КЛАССОВ',
      sprite: 'mappoint',
    },
    {
      id: 1,
      title: '1500+',
      description: 'Мероприятий',
      sprite: 'database',
    },
    {
      id: 2,
      title: '80000+',
      description: 'Участников',
      sprite: 'user',
    },
  ],
};

const Basics = () => {
  const [imagePosition, setImagePosition] = useState(0);
  return (
    <section className={styles.basics}>
      <div className={styles.basics__pictureWrapper}>
        { imagePosition !== 0 && (
        <div
          aria-hidden="true"
          className={cn(styles.basics__arrow, styles.basics__arrowPrev)}
          onClick={() => setImagePosition(imagePosition - 1)}
        />
        )}
        <div className={styles.basics__images} style={{ transform: `translateX(calc(${imagePosition} * -50%))` }}>
          {
            DATA.content.map((item, index) => (
              <div key={item.image} className={styles.basics__contentWrapper} style={{ background: `url(${item.image})` }}>
                <div
                  className={
                    cn(
                      styles.basics__textContent,
                      imagePosition === index && styles.basics__textContent_active,
                      styles[`basics__textContent_${index}`],
                    )
                  }
                >
                  <div className={styles.basics__title}>
                    {item.title}
                  </div>
                  <div className={styles.basics__description}>
                    {item.description}
                  </div>
                  { item.textContent.map((text) => (
                    <div key={text} className={styles.basics__content}>
                      { text }
                    </div>
                  ))}
                  { item.contacts && (
                    <div className={styles.basics__contacts}>
                      {item.contacts.map((contact) => (
                        <p className={styles.basics__contact}>
                          { contact }
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          }
        </div>
        { imagePosition !== (DATA.content.length - 1) && (
          <div
            aria-hidden="true"
            className={cn(styles.basics__arrow, styles.basics__arrowNext)}
            onClick={() => setImagePosition(imagePosition + 1)}
          />
        )}
      </div>
      <div className={styles.basics__info}>
        {DATA.items.map((item) => (
          <div key={item.id} className={cn(styles.basics__infoItem, styles[`basics__infoItem_${item.sprite}`])}>
            <Icon className={styles.basics__infoCircle} view={item.sprite} />
            <div className={styles.basics__itemContent}>
              <div className={styles.basics__itemTitle}>{item.title}</div>
              <div className={styles.basics__itemDescription}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Basics);
