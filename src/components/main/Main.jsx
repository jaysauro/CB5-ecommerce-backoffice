import { useState } from "react";
import Categories from "../categories";
import Header from "../header/Header";
import Home from "../home";
import styles from "./styles.module.scss";

const Main = () => {
    const [route, setRoute] = useState("home");
  
    return (
      <div className={styles.main}>
        <div className={styles.sxColumn}>
          <Header setRoute={setRoute} />
        </div>
        <div className={styles.dxColumn}>
          {route === "home" && <Home />}
          {route === "categories" && <Categories />}
          {route === "products" && <div>Products</div>}
          {route === "orders" && <div>Orders</div>}
          {route === "users" && <div>Users</div>}
        </div>
        <div className={styles.home}>
          <h2>Find the perfect gift!</h2>
          <div className={styles.gender}>
            <ul>
              <h3>GENDER</h3>
              <li>
                <h4>Male:</h4>
                <img src="https://picsum.photos/500/300?random=1" alt=""></img>
              </li>
              <li>
                <h4>Female:</h4>
                <img src="https://picsum.photos/500/300?random=2" alt=""></img>
              </li>
              <li>
                <h4>Unisex:</h4>
                <img src="https://picsum.photos/500/300?random=3" alt=""></img>
              </li>
            </ul>
          </div>
          <div className={styles.age}>
            <ul>
              <h3>AGE</h3>
              <li>
                <h4>Under 16:</h4>
                <img src="https://picsum.photos/500/300?random=4" alt=""></img>
              </li>
              <li>
                <h4>16-35</h4>
                <img src="https://picsum.photos/500/300?random=5" alt=""></img>
              </li>
              <li>
                <h4>Over 35</h4>
                <img src="https://picsum.photos/500/300?random=6" alt=""></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Main;
  
