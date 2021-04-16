import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ClubPage from "./pages/ClubPage";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LeaguesPage from "./pages/LeaguesPage";

const App = (props) => (
  <>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/player/:id" component={DashboardPage}/>
          <Route path="/league/:id" component={LeaguesPage}/>
          <Route path="/club/:id" component={ClubPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  </>
)

export default App;