/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import NewsMap from '../../UI/NewsMap';
import styles from './ModerationList.module.scss';

import avatarPng from '../../../assets/images/ModerationEdit/avatarPng.png';
import avatarWebp from '../../../assets/images/ModerationEdit/avatarWebp.webp';
import coverPng from '../../../assets/images/ModerationEdit/coverPng.png';
import coverWebp from '../../../assets/images/ModerationEdit/coverPng.webp';
import photo1Png from '../../../assets/images/ModerationEdit/photo1.png';
import photo1Webp from '../../../assets/images/ModerationEdit/photo1.webp';
import photo2Png from '../../../assets/images/ModerationEdit/photo2.png';
import photo2Webp from '../../../assets/images/ModerationEdit/photo2.webp';

const TABLE_HEADERS = [
  {
    title: 'События',
    className: 'title',
  },
  {
    title: 'Руководитель',
    className: 'author',
  },
  {
    title: 'Код класс',
    className: 'codeClass',
  },
  {
    title: 'Дата',
    className: 'date',
  },
];

const UNMODERATED_ITEMS = [
  {
    id: 0,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
  {
    id: 1,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Развитие цифровых навыков[...]',
    author: 'Костишко Алла Евгеньевна',
    codeClass: 'Ульяновский государственный [..]',
    date: '14.04.2020',
    data: {
      avatarWebp: avatarPng,
      avatarPng: avatarWebp,
      name: 'Газизова Лениза Ривальевна',
      title: 'Летняя школа по математике и программированию',
      memberLength: 560,
      description: 'Многоплановое мероприятие, включающее в себя задания по развитию логического мышления, семинары по безопасному поведению в сети и программированию в среде KODU. Эти школьники с сентября станут учениками код-класса Центра.',
      schoolName: 'МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск',
      coverWebp: coverPng,
      coverPng: coverWebp,
      photos: [
        {
          photoPng: photo1Png,
          photoWebp: photo1Webp,
        },
        {
          photoPng: photo2Png,
          photoWebp: photo2Webp,
        },
      ],
    },
  },
];

const ModerationList = () => (
  <>
    <div className={styles.moderationList}>
      <div className={cn(styles.moderationList__headers, styles.moderationList__row)}>
        {TABLE_HEADERS.map((item) => (
          <div
            className={styles.moderationList__header}
            key={item.title}
          >
            {item.title}
          </div>
        ))}
      </div>
      {UNMODERATED_ITEMS.map((item) => (
        <Link
          to={{
            pathname: `/code-classes/detail/moderation/${item.id}/edit`,
            props: item.data,
          }}
          className={styles.moderationList__link}
          key={item.id}
        >
          <div className={cn(styles.moderationList__row, styles.moderationList__articles)}>
            <div className={cn(styles.moderationList__title,
              styles.moderationList__title_title)}
            >
              {item.title}
            </div>
            <div className={cn(styles.moderationList__title,
              styles.moderationList__title_author)}
            >
              {item.author}
            </div>
            <div className={cn(styles.moderationList__title,
              styles.moderationList__title_codeClass)}
            >
              {item.codeClass}
            </div>
            <div className={cn(styles.moderationList__title,
              styles.moderationList__title_date)}
            >
              {item.date}
            </div>
          </div>
        </Link>
      ))}

    </div>
    <div className={styles.moderationList__pagination}>
      <NewsMap title="Rows per page:" numbers={[1, 10]} max="13" className={styles.codeClasses__codeClassesPag} />
    </div>

  </>
);

export default React.memo(ModerationList);
