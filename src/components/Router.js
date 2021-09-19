import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';

// render할 routes는 인증(로그인) 여부에 따라 달라야 한다.
// useState를 사용하고 기본값은 false가 되어야 한다.
const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

// ❔What is the <Switch>'s function?
