import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  // const [isAuth, setisAuth] = useState(false);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={NotFound} />
          {/* <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          isAuth={isAuth}
        /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
