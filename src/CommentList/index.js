import Comment from "../Comment";

export default function CommentList({ data }) {
  return (
    <div>
      {data.map((CommentData) => (
        <Comment data={CommentData} />
      ))}
    </div>
  );
}
