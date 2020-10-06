import React from 'react';

import latestPosts from '../datas/latestPosts';
import channelsData from '../datas/channels';
import upcomingGamesData from '../datas/upcomingGames';
import whoToFollowData from '../datas/whoToFollow';
import ContentHeader from '../components/contentHeader';
import ContentListHeader from '../common/contentListHeader';
import HubCard from '../components/hubCard';
import GameHubListItem from '../components/gameHubListItem';
import GameCard from '../components/gameCard';

const GamesHub = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ContentHeader
              title="Games Hub"
              description="The best offers, new games, AAA titles and high-quality video games.."
              buttonText="Discover All"
            />
          </div>
          <div className="hubcard-main-container">
            <ContentListHeader title="Latest posts" />
            <HubCard latestPosts={latestPosts} />
          </div>
          <div className="col-3 hubcard-channels-container">
            <div className="gameshub-list-container">
              <ContentListHeader title="Channels" />
              <div className="gameshub-list-seperator" />
              {channelsData.map((info, index) => (<GameHubListItem key={index} info={info} />))}
              <div className="gameshub-list-container__findButton">
                <button className="line-button wider">Find More</button>
              </div>
            </div>
          </div>
          <div className="col-3 hubcard-follow-container">
            <div className="gameshub-list-container">
              <ContentListHeader title="Who to follow?" />
              <div className="gameshub-list-seperator" />
              {whoToFollowData.map((info, index) => (<GameHubListItem key={index} info={info} />))}
              <div className="gameshub-list-container__findButton">
                <button className="line-button wider">Discover All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming-main">
        <div className="container">
          <div className="upcoming-wrapper">
            <div className="col-12">
              <ContentHeader
                title="Upcoming Games"
                description="Pre-order an upcoming game to start playing on Day 1."
                buttonText="Discover All"
                className="upcoming"
              />
            </div>
            <div className="col-12">
              <div className="gameCard__container">
                {upcomingGamesData.map((info, index) => (<GameCard key={index} data={info} />))}
              </div>
              <div className="gameCards__button">
                <button className="line-button wider">LOAD MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesHub;
