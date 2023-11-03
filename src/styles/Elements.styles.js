import styled from "styled-components";

export const Select = styled.select`
    border: none;
    outline: none;
    padding: 0.5rem 0.5rem;
    width: 20vw;
    height: 7vh;
    font-size: 1rem;
`
export const StyledButton = styled.button`
     &.active {
      background-color: rgb(104, 201, 177);
      border: none;
      color: whitesmoke;
    }
    &.inactive {
      border: 1px solid rgb(148, 146, 146);
    }
`

export const Category = styled.span`
   background-color: rgb(160, 226, 204);
  color: rgb(51, 156, 121);
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 700;
`