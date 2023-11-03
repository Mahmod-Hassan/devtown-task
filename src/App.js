import { useState } from "react";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { RootContainer } from "./styles/Container.styles";
import { GlobalStyle } from "./styles/Global.styles";


function App() {
  // Lifting state up
  // so that I can pass props to immidiate child component
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    // RootContainer GlobalStyle are styled component
    <RootContainer>
      <GlobalStyle />
       <Header category={category} price={price} setPrice={setPrice} setCategory={setCategory} />
       <AllProducts currentPage={currentPage} price={price} category={category} />
       <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </RootContainer>
  )
}

export default App;
