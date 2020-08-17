import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={ 'rbmelolima' }
            name={ 'Roger Bernardo de Melo Lima' }
            avatarUrl={ 'https://avatars3.githubusercontent.com/u/48859060?s=460&u=2c3bdd59585c0ed134934d2ab50e025c4932141d&v=4' }
            followers={ 23 }
            following={ 35 }
            company={ 'JTP Solution' }
            location={ 'São Vicente, São Paulo, Brasil' }
            email={ 'rbmelolima@gmail.com' }
            blog={ 'http://www.rbmelolima.com.br/' }
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repositories</h2>

            <div>
              { [ 1, 2, 3, 4, 5, 6 ].map(n => (
                <RepoCard
                  key={ n }
                  username={ 'rbmelolima' }
                  reponame={ 'UI-Clone-Github' }
                  description={ 'Recriando a interface do github com React.js' }
                  language={ n % 3 === 0 ? 'Javascript' : 'Typescript' }
                  stars={ 8 }
                  forks={ 8 }
                />
              )) }
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />

        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;