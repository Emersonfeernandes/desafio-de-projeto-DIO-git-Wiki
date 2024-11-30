import React, { useState } from "react";
import gitLogo from './assets/github.png'
import { Container } from './components/Containers';
import { Button } from './components/Button'
import { Input, SearchSection } from './components/Input'
import { RepoItem } from './components/ListItem'
import {Title, Content} from './components/Content'

function App() {
  const [repos, setRepos] = useState([]);
  const [use, setUse] = useState([]);
  const [username, setUsername] = useState("");

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      setRepos(data);

      const responseUser = await fetch(
        `https://api.github.com/users/${username}`
      );
      const dataUser = await responseUser.json();
      setUse(dataUser);
      
    } catch (error) {
      console.error("Erro ao buscar repositórios:", error);
    }
  };

  function returnNameLogin(login){
    if (login){
      return "@" + login;
    }
  }

  function returnRepositoriesPublic(Repositories){
    if (Repositories){
      return "Repositories public " + Repositories;
    }
  }

  return (
    <Container>
      <img id="logo" src={gitLogo} width={72} height={72} alt="github logo"/>
      <Title>GitHub Wiki</Title>
      <SearchSection>
        <Input
          type="text"
          placeholder="Digite o username do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={fetchRepos}>Buscar</Button>
      </SearchSection>
      <Content>
        <img src={use.avatar_url}/>
        <div>
          <a target="_blank" href={use.html_url}><h5>{returnNameLogin(use.login)}</h5></a>
          <p>{use.bio}</p>
          <p>{returnRepositoriesPublic(use.public_repos)}</p>
        </div>
      </Content>
      <RepoItem>
        {repos.map((repo) => (
          <li key={repo.id}>
            <div>
            <a target="_blank" href={repo.html_url}><h3>{repo.name}</h3></a>
            <hr />
            <p>{repo.description}</p>
            </div>          
          </li>
        ))}
      </RepoItem>
    </Container>
  );
}
//<p>{repo.description}</p>

export default App;