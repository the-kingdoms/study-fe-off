import FlexColumn from "../components/basic/FlexColumn";

function MainCard({ children }: { children: React.ReactNode }) {
  return (
    <FlexColumn className="justify-center items-center h-full bg-white rounded-l-2xl">
      {children}
    </FlexColumn>
  );
}

export default MainCard;
