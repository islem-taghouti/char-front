import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({ user }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
   
    return (<>   
    <div className="birthdayContainer">
      <img className="birthdayImg" src="assets/gift.png" alt="" />
      <span className="birthdayText"><b>islem</b> and <b> 3 other </b>friends habbe a birthday today</span>
    </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map(u => (
          <Online key={u.id} user={u} />
        ))}

      </ul>
    </>);
  };
  const ProfileRightbar=()=>{
    return (<>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="righrbarInfoItem">
        <span className="rightbarInfokey">City:</span>
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="righrbarInfoItem">
        <span className="rightbarInfokey">From:</span>
        <span className="rightbarInfoValue">{user.from}</span>
      </div>
      <div className="righrbarInfoItem">
        <span className="rightbarInfokey">Relationship:</span>
        <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship===2 ? "Married" : "-"}</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollwings">
      <div className="rightbarFollowing">
        <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
    </div>
    </>)
  }
  return (

    <div className="rightbar">
      <div className="rightbarbarWrapper">
      {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
