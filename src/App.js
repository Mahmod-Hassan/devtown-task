import { useState } from "react";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Pagination from "./components/Pagination";


function App() {
  const [category, setCategory] = useState('all');
  return (
    <div>
       <Header category={category} setCategory={setCategory} />
       <AllProducts category={category} />
       <Pagination />
    </div>
  )
}

export default App;
