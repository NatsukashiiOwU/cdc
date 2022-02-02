/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useCallback, useEffect } from 'react';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import FormImage from '../../UI/FormImage';
import styles from './ModerationEdit.module.scss';

import avatarPng from '../../../assets/images/ModerationEdit/avatarPng.png';
import avatarWebp from '../../../assets/images/ModerationEdit/avatarWebp.webp';
import coverPng from '../../../assets/images/ModerationEdit/coverPng.png';
import coverWebp from '../../../assets/images/ModerationEdit/coverPng.webp';
import photo1Png from '../../../assets/images/ModerationEdit/photo1.png';
import photo1Webp from '../../../assets/images/ModerationEdit/photo1.webp';
import photo2Png from '../../../assets/images/ModerationEdit/photo2.png';
import photo2Webp from '../../../assets/images/ModerationEdit/photo2.webp';

const data = [{
  avatarWebp: avatarPng,
  avatarPng: avatarWebp,
  name: 'Газизова \nЛениза Ривальевна',
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
}];

const ModerationEdit = () => {
  const [onTitle, setOnTitle] = useState('');
  const [onMemberLength, setOnMemberLength] = useState(0);
  const [onDescription, setOnDescription] = useState('');

  useEffect(() => {
    setOnTitle(data[0].title);
    setOnMemberLength(data[0].memberLength);
    setOnDescription(data[0].description);
  }, []);

  const enterTitle = useCallback((e) => {
    setOnTitle(e.target.value);
  }, [onTitle]);

  const enterMemberLength = useCallback((e) => {
    setOnMemberLength(e.target.value);
  }, [onMemberLength]);

  const enterDescription = useCallback((e) => {
    setOnDescription(e.target.value);
  }, [onDescription]);

  return (
    <table className={styles.moderationEdit}>
      <tr className={styles.moderationEdit__head}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Руководитель клуба</div>
        </th>
        <th className={styles.moderationEdit__headInfo}>
          <div className={styles.moderationEdit__headAvatar}>
            <picture>
              <source srcSet={data[0].avatarWebp} type="image/webp" />
              <img src={data[0].avatarPng} alt={onTitle} />
            </picture>
          </div>
          <div className={styles.moderationEdit__headName}>
            <p className={styles.moderationEdit__headTitle}>{data[0].name}</p>
          </div>
        </th>
      </tr>
      <tr className={styles.moderationEdit__school}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Название школы</div>
        </th>
        <th className={styles.moderationEdit__schoolTitle}>
          <p className={styles.moderationEdit__headTitle}>{data[0].schoolName}</p>
        </th>
      </tr>
      <tr className={styles.moderationEdit__date}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Дата:</div>
        </th>
        <th className={styles.moderationEdit__dateInfo}>
          <Input
            type="date"
            labelClassName={styles.moderationEdit__dateLabel}
            className={styles.moderationEdit__dateInput}
            name="date"
          />
        </th>
      </tr>
      <tr className={styles.moderationEdit__title}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Название:</div>
        </th>
        <th className={styles.moderationEdit__titleInfo}>
          <Input
            type="text"
            className={styles.moderationEdit__titleInput}
            onChange={enterTitle}
            name="title"
            value={onTitle}
          />
        </th>
      </tr>
      <tr className={styles.moderationEdit__number}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Число участников:</div>
        </th>
        <th className={styles.moderationEdit__numberInfo}>
          <Input
            type="number"
            className={styles.moderationEdit__numberInput}
            onChange={enterMemberLength}
            name="memberLength"
            value={onMemberLength}
          />
        </th>
      </tr>
      <tr className={styles.moderationEdit__description}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Краткое описание:</div>
        </th>
        <th className={styles.moderationEdit__descriptionInfo}>
          <Input
            type="textarea"
            className={styles.moderationEdit__descriptionInput}
            onChange={enterDescription}
            name="description"
            value={onDescription}
          />
        </th>
      </tr>
      <tr className={styles.moderationEdit__cover}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Обложка:</div>
        </th>
        <th className={styles.moderationEdit__coverInfo}>
          <picture>
            <source srcSet={data[0].coverWebp} type="image/webp" />
            <img src={data[0].coverPng} alt={data[0].title} />
          </picture>
        </th>
      </tr>
      <tr className={styles.moderationEdit__images}>
        <th className={styles.moderationEdit__sectionTitle}>
          <div>Добавить фото:</div>
        </th>
        <th className={styles.moderationEdit__imagesInfo}>
          {data[0].photos.map((img) => (
            <FormImage
              key={img.photoPng}
              photoWebp={img.photoWebp}
              photoPng={img.photoPng}
              alt={data[0].title}
            />
          ))}
          <Button className={styles.moderationEdit__imagesButton}>
            <Input
              type="file"
              className={styles.moderationEdit__imagesButton_add}
              labelClassName={styles.moderationEdit__imagesButtonAddfile}
              filePlaceholder="выбрать фото"
            />
          </Button>
        </th>
      </tr>
      <tr>
        <th>
          <Button className={styles.moderationEdit__submitButton}>
            опубликовать
          </Button>
        </th>
      </tr>
    </table>
  );
};

export default React.memo(ModerationEdit);
