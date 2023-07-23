import CommentInterface from "../../interfaces/CommentInterface";
import FlexColumn from "../basic/FlexColumn";

function CommentContent({ comment }: { comment: CommentInterface }) {
  return (
    <FlexColumn>
      <hr className="my-4 " />
      <div className="w-full font-bold text-blue-500 mb-4">
        {comment.user_name}
      </div>
      <div className="w-full mb-4">{comment.content}</div>
    </FlexColumn>
  );
}

export default CommentContent;
