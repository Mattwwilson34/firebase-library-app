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
    return bookArray;
  } catch (e) {
    console.error('Error reading document: ', e);
  }
};

const updateBook = async (bookTitle) => {
  // get Books collection
  const booksRef = collection(db, 'Books');
  // filter Collection by book title
  const q = query(booksRef, where('title', '==', bookTitle));
  // get the documents that match query [returns array]
  const data = await getDocs(q);
  // grab id from the return getDoc array
  const bookID = data.docs[0].id;
  // get reference to the sigular document
  const bookRef = doc(db, 'Books', bookID);
  // get access to document
  const bookSnap = await getDoc(bookRef);
  // update doc
  await updateDoc(bookRef, {
    // invert boolean
    read: !bookSnap.data().read,
  });
};

export default fetchBooks;
export { updateBook };
