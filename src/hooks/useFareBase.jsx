import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFareBase = (categoryId) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setLoading(true);

      const getProducts = async () => {
        let querySnapshot;
        if (categoryId) {
          const q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
          );
          querySnapshot = await getDocs(q);
        } else {
          querySnapshot = await getDocs(collection(db, "products"));
        }
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };
          productosFirebase.push(product);
        });
        setProducts(productosFirebase);
        setLoading(false);
      };

      getProducts();
    } catch (error) {
      setError(error.message);
    }
  }, [categoryId]);

  return [products, loading, error];
};

export default useFareBase;
