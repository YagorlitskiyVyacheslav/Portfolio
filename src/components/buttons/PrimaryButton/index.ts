import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;
