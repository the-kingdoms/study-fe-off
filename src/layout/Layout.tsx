import FlexRow from "../components/basic/FlexRow";
import MainCard from "./MainCard";
import SideCard from "./SideCard";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FlexRow className="h-screen bg-sky-200">
      <div className="w-1/4">
        <SideCard />
      </div>
      <div className="w-3/4">
        <MainCard>{children}</MainCard>
      </div>
    </FlexRow>
  );
}

export default Layout;
