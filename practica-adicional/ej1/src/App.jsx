import Products from "./components/products/Products";

const products = ["table","couch","chair1","chair2"];


function App() {

  return (
    <>
     <Products products={products}/>
    </>
  )
}

export default App;
