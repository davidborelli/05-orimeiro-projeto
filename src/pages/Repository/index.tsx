import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  FiChevronLeft as IconLeft,
  FiChevronRight as IconRight,
} from 'react-icons/fi';

import api from '../../config/api';

import logo from '../../assets/logo.svg';

import * as S from './styled';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [reposiory, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const loadIssues = async (): Promise<void> => {
      const [repositoryResp, issuesResp] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(repositoryResp.data);
      setIssues(issuesResp.data);
    };
    loadIssues();
  }, [params.repository]);

  return (
    <>
      <S.Header>
        <S.HeaderLogo src={logo} alt="GitExplorer" />
        <S.HeaderContainerToBack to="/">
          <IconLeft size={16} />
          <S.HeaderContainerToBackText>Voltar</S.HeaderContainerToBackText>
        </S.HeaderContainerToBack>
      </S.Header>

      {reposiory && (
        <>
          <S.RepositoyInfo>
            <S.AvatarUser
              src={reposiory.owner.avatar_url}
              alt={reposiory.owner.login}
            />
            <S.RepositoyInfoContent>
              <S.RepositoyInfoTitle>{reposiory.full_name}</S.RepositoyInfoTitle>
              <S.RepositoyInfoDescrip>
                {reposiory.description}
              </S.RepositoyInfoDescrip>
            </S.RepositoyInfoContent>
          </S.RepositoyInfo>
          <S.RepoDataContainer>
            <S.RepoDataItem>
              <S.RepoDataItemNumber>
                {reposiory.stargazers_count}
              </S.RepoDataItemNumber>
              <S.RepoDataItemInfo>Stars</S.RepoDataItemInfo>
            </S.RepoDataItem>
            <S.RepoDataItem>
              <S.RepoDataItemNumber>
                {reposiory.forks_count}
              </S.RepoDataItemNumber>
              <S.RepoDataItemInfo>Forks</S.RepoDataItemInfo>
            </S.RepoDataItem>
            <S.RepoDataItem>
              <S.RepoDataItemNumber>
                {reposiory.open_issues_count}
              </S.RepoDataItemNumber>
              <S.RepoDataItemInfo>Issues abertas</S.RepoDataItemInfo>
            </S.RepoDataItem>
          </S.RepoDataContainer>
        </>
      )}

      <S.Repositories>
        {issues.map((issue) => (
          <S.RepositoriesItemLink
            key={issue.id}
            href={issue.html_url}
            target="_blank"
          >
            <S.RepositoriesItem>
              <S.RepositoriesItemContent>
                <S.RepositoriesItemTitle>{issue.title}</S.RepositoriesItemTitle>
                <S.RepositoriesItemDescription>
                  {issue.user.login}
                </S.RepositoriesItemDescription>
              </S.RepositoriesItemContent>
              <IconRight size={20} />
            </S.RepositoriesItem>
          </S.RepositoriesItemLink>
        ))}
      </S.Repositories>
    </>
  );
};

export default Repository;
