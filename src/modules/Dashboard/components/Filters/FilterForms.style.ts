import styled from "styled-components";
export const PillButton = styled.button`
  background-color: white;
  color: black;
  border: none;

  padding: 10px;
  border-radius: 30px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  width: 140px;

  &:hover {
    outline: none;
    background: #eaeaea;
  }
`;
