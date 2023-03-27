import './App.css';
import { useState } from 'react';
import { CardCreated } from "./CardCreated"


function App() {
  const [cardName, setCardName] = useState("")
  const [cardNum, setCardNum] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [cvc, setCvc] = useState("")


  return (
    <div className="w-11/12 h-screen  py-8 m-auto p-4 max-[500px]:w-screen max-[500px]:m-0 max-[500px]:p-0 max-[500px]:h-auto text-gray-600 text-xs leading-none tracking-wide">
      <main className='w-full flex h-full bg-white h-96 max-[500px]:flex-col max-[500px]:h-screen'>
        <section className='top-section w-4/12 bg-card-desktop h-full max-[500px]:bg-card-mobile max-[500px]:h-80 max-[500px]:w-full'></section>
        <section className='card-print w-6/12 h-full absolute z-10 max-[500px]:w-full'>
          <CardCreated cardName={cardName} cardNum={cardNum} month={month} year={year} cvc={cvc} />
        </section>
        <section className='card-section relative z-10 flex  justify-center  items-center max-[500px]:mt-12  max-[500px]:h-full'>
          <form className='flex flex-col w-7/12  p-2 ml-48   justify-center max-[500px]:w-screen max-[500px]:m-0   ' >
            <div className='flex flex-col '>
              <div className='flex flex-col m-2 '> <label className="mb-1" for="cd-name">CARDHOLDER NAME</label>
                <div className='w-10/12 bg-gradient-to-r from-left to-right  rounded-md p-0.5' > <input className='w-full p-2  focus:outline-none rounded-md' type="text" name="name" onChange={(event) => setCardName(event.target.value)} required id="cd-name" placeholder='e.g. Jane Appleseed' /></div></div>
              <div className='flex flex-col m-2'>    <label className="mb-1" for="cd-num">CARD NUMBER</label>
                <div className='w-10/12  bg-gradient-to-r from-left to-right  rounded-md p-0.5' >  <input className='w-full p-2 focus:outline-none rounded-md' validate required type="text" inputmode="numeric" id="cd-num" onChange={(event) => setCardNum(event.target.value)} placeholder='e.g. 1234 5678 9123 0000' /></div></div>
            </div>
            <div className='flex w-10/12 ml-2 mt-2 mb-2'>
              <div>
                <label for="card-date">EXP. DATE(MM/YY)</label>
                <div id="card-date" className='flex mt-1'>
                  <input className="w-4/12 border border-gray-200 p-2 mr-2  rounded-md" required type="text" min="1" max="12" inputmode="numeric" onChange={(event) => setMonth(event.target.value)} placeholder='MM' />
                  <input className="w-4/12 border border-gray-200 p-2 rounded-md" required onChange={(event) => setYear(event.target.value)} type="text" inputmode="numeric" min="20" max="30" placeholder='YY' />
                </div>
              </div>
              <div>
                <label for="card-cvc">CVC</label>
                <div id="card-cvc" className='mt-1'>
                  <input className="w-10/12 p-2 border rounded-md" onChange={(event) => setCvc(event.target.value)} required type="text" inputmode="numeric" validate placeholder='e.g. 123' />
                </div>
              </div>
            </div>
            <button className='mt-4 w-8/12 border rounded-xl ml-8 p-2 bg-card-desktop text-white font-bold leading tracking-wide mb-2' type="submit">Confirm</button>
          </form>
        </section>
      </main>

    </div>
  );
}

export default App;
