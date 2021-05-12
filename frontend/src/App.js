import "./App.css";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./App/pages/CreatePostPage";
import PostPage from "./App/pages/PostPage";
import PostDetail from "./App/pages/PostDetail";
import Navbar from "./App/components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={PostPage} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/edit/:id" component={CreatePost} />
        <Route exact path="/post/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
