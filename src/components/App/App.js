import React from 'react';
import NavigationBar from "../NavigationBar/NavigationBar";
import Home from '../Home/Home';
import Experience from '../Experience';
import NotFound from '../NotFound'
import Footer from '../Footer'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

// the icon libaray
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <NavigationBar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default (App);