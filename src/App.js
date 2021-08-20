import logo from './logo.svg';
import './App.css';
import Form from'./Form'
import Letter from './Letter'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <Switch>
      <Route exact path='/form'>
        <Form />
      </Route>
      <Route exact path='/letter'>
        <Letter />
      </Route>
      
      </Switch>
      {/* <Form /> */}
      </Router>
    </div>
  );
}

export default App;
