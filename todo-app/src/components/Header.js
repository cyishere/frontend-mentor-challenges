import SwitchToDarkIcon from "../images/icon-moon.svg";

const Header = () => {
  return (
    <header>
      <h1>TODO</h1>
      <button className="btn switch-theme-btn">
        <img src={SwitchToDarkIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header;
