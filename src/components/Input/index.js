import styled from "styled-components";

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 80%;
  height: 50px;
  background: transparent;
  color: #F0F8FF;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;