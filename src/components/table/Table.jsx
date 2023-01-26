import Form from "../form/Form";
import DeleteBtn from "../deleteBtn";
import EditBtn from "../editBtn/EditBtn";
import styles from "./styles.module.scss";


const Table = ({ categoriesState, data, getData, loading }) => {
    return (
      <div className={styles.main}>
        <div className={styles.tableHead}>
          <div className={styles.description}>
            <div className={styles.formSection}>
              <h3>Add Categories</h3>
              <Form
                data={data}
                getData={getData}
              />
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
                <EditBtn
                  getData={getData}
                  data={{ name: item.name, image: item.image, id: item.id }}
                />
                <DeleteBtn getData={getData} id={item.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Table;