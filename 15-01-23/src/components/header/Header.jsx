import styles from "./styles.module.scss";

const Header = () => {
    return (
        <div className={styles.Header}>
            <img src="./logoHeader.png" alt="logo" className={styles.logo}></img>
            <ul className={styles.navbar}>
                <li>Categories</li>
                <li>Contacts</li>
                <li>FAQs</li>
            </ul>
        </div>
    )
}

export default Header;