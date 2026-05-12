import { useCounterStore } from "../store/counterstore";


const OtherComponent = () => {
  const count = useCounterStore((state)=>state.count); //matlab humne store se "count" variable ki value pakadi and is variable count me daal diya. 
  const increment = useCounterStore((state)=>state.increment); //Similiarly ,humne increment function pakad kar isme daal diya
  const decrement = useCounterStore((state)=>state.decrement); //Same here 
  const incrementAsync = useCounterStore((state)=>state.incrementAsync) //Same here
  return (
    <>
    <div className="text-5xl mt-20 ml-95 mb-10 cursor-pointer">{count}</div>
    <div className="flex gap-4">
      <button className="bg-amber-400 rounded-xl px-2 py-2 ml-60 cursor-pointer" onClick={increment}>Increment</button>
      <button className="bg-red-400 rounded-xl px-2 py-2 cursor-pointer" onClick={decrement}>Decrement</button>
      <button className="bg-blue-400 rounded-xl px-2 py-2 cursor-pointer" onClick={incrementAsync}>IncrementAsync</button>
    </div>
    </>
  )
}

export default OtherComponent


/*
Toh samajhte hai ki ZUSTAND kaise kaam karta hai.

Zustand simply two steps me kaam karta hai :
1.Sabse pehle hum dhekte hai ki hume kiske liye Store banana hai like mujhe is state | const [count,setcount] = useState(0);  | ko globally handle karne ke liye Zustand me iska store banana hai,
2.Toh humne pehle Zustand ka store banaya with initial count:0 in store and then humne functions banaye to change that state,such that when we call ,it change the state .
3.That's it 


In total,
Sabse pehle hum store banate hai kisi state ke liye .
Then hum pakadte hai store se variables and functions ko and put it in variables where we want to use.
Uske baad humne button click par set kar diya.
Now when we click then that function runs in store then it makes state changes and jaha-jaha humne us "variable" ko use kiya hoga un sab jagah uski state change ho jaayegi .
Remember yeh state jo store me hoti hai , yeh single source of truth hai , yaani kisi bhi file se hum ise change karenge toh uska effect un sabhi files me dikhayi dega , jaha-jaha wo variable yaa state use hua hai .


*/

