// eslint-disable-next-line no-unused-vars
import React, { memo, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './AddNews.module.scss';

import Icon from '../../../../../components/UI/Icon';
import Button from '../../../../../components/UI/Button';

function AddNews() {
  const baseURL = 'http://localhost:8080/api/news';

  // eslint-disable-next-line camelcase
  const post_title = useRef(null);
  // eslint-disable-next-line camelcase
  const post_description = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => JSON.stringify(res, null, 2);

  // eslint-disable-next-line no-unused-vars
  async function postData() {
    // eslint-disable-next-line no-shadow
    const postData = {
      title: post_title.current.value,
      description: post_description.current.value,
    };

    try {
      const res = await fetch(`${baseURL}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'x-access-token': 'token-value',
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: `${res.status}-${res.statusText}`,
        headers: {
          'Content-Type': res.headers.get('Content-Type'),
          'Content-Length': res.headers.get('Content-Length'),
        },
        data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }

  // eslint-disable-next-line no-unused-vars
  const clearPostOutput = () => {
    setPostResult(null);
  };

  return (
    <form id="addnews" className={styles.addNews}>
      <div className={styles.addNews__block}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <h4 className={styles.addNews__blockTitle}>Дата *:</h4>
        <div className={styles.addNews__addDate}>
          {/* eslint-disable-next-line react/destructuring-assignment,max-len */}
          <input className={cn(styles.addNews__dateInput, styles.addNews__input)} type="text" />
          <Icon className={styles.addNews__dateIcon} view="calendar" />
        </div>
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Название *:</h4>
        <input
          className={cn(styles.addNews__nameInput, styles.addNews__input)}
          /* eslint-disable-next-line camelcase */
          ref={post_title}
          placeholder="Ведите назание мероприятия (Напимер: Открытый урок ...)"
          type="text"
        />
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Содержание *:</h4>
        <textarea
          /* eslint-disable-next-line camelcase */
          ref={post_description}
          className={cn(styles.addNews__contentInput, styles.addNews__input)}
          type="text"
        />
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Обложка *:</h4>
        <Button type="file" className={styles.addNews__addImg}>
          выбрать фото
        </Button>
      </div>
      <div className={styles.addNews__block}>
        <h4 className={styles.addNews__blockTitle}>Добавить фото *:</h4>
        <Button type="file" className={styles.addNews__addImg}>
          выбрать фото
        </Button>
      </div>
      <div className={styles.addNews__blockSubmit}>
        <Button className={styles.addNews__submitForm} OnClick={postData()} type="addnews">
          ОТПРАВИТЬ НА МОДЕРАЦИЮ
        </Button>
      </div>
      { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
      <p className={styles.addNews__subTitleForm}> * Обязательное поле ввода</p>
    </form>
  );
}

export default memo(AddNews);
