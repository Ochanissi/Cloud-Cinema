import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
// import HomePage from './pages/home-page/home-page.component';
// import Profile from './pages/profile/profile.component';
// import SignIn from './pages/sign-in/sign-in.component';
// import SignUp from './pages/sign-up/sign-up.component';
// import ItemDetails from './pages/item-details/item-details.component';
// import Discover from './pages/discover/discover.component';
// import DiscoverItem from './pages/discover-item/discover-item.component';

import {
  getUserWatchedStartAsync,
  getUserCollectionStartAsync,
  getUserWatchlistStartAsync,
} from './redux/user/user.actions';

// import { setCurrentUser } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const Profile = lazy(() => import('./pages/profile/profile.component'));
const SignIn = lazy(() => import('./pages/sign-in/sign-in.component'));
const SignUp = lazy(() => import('./pages/sign-up/sign-up.component'));
const ItemDetails = lazy(() =>
  import('./pages/item-details/item-details.component')
);
const Discover = lazy(() => import('./pages/discover/discover.component'));
const DiscoverItem = lazy(() =>
  import('./pages/discover-item/discover-item.component')
);

class App extends React.Component {
  render() {
    const {
      currentUser,
      getUserWatchedStartAsync,
      getUserCollectionStartAsync,
      getUserWatchlistStartAsync,
    } = this.props;

    if (currentUser) {
      getUserWatchedStartAsync(currentUser.email);
      getUserCollectionStartAsync(currentUser.email);
      getUserWatchlistStartAsync(currentUser.email);
    }

    return (
      <div>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route
                  exact
                  path='/profile'
                  render={() =>
                    currentUser ? <Profile /> : <Redirect to='/auth/sign-in' />
                  }
                />
                <Route
                  exact
                  path='/profile/settings'
                  render={() =>
                    currentUser ? <Profile /> : <Redirect to='/auth/sign-in' />
                  }
                />
                <Route
                  exact
                  path='/auth/sign-in'
                  render={() =>
                    currentUser ? <Redirect to='/' /> : <SignIn />
                  }
                />
                <Route
                  exact
                  path='/auth/sign-up'
                  render={() =>
                    currentUser ? <Redirect to='/' /> : <SignUp />
                  }
                />
                <Route
                  exact
                  path='/details/:type/:id'
                  component={ItemDetails}
                />
                <Route exact path='/discover' component={Discover} />
                <Route
                  exact
                  path='/discover/:type/:id'
                  component={DiscoverItem}
                />
                <Route exact path='/search/:id' component={DiscoverItem} />
                <Route path='/' component={HomePage} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
          <Footer />
        </ScrollToTop>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser * user),
  getUserWatchedStartAsync: (email) =>
    dispatch(getUserWatchedStartAsync(email)),
  getUserCollectionStartAsync: (email) =>
    dispatch(getUserCollectionStartAsync(email)),
  getUserWatchlistStartAsync: (email) =>
    dispatch(getUserWatchlistStartAsync(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
