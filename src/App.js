import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/Nav';
import Home from './components/Home/Home';
import Service from './components/service/Service';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import HomeService from './components/HomeService.js/HomeService';
import MoreData from './components/service/MoreData';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Error404 from './components/error404/Error404';


function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderNav></HeaderNav>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/doctors">
          <Service></Service>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/moredata/:dynamicId">
          <MoreData></MoreData>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
       
        <Route path="*">
          <Error404></Error404>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        
      </Switch>
      <Route>
          <Footer></Footer>
        </Route>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
