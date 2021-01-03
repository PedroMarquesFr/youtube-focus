import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:20px;
`;
export const Thumb = styled.img`
  width: 100%;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-weight: 500;
`;
export const Description = styled.span``;
export const Channel = styled.span`
  opacity: 0.75;
`;

export const PlayerLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;
