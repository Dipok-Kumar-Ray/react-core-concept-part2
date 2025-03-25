
import './App.css'
import Counter from './Counter';
import Batsman from './batsman';

function App() {
 
  function handleClick(){
    alert('I am Clicked');
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  

  return (
    <>
     
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Batsman></Batsman>
      


     <button onClick={handleClick}>Click Me</button>
     <button onClick={function handleClick(){
      alert('Clicked me 2')
     }}>Click Me 2 </button>
     <button onClick={handleClick3}>Click me 3</button>
     <button onClick={() => alert('Clicked me 4')}>Clicked me 4</button>
     <button onClick={() => handleAdd5(4)}>Click Add 5 </button>
    </>
  )
}

export default App
