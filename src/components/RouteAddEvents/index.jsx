import React, { memo } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import AddEvents from '../../pages/code-classes/detail/events/add-events';
import Events from '../../pages/code-classes/detail/events';

const RouteAddEvents = () => (
  <Switch>
    <Route path="/code-classes/detail/events" exact component={Events} />
    <Route path="/code-classes/detail/events/add-events" component={AddEvents} />
  </Switch>
);

export default memo(RouteAddEvents);
