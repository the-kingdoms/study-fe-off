import { useNavigate } from "react-router";
interface Props {
  num?: number;
  postId: string;
}

const PostCard = ({ num, postId }: Props) => {
  const nv = useNavigate();
  const commentPage = () => {
    nv(postId);
  };
  return (
    <div
      className="w-full h-[56px] px-[12px] flex flex-row justify-between items-center border-b border-gray hover:bg-blue-300 hover:cursor-pointer"
      onClick={commentPage}
    >
      <div className="w-1/6 max-w-[50px] font-medium">{num}</div>
      <div className="w-1/2 font-medium">bee</div>
      <div className="w-1/6 max-w-[100px] font-medium ">weeing</div>
      <div className="w-1/6 max-w-[100px] font-medium">2023/7/1</div>
      <div className="w-1/6 max-w-[50px] font-medium">40</div>
    </div>
  );
};
export default PostCard;
