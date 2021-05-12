import "./App.css";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./App/pages/CreatePostPage";
import PostPage from "./App/pages/PostPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={PostPage} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
