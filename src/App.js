import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import DashboardPage from "./pages/Dashboard";

const App = (props) => (
  <>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" component={DashboardPage}/>
        </Switch>
      </Router>
    </div>
  </>
)

export default App;