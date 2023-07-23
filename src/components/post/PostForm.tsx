import CommentInterface from "../../interfaces/CommentInterface";
import BlueButton from "../UI/BlueButton";
import FlexColumn from "../basic/FlexColumn";
import FlexRow from "../basic/FlexRow";

function PostForm() {
  return (
    <FlexColumn className="w-full h-full p-8 justify-between">
      <input
        type="text"
        placeholder="Title"
        className="w-full h-[40px] border border-black focus:outline-none px-4"
      />
      <div>
        <div className="w-full h-[500px]">
          <input
            type="text"
            placeholder="Content"
            className="w-full h-full border border-black focus:outline-none px-4"
          />
        </div>
        <FlexRow className="w-full h-[100px] bg-gray-200 px-4 justify-end">
          <div className="my-auto h-[60px] w-[150px]">
            <BlueButton
              text="Comment"
              className="rounded-lg text-center font-bold"
            />
          </div>
        </FlexRow>
      </div>
    </FlexColumn>
  );
}

export default PostForm;
