import firebaseApp from './firebase';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  where,
  query,
  getDoc,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const fetchBooks = async () => {
  try {
    const bookArray = [];
    const querySnapshot = await getDocs(collection(db, 'Books'));
    querySnapshot.docs.forEach((book) => bookArray.push(book.data()));
    updateBook();
    return bookArray;
  } catch (e) {
    console.error('Error reading document: ', e);
  }
};

const updateBook = async () => {
  const booksRef = collection(db, 'Books');
  const q = query(booksRef, where('pages', '>', 1));
  const data = await getDocs(q);
  data.docs.forEach(async (book) => {
    const bookRef = doc(db, 'Books', book.id);
    await updateDoc(bookRef, {
      read: true,
    });
  });
};

export default fetchBooks;
