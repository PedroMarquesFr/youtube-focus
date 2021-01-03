import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
  position: fixed;
  top: 0;
  right: 0;
  width:100vw;
  /* background-color:${(props) => props.theme.colors.background}; */
  
  background-color:rgba(240, 240, 240, 0.82);
  backdrop-filter: blur(100px);
  z-index:3;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 8.2px;
  background-color: white;
  width: 30vw;
  border: 1px solid #d8d8d8;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
`;
export const SearchButton = styled.button`
  padding: 10px;
  background-color: #3367D6;
  color: white;
  font-size: 17px;
  font-weight: 600;
  border: none;
  border: 1px solid #1E53C4;
  border-left: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  transition:background .3s;
  &:hover{
    background-color: #1E53C4;
  }
`;
