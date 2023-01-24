import styles from "./styles.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <h3>CATEGORIES</h3>
            <ul className={styles.categories}>
                <li>Action</li>
                <li>Adventure</li>
                <li>Roleplay</li>
                <li>Simulation</li>
                <li>Sport</li>
            </ul>
        </div>
    )
}

export default Sidebar;