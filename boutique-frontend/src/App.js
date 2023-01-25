import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ListUsersComponent from './Components/ListUsersComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateUserComponent from './Components/CreateUserComponent';
import UpDateUserComponent from './Components/UpDateUserComponent';
import AccueilComponent from './Components/AccueilComponent';
import ListProductsComponent from './Components/ListProductsComponent ';
import AddProductComponent from './Components/AddProductComponent'

import UpDateProductComponent from './Components/UpDateProductComponent';
import LoginComponent from './Components/LoginComponent';


function App() {
  return (
    <div>
      <Router >

        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path='/' exact component={AccueilComponent}></Route>
            <Route path='/Home' component={AccueilComponent}></Route>
            <Route path='/Users' component={ListUsersComponent}></Route>
            <Route path='/Add-User' component={CreateUserComponent}></Route>
            <Route path='/UpdateUser/:id' component={UpDateUserComponent}></Route>
            <Route path='/Products' component={ListProductsComponent}></Route>
            <Route path='/Add-Product' component={AddProductComponent}></Route>
            <Route path='/UpdateProduct/:id' component={UpDateProductComponent}></Route>
            <Route path='/login' component={LoginComponent}></Route>

          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
