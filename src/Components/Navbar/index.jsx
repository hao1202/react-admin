import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="assets/logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img
          src="assets/search.svg"
          alt=""
          className="icon"
        />
        <img src="assets/app.svg" alt="" className="icon" />
        <img
          src="assets/expand.svg"
          alt=""
          className="icon"
        />
        <div className="notification">
          <img src="assets/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg"
            alt=""
          />
          <span>Hao</span>
        </div>
        <img
          src="assets/settings.svg"
          alt=""
          className="icon"
        />
      </div>
    </div>
  );
};
export default Navbar;
