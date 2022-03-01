import { useState, memo } from "react";

function Comment({ data }) {
  // console.log(data.comment);
  const [likes, setLikes] = useState(0);
  return (
    <div
      style={{
        paddingLeft: "60px",
        // border: "2px solid",
        paddingBottom: "10px",
        marginTop: "10px",
        marginRight: "10px",
        fontSize: "14px"
        // borderRadius: "5px"
      }}
    >
      <div>
        <p>Commented By: {data.commentBy}</p>
        <p>Comment: {data.comment}</p>
        <button onClick={() => setLikes((like) => like + 1)}>Like</button>
        <span> Likes {likes}</span>
        {data.children.map((commentData) => (
          <Comment data={commentData} />
        ))}
      </div>
    </div>
  );
}

export default memo(Comment);
