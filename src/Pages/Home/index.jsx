import BarChartBox from "../../Components/BarChartBox";
import BigChartBox from "../../Components/BigChartBox";
import LineChartBox from "../../Components/LineChartBox";
import PieChartBox from "../../Components/PieChartBox";
import TopDealUsers from "../../Components/TopDealUsers";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDealUsers />
      </div>
      <div className="box box2">
        <LineChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <LineChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <LineChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <LineChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};
export default Home;
