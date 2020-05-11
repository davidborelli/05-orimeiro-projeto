import React from 'react';

import { FiChevronRight as Icon } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <S.ImageLogo src={logo} alt="Logo image" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form action="">
        <S.InputRepo placeholder="Digite o nome do repositório" />
        <S.ButtonSubmit type="submit">Pesquisar</S.ButtonSubmit>
      </S.Form>

      <S.Repositories>
        <S.RepositoriesItemLink href="#">
          <S.RepositoriesItem>
            <S.RepositoriesItemAvatar
              src="https://avatars1.githubusercontent.com/u/21282437?s=460&u=05a9d1b4fc18014623de9473372b9a27bbed7148&v=4"
              alt="David Borelli"
            />
            <S.RepositoriesItemContent>
              <S.RepositoriesItemTitle>davidborelli</S.RepositoriesItemTitle>
              <S.RepositoriesItemDescription>
                repositório do caralho
              </S.RepositoriesItemDescription>
            </S.RepositoriesItemContent>
            <Icon size={20} />
          </S.RepositoriesItem>
        </S.RepositoriesItemLink>
      </S.Repositories>
    </>
  );
};

export default Dashboard;
