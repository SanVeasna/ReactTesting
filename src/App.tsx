import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
interface Data {
  name: string,
  age: number
}

// render every input because it create new state
function App() {
  console.log('render')
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data = { UserName: '', UserAge: 0 };
    data.UserName = name;
    data.UserAge = age;
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name"></input>
        <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} id="age"></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

//just render only one time at initialize
function App1() {
  console.log('render')
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let UserName = name.current?.value;
    let UserAge = age.current?.value;
    console.log({ UserName, UserAge });
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} id="name"></input>
        <input type="number" ref={age} id="age"></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

function CountNumber() {
  let [count, setCount] = useState(0);

  //count will set to default state when click so count change only one time
  // const countNumber = (number: number) => {
  //   setCount(count + number);
  //   setCount(count + number);
  // }

  //it not relate to count it take thier own value to change count value so it will change two time when click
  const countNumber = (number: number) => {
    setCount((prev: number) => {
      return prev + number;
    });
    setCount((prev: number) => {
      return prev + number;
    });
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => countNumber(-1)}>Decrease</button>
      <button onClick={() => countNumber(1)}>Increase</button>
    </div>
  )
}

export default CountNumber
