import FlexColumn from "../components/basic/FlexColumn";

function SideCard() {
  return (
    <FlexColumn className="h-full justify-between py-16">
      <div className="text-center text-2xl">The Kingdoms</div>
      <div className="w-full max-w-[250px] mx-auto">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
      </div>
    </FlexColumn>
  );
}

export default SideCard;
