import CoinInfo from "./CoinInfo";
import { useQuery } from 'react-query';
import currencyStore from "../../state/store.js"
import { useState } from "react";
import {fetchCoinHistoric} from "../../services/fetchCoinHistoric.js"
import { Facebook } from 'react-content-loader'

function CoinInfoContainer({coinId}){

    const {currency} = currencyStore();

    const [days,setDays] = useState(7);

    const [interval, setCoinInterval] = useState('');

    const {data : historicData , isLoading , isError,error} = useQuery(['coinHistoricData',coinId,currency,days,interval],
        ()=>fetchCoinHistoric(coinId,days,interval,currency),{
        // retry:2,
        // retryDelay:100,
        cacheTime : 100*60*2,
        staleTime: 100*60*2,

    });

    if(isLoading){
        return <Facebook/>
    }

    if(isError){
        return <div>Erorr: {error.message} </div>
    }

    
    return(
        <>
            <CoinInfo historicData={historicData} setDays={setDays} setInterval={setCoinInterval} error={error}/>
        </>
    )

}
export default CoinInfoContainer;