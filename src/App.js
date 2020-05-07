import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component';
import ItemDetails from './pages/item-details/item-details.component';

// import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/details/:type/:id' exact component={ItemDetails} />
        </Switch>
        <Footer />
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
