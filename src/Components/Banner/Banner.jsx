import BannerImage from "../../assets/img1.png"

function Banner(){

    return(
        <div className="w-full h-[25rem] relative">

            <img src={BannerImage} className="h-full w-full" />

            <div className="absolute top-10 left-0 right-0 mx-auto  w-[20rem]">
                <div className="flex flex-col gap-4">

                    <div className="font-semibold text-5xl text-white">
                        Crypto Tracker
                    </div>

                    <div className="font-semibold text-xl text-white text-center">
                        Get all info regarding Crypto
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Banner;



