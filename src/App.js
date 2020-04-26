/**
 * libraries
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
/**
 * CSS
 */
import "./App.css";

/**
 * Pages
 */
import HomePage from "./pages/homepage/homepage.componnet";
import MenuPage from "./pages/food/food.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

/**
 * components
 */
import Header from "./componnents/header/header.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/best-sellers" component={MenuPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
