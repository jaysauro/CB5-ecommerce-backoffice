import { useState } from "react";
import EditForm from "../editForm/EditForm";
import styles from "./styles.module.scss";



const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditForm getData={getData} data={data} setShowModal={setShowModal} />
      )}

      <button onClick={() => setShowModal(true)} className={styles.editBtn}>
        Edit
      </button>
    </>
  );
};

export default EditBtn;