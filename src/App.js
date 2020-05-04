import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import HomePage from './pages/homepage.component';

// import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  // currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser * user),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
