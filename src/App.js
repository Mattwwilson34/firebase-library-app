import './App.css';
import firebaseApp from './firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
addData();

function App() {
  return <div className='App'>Firebase Library</div>;
}

export default App;
