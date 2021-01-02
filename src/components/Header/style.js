import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  /* background-color:${(props) => props.theme.colors.background}; */
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 12.2px;
  background-color: white;
  width: 30vw;
  border: 1px solid #D8D8D8;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius:10px;
`;
export const SearchButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 17px;
  font-weight: 600;
  border: none;
  border: 1px solid #a00404;
  border-left: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius:10px;
`;
