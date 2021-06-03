import './App.css';
import Login from "./login/login";
import Final from "./layout/final";
import ProtectedRoute from  "./login/protectedRoute";
import {
  Switch,
  Route,
  Redirect  
} from "react-router-dom";

function App() {
  return (

      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <ProtectedRoute path="/" component={Final} />
        <Route path="*">
          <Redirect from="/" to="/dashboard"/>
        </Route>
      </Switch>

  );
}

export default App;
