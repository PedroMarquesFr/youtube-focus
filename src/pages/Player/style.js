import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;

export const BlackContainer = styled.div`
  display: flex;
  width: 100%;
  &::before {
    content: "«";
    background-color: ${(props) => props.theme.colors.text};
    height: auto;
    width: 11.4vw;
  }
  &::after {
    content: "«";
    background-color: ${(props) => props.theme.colors.text};
    height: auto;
    width: 11.4vw;
  }
`;
