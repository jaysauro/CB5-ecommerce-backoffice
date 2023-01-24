import styles from "./styles.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import LiItems from "../liItems";

const Header = ({ setRoute }) => {
  return (
    <ul className={styles.Header}>
      <img src="./logoHeader.png" alt="logo"></img>
      {navBarLinks.map((item, index) => (
        <LiItems
          setRoute={setRoute}
          routeUrl={item.route}
          icon={item.icon}
          key={item.id}
          label={item.label}
        />
      ))}
    </ul>
  );
};

export default Header;