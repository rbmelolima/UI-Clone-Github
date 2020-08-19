import React from 'react';
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './styles';

import { Link } from 'react-router-dom';

const Repository: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={ "username" } to={ "/rbmelolima" }>
          rbmelolima
        </Link>
        <span>/</span>
        <Link className={ "reponame" } to={ "/rbmelolima/UI-Clone-Github" }>
          UI-Clone-Github
        </Link>
      </Breadcrumb>

      <p>Recriando a interface do Github com React.js</p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>stars</span>
        </li>
      </Stats>

      <LinkButton href={ 'https://github.com/rbmelolima/UI-Clone-Github' }>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repository;