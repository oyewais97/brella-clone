import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Nav from './pages/navbar';
import Home from './pages/home';

function App() {
  return (
   <Router>
     <Switch>
     <Route exact path="/" component={Home}/>
     </Switch>
   </Router>
  );
}

export default App;
