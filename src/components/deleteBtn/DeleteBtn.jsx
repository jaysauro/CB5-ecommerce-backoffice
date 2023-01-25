import styles from "./styles.module.scss";
import { DELETE } from "../../utils/HTTP";

const DeleteBtn = ({ id, getData }) => {
  const deleteElement = () => {
    DELETE("categories", "/" + id).then(data => {
      console.log(data);
      getData();
    });
  };
  return (
    <button onClick={() => deleteElement()} className={styles.deleteBtn}>
        Delete
    </button>
  );
};

export default DeleteBtn;