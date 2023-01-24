import styles from "./styles.module.scss";


const Table = ({ categoriesState, getData, loading }) => {
    return (
      <div className={styles.main}>
        <div className={styles.tableHead}>
          <div className={styles.description}>
            <div className={styles.formSection}>
              <h3>Add Categories</h3>
              <form>
                <input type="text" placeholder="Id here.."></input>
                <input type="text" placeholder="Url image here.."></input>
                <input type="text" placeholder="Name here.."></input>
              </form>
            </div>
          </div>
          <button className={styles.refreshBtn} getData={getData}>Add</button>
        </div>
        {loading ? (
          "loading..."
        ) : (
          <div className={styles.tableBody}>
            {categoriesState.map(item => (
              <div className={styles.tableRow} key={item.id}>
                <h4 className={styles.name}>{item.name.substring(0, 20)}</h4>
                <img src={item.image} alt={item.name} />
                <div className={styles.btnSet}>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Table;