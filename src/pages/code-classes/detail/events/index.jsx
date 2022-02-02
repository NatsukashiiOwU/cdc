/* eslint-disable react/prop-types */
import React from 'react';

import dataCardsEvent from '../../../events/dataCardsEvent';
import NewsMap from '../../../../components/UI/NewsMap';
import CardEvent from '../../../../components/CardEvent';
import AddCard from '../../../../components/AddCard';

import styles from './events.module.scss';

const NUMBERS = [1, 10];

const Events = ({ isAuth = true }) => (
  <>
    {isAuth && (
      <AddCard className={styles.events__addCard} exact title="+ Добавить новое мероприятие" href="/code-classes/detail/events/add-events" />
    )}
    {dataCardsEvent.map((card) => (
      <CardEvent
        key={card.id}
        title={card.title}
        isSmall
        auth
        className={styles.events__cardEvent}
        description={card.description}
        image={card.image}
        area={card.area}
        socialLinks={card.socialLinks}
        members={card.members}
      />
    ))}
    <NewsMap className={styles.events__newsMap} title="Мероприятий Код классов на странице" numbers={NUMBERS} max="13" />
  </>
);
export default Events;
