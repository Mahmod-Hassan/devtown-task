import styled from 'styled-components';
export const RootContainer = styled.div`
  padding: 5vw;
  background-color: rgb(231, 248, 242);
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`
export const CategoryContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 5vw;
  & button {
    padding: 10px 0;
    width: 10vw;
    font-size: 1rem;
    border-radius: 20px;
    &:hover {
      background-color: rgb(104, 201, 177);
      color: whitesmoke;
      border: none;
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    justify-content: space-between;
    width: 100%;
  }
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 5vh 0px;
  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
export const ProductCardContainer = styled.div`
  display: flex;
  gap: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 1em;
  border-radius: 10px;
  background-color: #ffffff;
  & img {
    width: 40%;
    height: 250px;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
     flex-direction: column;
     & img {
      width: 100%;
     }
  }
`
export const ProductDetails = styled.div`
   width: 60%;
   font-size: 30px;
   & * {
     margin: 5px 0;
  }
   & h1 {
      font-size: 0.8em;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
   }
   & h2 {
      font-size: 0.7em;
   }
   & h4 {
      font-size: 0.5em;
   }
   & p {
      font-size: 0.5em;
   }
   & button {
    background-color: black;
    color: white;
    border-radius: 7px;
    padding: 10px 20px;
    border: none;
   }
   @media (max-width: 1023px) and (min-width: 768px) {
      width: 100%;
    }
`

export const PaginationContainer = styled.div`
   & h3 {
     font-size: 20px;
     text-align: center;
     margin: 5px;
   }
  & div {
    display: flex;
    justify-content: center;
    gap: 10px;
    & button {
      padding: 10px 15px;
      &:hover {
        cursor: pointer;
      }
      &.active {
      background-color: rgb(104, 201, 177);
      border: none;
      color: whitesmoke;
      }
     &.inactive {
      border: 1px solid rgb(148, 146, 146);
     }
    }
  }
`