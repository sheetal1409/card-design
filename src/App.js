import './App.css';

function App() {
  return (
    <div className="w-9/12 h-screen py-8 m-auto p-4 max-[500px]:w-screen max-[500px]:m-0 max-[500px]:p-0 max-[500px]:h-auto text-gray-600 text-xs leading-none tracking-wide">
      <main className='w-full flex h-full bg-white h-96 max-[500px]:flex-col max-[500px]:h-screen'>
        <section className='top-section w-4/12 bg-card-desktop h-full max-[500px]:bg-card-mobile max-[500px]:h-80 max-[500px]:w-full'></section>
        <section className='card-section flex justify-center items-center max-[500px]:mt-12  max-[500px]:h-full'>
          <form className='flex flex-col w-8/12  p-2 ml-48   justify-center max-[500px]:w-screen max-[500px]:m-0 ' >

            <div className='flex flex-col'>
              <div className='flex flex-col m-2'> <label className="mb-1" for="cd-name">CARDHOLDER NAME</label>
                <input className='w-10/12 border border-gray-200 p-2 rounded-md' type="text" id="cd-name" placeholder='e.g. Jane Appleseed' /></div>
              <div className='flex flex-col m-2'>    <label className="mb-1" for="cd-num">CARD NUMBER</label>
                <input className='w-10/12 border border-gray-200 p-2 rounded-md' type="text" id="cd-num" placeholder='e.g. 1234 5678 9123 0000' /></div>
            </div>
            <div className='flex w-10/12 ml-2 mt-2 mb-2'>
              <div>
                <label for="card-date">EXP. DATE(MM/YY)</label>
                <div id="card-date" className='flex mt-1'>
                  <input className="w-3/12 border border-gray-200 p-2 mr-2 rounded-md" type="number" placeholder='MM' />
                  <input className="w-3/12 border border-gray-200 p-2 rounded-md" type="number" placeholder='YY' />
                </div>
              </div>
              <div>
                <label for="card-cvc">CVC</label>
                <div id="card-cvc" className='mt-1'>
                  <input className="w-10/12 p-2 border rounded-md" type="number" placeholder='e.g. 123' />
                </div>
              </div>
            </div>
            <button className='mt-4 w-8/12 border rounded-xl ml-8 p-2' type="submit">Confirm</button>


          </form>
        </section>
      </main>
    </div >
  );
}

export default App;
