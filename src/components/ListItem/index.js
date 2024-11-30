import styled from "styled-components";

export const RepoItem = styled.div`
  list-style: none;
  padding: 0;
  width: 80%

  h3{
    font-weight: bold;
    color: #F8F8FF;
  }

  p{
    color: #FFFAFA;
  }

  li{
    background: #363636;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background: #4F4F4F;
    }
  }

  hr{
    color: #F8F8FF;
    padding: 1px;
    width: 100%;
  }
`;