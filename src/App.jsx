import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './pages/main';
import PageEvents from './pages/events';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import CodeClassesDetail from './pages/code-classes/detail';
import ListPage from './pages/listPage';
import NewsPage from './pages/NewsPage';
import massMediaAboutPage from './pages/massMediaAboutPage';

import Layout from './layout';
import './App.css';
import store from './store';

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route component={MainPage} exact path="/" />
            <Route component={NewsPage} exact path="/news" />
            <Route component={PageEvents} exact path="/events" />
            <Route component={ListPage} exact path="/code-class" />
            <Route component={massMediaAboutPage} exact path="/about" />
            <Route component={CodeClassesDetail} path="/code-classes/detail" />
          </Switch>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
