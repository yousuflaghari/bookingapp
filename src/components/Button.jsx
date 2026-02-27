import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
