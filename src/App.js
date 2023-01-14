    import React from 'react'

    const App = () => {
      return (
        <div className="w-full max-w-xs m-10">
          <div className='container'>
            <h2 className='text-center mb-4 text-xl'>BMI Calculator</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4"><label
            className="block text-gray-700 text-sm font-bold mb-2">Weight (lbs)</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="weight" type ="Weight in kg " placeholder='weight in kg' ></input></div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Height (in)</label>
                <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="Height "
                type="text"
                placeholder="Height in cm"></input></div>
                <div>
            <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 type='submit'>Submit</button><div className="mt-4">
            <p>Your BMI is:  </p>
            
          </div></div></form></div></div>
      )
    }

    export default App