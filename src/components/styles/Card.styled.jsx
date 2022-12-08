import styled from "styled-components"

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 15px;
  width: 800px;
  height: 450px;
  padding: 10px;
`;

export default Card;
