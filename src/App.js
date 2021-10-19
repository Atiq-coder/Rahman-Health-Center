import './App.css';
// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Doctors from './Component/Doctors/Doctors';
import Appointment from './Component/Appointment/Appointment';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="bg-secondary">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
