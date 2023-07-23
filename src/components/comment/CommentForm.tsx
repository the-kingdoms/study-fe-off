import CommentInterface from "../../interfaces/CommentInterface";
import BlueButton from "../UI/BlueButton";
import FlexColumn from "../basic/FlexColumn";
import FlexRow from "../basic/FlexRow";

function CommentForm() {
  return (
    <FlexColumn className="w-full border">
      <div className="w-full h-[100px]">
        <input
          type="text"
          placeholder="Add a Comment..."
          className="w-full h-full focus:outline-none px-4"
        />
      </div>
      <FlexRow className="w-full h-[100px] bg-gray-200 px-4 justify-between">
        <div className="my-auto">{"[User name]"}</div>
        <div className="my-auto h-[60px] w-[150px]">
          <BlueButton
            text="Comment"
            className="rounded-lg text-center font-bold"
          />
        </div>
      </FlexRow>
    </FlexColumn>
  );
}

export default CommentForm;
