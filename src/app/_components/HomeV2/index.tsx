import ContentBox from "./_components/ContentBox";
import DevelopmentBox from "./_components/DevelopmentBox";
import FeatureBox from "./_components/FeatureBox";
import NavigationBar from "./_components/NavigationBar";
import Header from "./_components/Header";
import Rating from "./_components/Rating";
import ScreenShot from "./_components/ScreenShot";
import TopContent from "./_components/TopContent";

const HomeV2 = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <TopContent className="pt-12" />
      <div className="h-6"></div>
      <ScreenShot />
      <div className="h-6"></div>
      <FeatureBox />
      <div className="h-6"></div>
      <ContentBox />
      <div className="h-6"></div>
      <Rating />
      <div className="h-6"></div>
      <DevelopmentBox />
      <div className="h-6"></div>
      <NavigationBar />
    </div>
  );
};
export default HomeV2;
