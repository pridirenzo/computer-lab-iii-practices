import Persons from "./components/persons/Persons";
function App() {

  const names = ["Parker","Simmons","Lewis","Poe"];

  return (
    <>
      <Persons names={names}/>
    </>
  )
}

export default App
