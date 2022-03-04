import firebaseApp from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const fetchBooks = async () => {
  try {
    const bookArray = [];
    const querySnapshot = await getDocs(collection(db, 'Books'));
    querySnapshot.docs.forEach((book) => bookArray.push(book.data()));
    return bookArray;
  } catch (e) {
    console.error('Error reading document: ', e);
  }
};

export default fetchBooks;
