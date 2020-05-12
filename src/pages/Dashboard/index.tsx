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
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@githubexplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubexplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const { data } = await api.get<Repository>(`repos/${newRepo}`);
      setRepositories([...repositories, data]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro ao buscar o diretório informado');
    }
  };

  return (
    <>
      <S.ImageLogo src={logo} alt="Logo image" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form onSubmit={handleAddRepository}>
        <S.InputRepo
          hasError={!!inputError}
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <S.ButtonSubmit type="submit">Pesquisar</S.ButtonSubmit>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Repositories>
        {repositories.map((repo) => (
          <S.RepositoriesItemLink
            key={repo.full_name}
            to={`/repository/${repo.full_name}`}
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
