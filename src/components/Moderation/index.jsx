import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import ModerationList from './ModerationList';
import ModerationEdit from './ModerationEdit';

const Moderation = () => (
  <Switch>
    <Route path="/code-classes/detail/moderation" component={ModerationList} exact />
    <Route path="/code-classes/detail/moderation/:id/edit" component={ModerationEdit} />
  </Switch>
);

export default React.memo(Moderation);
