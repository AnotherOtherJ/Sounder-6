import styled from "@emotion/styled";

const StyledNavButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  color: ${({ theme: { color } }): string => color};
  background-color: ${({ theme: { navButton } }): string => navButton};
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &:hover {
    background-color: ${({ theme: { navButtonSelected } }): string => navButtonSelected};
  }
`;

export default StyledNavButton;