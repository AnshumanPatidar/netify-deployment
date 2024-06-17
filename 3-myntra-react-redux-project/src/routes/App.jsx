import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import GrayScreen from "../components/GrayScreen";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  let { nav } = useSelector((store) => store.HoverAction);

  return (
    <>
      <Header></Header>
      {nav && <GrayScreen></GrayScreen>}
      <FetchItems></FetchItems>
      {fetchStatus.fetchingCurrently ? <Spinner></Spinner> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
