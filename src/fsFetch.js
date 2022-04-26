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
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
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
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}