import PostList from "./PostList";
import "./styles.css";
import data from "./dummy.json";
export default function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostList data={data} />
    </div>
  );
}
