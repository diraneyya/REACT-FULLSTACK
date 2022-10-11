import "./App.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return ( 
  <div className="App">
    <Router>
      <div className="navbar">
      <Link to="/createpost">Create A Post</Link>
      <Link to="/home">Home Page</Link>
      </div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/createpost" exact component={CreatePost} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
