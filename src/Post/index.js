import CommentList from "../CommentList";

export default function Post({ data }) {
  // console.log(data.post);
  return (
    <div
      style={{
        paddingLeft: "20px",
        border: "1px solid",
        paddingBottom: "10px",
        marginTop: "10px",
        borderRadius: "5px",
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.7)",
        fontSize: "18px"
      }}
    >
      <div>
        <p>Posted By: {data.postedBy}</p>
        <p>Post: {data.post}</p>
        <CommentList data={data.comments} />
      </div>
    </div>
  );
}
