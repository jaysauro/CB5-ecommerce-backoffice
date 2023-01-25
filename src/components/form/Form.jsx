import { useEffect, useState } from "react";
import { POST, PUT } from "../../utils/HTTP";

const Form = ({ getData, data }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        image: data.image,
      });
      setEdit(true);
    }
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = e => {
    e.preventDefault();
    POST("categories", form).then(data => {
      console.log(data);
      if (data.status === 201) {
        getData();
      }
    });
  };

  const editForm = e => {
    e.preventDefault();
    PUT("categories", form, "/" + data.id).then(data => {
      console.log(data);
      if (data.status === 200) {
        getData();
      }
    });
  };

  return (
    <form>
      <input
        type="text"
        value={form.name}
        placeholder="Name here.."
        onChange={e => handleForm("name", e)}
      />
      <input
        type="text"
        value={form.image}
        placeholder="Url image here.."
        onChange={e => handleForm("image", e)}
      />

      {edit ? (
        <input type="submit" value="Edit"onClick={e => editForm(e)}/>
      ) : (
        <input type="submit" value="Send" onClick={e => submitForm(e) }/>
      )}
    </form>
  );
};

export default Form;