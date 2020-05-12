import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img``;

export const HeaderContainerToBack = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a8a8b3;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }
`;

export const HeaderContainerToBackText = styled.span`
  margin-left: 4px;
`;

export const RepositoyInfo = styled.section`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

export const AvatarUser = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const RepositoyInfoContent = styled.div`
  margin-left: 24px;
`;

export const RepositoyInfoTitle = styled.strong`
  font-size: 36px;
  color: #3d3d4d;
`;

export const RepositoyInfoDescrip = styled.p`
  font-size: 18px;
  color: #737380;
  margin-top: 4px;
`;

export const RepoDataContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const RepoDataItem = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: 80px;
  }
`;

export const RepoDataItemNumber = styled.strong`
  font-size: 36px;
  color: #3d3d4d;
`;

export const RepoDataItemInfo = styled.span`
  margin-top: 4px;
  color: #6c6c80;
`;

export const Repositories = styled.div`
  margin-top: 80px;
`;

export const RepositoriesItemLink = styled.a`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const RepositoriesItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const RepositoriesItemContent = styled.div`
  margin: 0 16px;
  flex: 1;
`;

export const RepositoriesItemTitle = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
`;

export const RepositoriesItemDescription = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
`;
