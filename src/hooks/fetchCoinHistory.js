import currencyStore from "../state/store.js"
import { useState } from "react";
import { useQuery } from 'react-query';
import {fetchCoinHistoric} from "../services/fetchCoinHistoric.js"


function useFetchCoinHistory(coinId){

    const {currency} = currencyStore();

    const [days,setDays] = useState(7);

    const [interval, setCoinInterval] = useState('daily');

    const {data : historicData , isLoading , isError,error} = useQuery(['coinHistoricData',coinId,currency,days,interval],
        ()=>fetchCoinHistoric(coinId,days,interval,currency),{
        // retry:2,
        // retryDelay:100,
        cacheTime : 100*60*2,
        staleTime: 100*60*2,

    });

    return{
        historicData,
        setDays, 
        setCoinInterval,
        isLoading,
        isError,
        error,
        days,
        currency
    }

}

export default useFetchCoinHistory;
