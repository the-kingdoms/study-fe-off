import CommentInterface from "../../interfaces/CommentInterface";

function Comment({ comment }: { comment: CommentInterface }) {
  return (
    <div>
      <div>{comment.content}</div>
      <div>{comment.user_name}</div>
    </div>
  );
}

export default Comment;
