import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home-page/home-page.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import ItemDetails from './pages/item-details/item-details.component';
import Discover from './pages/discover/discover.component';
import DiscoverItem from './pages/discover-item/discover-item.component';

// import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/auth/sign-in' component={SignIn} />
            <Route exact path='/auth/sign-up' component={SignUp} />
            <Route exact path='/details/:type/:id' component={ItemDetails} />
            <Route exact path='/discover' component={Discover} />
            <Route exact path='/discover/:type/:id' component={DiscoverItem} />
            <Route exact path='/search/:id' component={DiscoverItem} />
          </Switch>
          <Footer />
        </ScrollToTop>
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
