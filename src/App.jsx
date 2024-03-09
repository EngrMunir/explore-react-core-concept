import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

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
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
