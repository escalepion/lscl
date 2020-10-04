import React from 'react';

const HubCard = (props) => {
  const { latestPosts = [] } = props;

  return (
    latestPosts.map((post, index) => {
      return (
        <div key={index} className="hubcard">
          <div className="hubcard__top">
            <div className="hubcard__top__content">
              <div className="hubcard__top__img-wrapper">
                <img src={post.avatar} alt="profile_picture" />
              </div>
              <div className="hubcard__top__content__wrapper">
                <div className="hubcard__top__content__line">
                  <div className="hubcard__top__content__user">
                    <p className="hubcard__top__content__title">{post.title}</p>
                    {post.isProUser && (
                      <img src={require("../assets/pro-tag-2.png")} alt="pro_tag" />
                    )}
                  </div>
                  <span className="hubcard__top__content__time">{post.lastSeen}</span>
                </div>
                <div>
                  <span className="hubcard__top__content__info">@{post.username}</span>
                  <span className="hubcard__top__content__follower">{post.followerCount} followers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hubcard__content">
            <p>{post.content}</p>
          </div>
          <div className="hubcard__bottom">
            <div className="hubcard__bottom__icons-wrapper">
              <img src={require("../assets/repost-2.png")} alt="pro_tag" />
              <img src={require("../assets/share-2.png")} alt="pro_tag" />
              {post.isApplaused ? (
                <img src={require("../assets/applause-active-2.png")} alt="pro_tag" />
              ) : (
                <img src={require("../assets/applause-2.png")} alt="pro_tag" />
              )}
              <span className="hubcard__bottom__text">{post.emotionCount}</span>
            </div>
            <div className="hubcard__bottom__comments-wrapper">
              {post.comments ? (
                <span className="hubcard__bottom__text hubcard__bottom__text-comments">{post.comments} Comments</span>
              ) : (
                <span className="hubcard__bottom__text hubcard__bottom__text-comments no-comment">Add your comment</span>
              )}
              <img src={require("../assets/icn-comments@2x.png")} alt="pro_tag" />
            </div>
          </div>
        </div>
      );
    })
  );
};

export default HubCard;
