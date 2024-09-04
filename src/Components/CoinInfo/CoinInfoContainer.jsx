import useFetchCoinHistory from "../../hooks/fetchCoinHistory";
import CoinInfo from "./CoinInfo";
import { Facebook } from 'react-content-loader'

function CoinInfoContainer({coinId}){

    const {historicData,setDays, setCoinInterval,days,currency,isLoading,isError,error} = useFetchCoinHistory(coinId);

    if(isLoading){
        return <Facebook/>
    }

    if(isError){
        return <div>Erorr: {error.message} </div>
    }

    
    return(
        <>
            <CoinInfo historicData={historicData} setDays={setDays} setInterval={setCoinInterval} days= {days} currency ={currency} />
        </>
    )

}
export default CoinInfoContainer;