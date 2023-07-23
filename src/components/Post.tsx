import CommentContent from "./comment/CommentContent";
import FlexColumn from "./basic/FlexColumn";
import CommentForm from "./comment/CommentForm";
import PostContent from "./post/PostContent";
import CommentInterface from "../interfaces/CommentInterface";
import PostInterface from "../interfaces/PostInterface";

function Post() {
  const post: PostInterface = {
    post_id: 1,
    title: "This is a title",
    content:
      "This is a content [Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.] ",
    user_name: "User name",
    created_date: "2021-10-10 10:10:10",
    comment_view: 10,
  };
  const comments: CommentInterface[] = [
    {
      content: "This is a comment",
      user_name: "User name",
      created_date: "2021-10-10 10:10:10",
    },
    {
      content: "This is a comment",
      user_name: "User name",
      created_date: "2021-10-10 10:10:10",
    },
  ];
  return (
    <FlexColumn className="w-full h-full p-8 justify-between">
      <div>
        <PostContent post={post} />
        {comments.map((comment) => (
          <CommentContent comment={comment} />
        ))}
      </div>
      <CommentForm />
    </FlexColumn>
  );
}

export default Post;
