import React, { useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
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

import { logout } from './store/action/auth';
import { clearMessage } from './store/action/message';

import { history } from './helpers/history';

// import AuthVerify from "./common/AuthVerify";
import EventBus from './common/EventBus';

function App() {
  // const [setShowModeratorBoard] = useState(false);
  // const [setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
    //  setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
    //  setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    } else {
    //  setShowModeratorBoard(false);
    //  setShowAdminBoard(false);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [currentUser, logOut]);

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
