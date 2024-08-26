import { Route,Routes } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import { lazy, Suspense } from "react";
import { Facebook } from 'react-content-loader'



const Home = lazy(()=> import('../../Pages/Home'));
const CoinDetailsPage = lazy(()=> import('./../../Pages/CoinsDetailPage'));


function Routing(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>

                <Route index element={
                    <Suspense fallback={<Facebook/>}>
                        <Home/>
                    </Suspense>
                    
                    
                }/>
                <Route path="/details/:coinId" element={

                    <Suspense fallback={<Facebook/>}>
                        <CoinDetailsPage/>
                    </Suspense>
                }/>
                
            </Route>
        </Routes>
    )

}
export default Routing;