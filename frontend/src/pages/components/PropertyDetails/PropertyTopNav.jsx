import "./propertyTopNav.css";
export default function PropertyTopNav({ prop }) {
  return (
    <div className="top-p-nav">
      <div className="nav-container">
        <div className="text-nav">
          <h1 className="welcome">Welcome {prop && prop.landlords_name} </h1>
          <p className="p-pro">Welcome to ProperyPro</p>
        </div>
        <div className="profile-pic-detail"></div>
      </div>
    </div>
  );
}
