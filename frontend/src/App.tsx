import NavBar from "./components/navbar";
import Footer from "./components/footer/Footer"
import Datatable from "components/DataTable/Datatable";
import BarCharts from "components/BarCharts/BarCharts";
import DonutChart from "components/DonutChart/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard</h1>

        <div className="row px3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarCharts/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Total de vendas</h5>
            <DonutChart/>
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas as vendas</h2>
        </div>

        <Datatable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
