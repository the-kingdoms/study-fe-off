import FlexBox from "../components/FlexBox";
import MainCard from "./MainCard";
import SideCard from "./SideCard";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FlexBox>
      <div className="w-1/4">
        <SideCard />
      </div>
      <div className="w-3/4">
        <MainCard>{children}</MainCard>
      </div>
    </FlexBox>
  );
}

export default Layout;
