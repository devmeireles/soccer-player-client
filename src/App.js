import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

const App = (props) => (
  <>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" component={DashboardPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  </>
)

export default App;