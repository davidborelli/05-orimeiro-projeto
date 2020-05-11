import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight as Icon } from 'react-icons/fi';

import api from '../../config/api';

import logo from '../../assets/logo.svg';
import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // const loadRepositories = async () => {
    //   // const { data } = await api.get(`/users/davidborelli`);
    //   // setRepositories(data);
    // };
  });

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const { data } = await api.get<Repository>(`repos/${newRepo}`);
    setRepositories([...repositories, data]);
    setNewRepo('');
  };

  return (
    <>
      <S.ImageLogo src={logo} alt="Logo image" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form onSubmit={handleAddRepository}>
        <S.InputRepo
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <S.ButtonSubmit type="submit">Pesquisar</S.ButtonSubmit>
      </S.Form>

      <S.Repositories>
        {repositories.map((repo) => (
          <S.RepositoriesItemLink
            key={repo.full_name}
            href={repo.html_url}
            target="_blank"
          >
            <S.RepositoriesItem>
              <S.RepositoriesItemAvatar
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
              />
              <S.RepositoriesItemContent>
                <S.RepositoriesItemTitle>
                  {repo.full_name}
                </S.RepositoriesItemTitle>
                <S.RepositoriesItemDescription>
                  {repo.description}
                </S.RepositoriesItemDescription>
              </S.RepositoriesItemContent>
              <Icon size={20} />
            </S.RepositoriesItem>
          </S.RepositoriesItemLink>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
