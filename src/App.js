import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/album/:id" exact>
            <Album />
          </Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/profile/edit" exact>
            <ProfileEdit />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
