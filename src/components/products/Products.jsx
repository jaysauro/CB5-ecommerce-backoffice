import { useEffect, useState } from "react";
import { DELETE, GET } from "../../utils/HTTP";
import LiProduct from "../liProduct/LiProduct";
import Form from "../form/Form";
import styles from "./styles.module.scss";

const Products = (getData, data) => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then(data => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = id => {
    DELETE("products", id).then(data => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div className={styles.Products}>
        <Form
          data={data}
          getData={getData}
        />
      <ul className={styles.ulProducts}>
        {products.map((item, index) => (
          <LiProduct
            reloadItems={reloadItems}
            deleteElement={deleteElement}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;