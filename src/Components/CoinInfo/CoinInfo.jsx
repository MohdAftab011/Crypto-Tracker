import Alert from "../Alert/Alert";

function CoinInfo({historicData,setDays,setInterval,error}){

    if(!historicData) {
        return <Alert message="No data available" type="warning" />
    }


    return(
        <div className="flex flex-col items-center justify-center mt-6 p-6 md:w-3/4">
            
        </div>
    )

}
export default CoinInfo;