import NavBar from "./components/navbar";
import Footer from "./components/footer/Footer"
import Datatable from "components/DataTable/Datatable";

function App() {
  return (
    <>
      <NavBar />
      {/* <div className="container">
        <h1 className="text-primary">Olá mundo</h1>
      </div> */}
      <Datatable/>
      <Footer/>
    </>
  );
}

export default App;
