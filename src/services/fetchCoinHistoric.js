import axiosInstance from '../helper/axoisinstance';

export async function fetchCoinHistoric(id,days=7,interval,currency='usd'){

    try{
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);

        return response.data;


    }
    catch(error){
        console.error(error);
        return null;
    }
}