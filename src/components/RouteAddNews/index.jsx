import React, { memo } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import AddNews from '../../pages/code-classes/detail/news/add-news';
import News from '../../pages/code-classes/detail/news';

const RouteAddNews = () => (
  <Switch>
    <Route path="/code-classes/detail/news" exact component={News} />
    <Route path="/code-classes/detail/news/add-news" component={AddNews} />
  </Switch>
);

export default memo(RouteAddNews);
