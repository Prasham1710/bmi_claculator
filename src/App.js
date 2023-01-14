import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }
  let reload = () => {
    window.location.reload()
  }
  return (
    <div> 
      <img className ='absolute w-full h-full object-cover mix-blend-overlay'src ='https://images.pexels.com/photos/628241/pexels-photo-628241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <div className="flex justify-center items-center h-full  pt-[150px]">
      <form className="bg-blue-200 relative shadow-md rounded h-[450px] w-[400px] px-8 py-4 pt-7 pb-8 mb-4">
        <h1 className="text-center  mb-4 text-xl"> BMI Calculator</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Weight
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 "
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        <div></div>
        <div className="flex items-center justify-center"><button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         onClick={reload} 
         type='submit'>Reload</button></div>
        
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </form>
    </div></div>
    
  );}