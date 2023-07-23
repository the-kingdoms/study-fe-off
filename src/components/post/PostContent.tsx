import PostInterface from "../../interfaces/PostInterface";
import FlexColumn from "../basic/FlexColumn";
import FlexRow from "../basic/FlexRow";

function PostContent({ post }: { post: PostInterface }) {
  return (
    <FlexColumn>
      <div className="w-full font-boldd mb-4">{post.title}</div>
      <FlexRow className="w-full mb-4 justify-between">
        <div className="font-bold text-blue-500">{post.user_name}</div>
        <div className="">{post.created_date}</div>
      </FlexRow>
      <div
        className="w-full mb-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </FlexColumn>
  );
}

export default PostContent;
