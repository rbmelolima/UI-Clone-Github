import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import IUser from '../../models/IUser';
import IRepo from '../../models/IRepo';

interface Data {
  user?: IUser;
  repos?: IRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'rbmelolima' } = useParams();
  const [ data, setData ] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${ username }`),
      fetch(`https://api.github.com/users/${ username }/repos`),
    ]).then(async responses => {
      const [ userResponse, reposResponse ] = responses;

      if(userResponse.status === 404) {
        setData({ error: 'User not found' });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.50 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos
      });
    });
  }, [ username ]);

  if(data?.error) {
    return <h1>{ data.error }</h1>;
  }

  if(!data?.user || !data?.repos) {
    return <h1>loading...</h1>;
  }

  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">{ data.user?.public_repos }</span>
      </div>
    );
  };

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>


      <Main>
        <LeftSide>
          <ProfileData
            username={ data.user.login }
            name={ data.user.name }
            avatarUrl={ data.user.avatar_url }
            followers={ data.user.followers }
            following={ data.user.following }
            company={ data.user.company }
            location={ data.user.location }
            email={ data.user.email }
            blog={ data.user.blog }
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Random repositories</h2>

            <div>
              { data.repos.map(item => (
                <RepoCard
                  key={ item.id }
                  username={ item.owner.login }
                  reponame={ item.name }
                  description={ item.description }
                  language={ item.language }
                  stars={ item.stargazers_count }
                  forks={ item.forks_count }
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