import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 110px;
`;

export const Button = styled.button`
  padding: 7px;
  font-size: 17px;
  font-weight: 600;
  background-color: #3367d6;

  border: 1px solid #1e53c4;
  border-radius: 10px;
  color: white;

  transition: background 0.3s;
  &:hover {
    background-color: #1e53c4;
  }
`;
