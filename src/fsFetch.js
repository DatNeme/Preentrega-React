import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const fsFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', idCategory));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }
    const getProducts = await getDocs(q);
    const productData = getProducts.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return productData;
}

export const fsFetchOne = async (idProduct) => {
    const docRef = doc(db, "products", idProduct);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idProduct,
          ...docSnap.data()
      }
    } else {
      
      console.log("No se encuentra el producto");
    }
}