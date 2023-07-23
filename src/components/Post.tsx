import Comment from "./comment/Comment";
import FlexColumn from "./basic/FlexColumn";
import CommentForm from "./comment/CommentForm";
import PostContent from "./post/PostContent";

function Post() {
  const comments: any[] = [];
  return (
    <FlexColumn className="w-full px-16">
      <PostContent />
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
      <CommentForm />
    </FlexColumn>
  );
}

export default Post;
