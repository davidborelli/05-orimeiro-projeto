import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  FiChevronLeft as IconLeft,
  FiChevronRight as IconRight,
} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styled';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  console.log(params.repository);
  return (
    <>
      <S.Header>
        <S.HeaderLogo src={logo} alt="GitExplorer" />
        <S.HeaderContainerToBack to="/">
          <IconLeft size={16} />
          <S.HeaderContainerToBackText>Voltar</S.HeaderContainerToBackText>
        </S.HeaderContainerToBack>
      </S.Header>

      <S.RepositoyInfo>
        <S.AvatarUser
          src="https://avatars1.githubusercontent.com/u/21282437?s=460&u=05a9d1b4fc18014623de9473372b9a27bbed7148&v=4"
          alt="logo"
        />
        <S.RepositoyInfoContent>
          <S.RepositoyInfoTitle>davidborelli/bootcamp</S.RepositoyInfoTitle>
          <S.RepositoyInfoDescrip>A fucking repo</S.RepositoyInfoDescrip>
        </S.RepositoyInfoContent>
      </S.RepositoyInfo>
      <S.RepoDataContainer>
        <S.RepoDataItem>
          <S.RepoDataItemNumber>1808</S.RepoDataItemNumber>
          <S.RepoDataItemInfo>Stars</S.RepoDataItemInfo>
        </S.RepoDataItem>
        <S.RepoDataItem>
          <S.RepoDataItemNumber>48</S.RepoDataItemNumber>
          <S.RepoDataItemInfo>Forks</S.RepoDataItemInfo>
        </S.RepoDataItem>
        <S.RepoDataItem>
          <S.RepoDataItemNumber>67</S.RepoDataItemNumber>
          <S.RepoDataItemInfo>Issues abertas</S.RepoDataItemInfo>
        </S.RepoDataItem>
      </S.RepoDataContainer>

      <S.Repositories>
        <S.RepositoriesItemLink to="/la">
          <S.RepositoriesItem>
            <S.RepositoriesItemContent>
              <S.RepositoriesItemTitle>Nomezao da poha</S.RepositoriesItemTitle>
              <S.RepositoriesItemDescription>
                loren ipson mussum cussum pingus
              </S.RepositoriesItemDescription>
            </S.RepositoriesItemContent>
            <IconRight size={20} />
          </S.RepositoriesItem>
        </S.RepositoriesItemLink>
      </S.Repositories>
    </>
  );
};

export default Repository;
