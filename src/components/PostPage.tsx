import PostCard from "./UI/PostCard";
import WhiteButton from "./UI/WhiteButton";
import { useState } from "react";

const Head = () => {
  return (
    <div
      className={
        "w-full h-[56px] px-[12px] flex flex-row justify-between items-center border-b border-black bg-gray-200"
      }
    >
      <div className="w-1/6 max-w-[50px] font-bold ">번호</div>
      <div className="w-1/2 font-bold ">제목</div>
      <div className="w-1/6 max-w-[100px]  font-bold">작성자</div>
      <div className="w-1/6 max-w-[100px] font-bold ">작성일</div>
      <div className="w-1/6 max-w-[50px]  font-bold">댓글수</div>
    </div>
  );
};
const PostPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const leftClicked = () => {
    setPageNum(pageNum - 1);
  };
  const rightClicked = () => {
    setPageNum(pageNum + 1);
  };
  const setPost = () => {
    const posts = [];
    for (let i = 1; i < 11; i++) {
      let post = <PostCard num={i} />;
      posts.push(post);
    }
    return posts;
  };

  return (
    <div className="w-full h-full p-8">
      <div className="mb-4 text-[24px]">커뮤니티 게시판</div>
      <Head />
      <div className="w-full flex flex-col justify-center items-center">
        {setPost()}
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="w-[150px] h-[48px]">
          <WhiteButton
            text="PREV"
            className=" flex flex-row justify-center items-center"
            onClick={leftClicked}
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center text-[24px]">
          {pageNum}/4
        </div>
        <div className="w-[150px] h-[48px] ">
          <WhiteButton
            text="NEXT"
            className=" flex flex-row justify-center items-center"
            onClick={rightClicked}
          />
        </div>
      </div>
    </div>
  );
};
export default PostPage;
