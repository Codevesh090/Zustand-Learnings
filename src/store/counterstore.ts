import {create} from "zustand";

type CounterStore = {
  count:number,
  increment:()=>void, //If we want sync execution means yaani line by line code .
  incrementAsync:()=>Promise<void>; //Let say if we want to set any state after some work done , like is Promise ke resolve hone ke baad "new Promise((resolve)=> setTimeout(resolve,5000))" state change hoye yaa is fetch ke baad hi yeh hoye yaa yeh baad me hoga toh chalega line execution block naa ho ,then we do async .
  decrement:()=>void
}


export const useCounterStore = create<CounterStore>((set)=>({
  count:0,
  increment: () => {
  set((state)=>({count:state.count+1}))
  },
  decrement: () => {
  set((state)=>({count:state.count-1}))
  },
  incrementAsync:async() => {
  await new Promise((resolve)=> setTimeout(resolve,5000))
  set((state)=>({count:state.count+1}))
  }
}))








/*
Simply if,

We want syncronous means line by line execution then simple function .
We want asynchronous means then async function use.
That's it

*/
