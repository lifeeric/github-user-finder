import * as React from "react"
import "./UserProfileInfo.scss"
import { useSelector } from "react-redux"

interface Props {
  userInfo: any
}

export const UserProfileInfo: React.FC<Props> = ({ userInfo }) => {
  const isDark = useSelector(state => state.isDark)

  return (
    <div className={`profile ${isDark && `darkmode`}`}>
      <div className="profile__badge">PRO</div>
      <div className="profile__image">
        <img src={userInfo.avatarUrl} alt={`${userInfo.name} Image Of GUF`} />
      </div>
      <div className="profile__body">
        <h2 className="profile__name">
          {userInfo.name ? userInfo.name : "No Name"}
          <span className="profile__skill">
            {userInfo.bio
              ? userInfo.bio.length > 20
                ? `${userInfo.bio.slice(0, 20)}...`
                : userInfo.bio
              : "No Bio"}
          </span>
        </h2>
        <button className="profile__action">FOLLOW</button>

        <div className="profile__counter">
          <div className="profile__follow">
            <span className="profile__follow__label">FOLLOWERS</span>
            <p className="profile__follow__number">
              {userInfo.followers ? userInfo.followers.totalCount : "0"}
            </p>
          </div>

          <div className="profile__follow">
            <span className="profile__follow__label">FOLLOWINGS</span>
            <p className="profile__follow__number">
              {userInfo.followers ? userInfo.following.totalCount : "0"}
            </p>
          </div>

          <div className="profile__follow">
            <span className="profile__follow__label">STARS</span>
            <p className="profile__follow__number">
              {userInfo.followers
                ? userInfo.starredRepositories.totalCount
                : "0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
