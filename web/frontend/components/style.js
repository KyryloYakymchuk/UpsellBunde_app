import styled from "styled-components";

export const Spasing = styled.div`
  margin: ${({ margin }) => margin || "10px 0"};
`;

export const ProductBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  span {
    color: blue;
    cursor: pointer;
    font-weight: 300;
  }
`;
export const ProductImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
