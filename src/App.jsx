import './App.css'
import Counter from './Counter';

function App() {
  
  function handleClick(){
    alert('button is clicked');
  }

  function handleClick2(){
    alert('button 2 is clicked');
  }
  const addToFive = (num) =>{
    alert(num+3);
  }

  return (
    <>
      <h1>React core concepts</h1>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
