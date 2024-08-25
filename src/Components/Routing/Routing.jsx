import { Route,Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import CoinDetailsPage from "../../Pages/CoinsDetailPage";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:coinId" element={<CoinDetailsPage/>}/>
        </Routes>
    )

}
export default Routing;