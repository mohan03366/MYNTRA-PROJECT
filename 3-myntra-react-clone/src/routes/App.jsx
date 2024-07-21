import { Outlet } from "react-router-dom";
import Fotter from "../Components/Fotter";
import Header from "../components/Header";
import FetchItem from "../components/Fetchitem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Fotter />
    </>
  );
}

export default App;
