import React from "react"

export function CardCreated(props) {
    return (<div className="flex flex-col  items-center  max-[500px]:items-start">
        <div className="front w-6/12 p-4 h-48 mt-20 rounded-xl text-md mb-8 bg-card-front-design border-black text-white max-[500px]:order-last  max-[500px]:h-52 max-[500px]:w-10/12  max-[500px]:mb-50 ">
            <div className="relative inset-4 flex  items-center">  <div className="rounded-full flex  justify-center items-center h-10 w-10 bg-white"></div>
                <div className="rounded-full flex  ml-2 border  justify-center items-center h-4 w-4 border-white"></div></div>
            <div className="relative inset-y-12 inset-x-6 flex justify-start text-xl tracking-wide  leading-10 max-[600px]:text-md max-[600px]:leading max-[600px]:tracking-0">
                {props.cardNum}
            </div>
            <div className="relative inset-y-16 inset-x-6 flex  justify-between text-md ">
                <div className="uppercase max-[600px]:text-md">{props.cardName}</div>
                <div className="mr-8 max-[600px]:text-md">{props.month}/{props.year}</div>

            </div>
        </div>

        <div className="backside w-6/12 bg-no-repeat  mr-0 ml-20 h-48 bg-contain rounded-xl bg-card-back-design border-black max-[500px]:h-52  max-[500px]:order-1 max-[500px]:w-10/12 max-[500px]:m-0 max-[500px]:order-1">
            <div className="relative flex justify-center items-center inset-x-8 inset-y-20  ml-40">{props.cvc}</div>
        </div>
    </div>)
}


