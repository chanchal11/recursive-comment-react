import Post from "../Post";

export default function PostList({ data }) {
  return (
    <div>
      {data.map((postData) => (
        <Post data={postData} />
      ))}
    </div>
  );
}
