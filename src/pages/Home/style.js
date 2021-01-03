import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  margin-top: 140px;
`;
export const LogoSvg = styled.img`
  height: 280px;
  margin-bottom:40px;
`;

export const Ornament = styled.div`
  position: absolute;
  z-index: -1;
  top: -670px;

  height: 1500px;
  width: 1500px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  border: 100px solid ${(props) => props.theme.colors.primary};
`;

export const Span = styled.span`
  margin: 10px 0;
  font-size:26px;

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
