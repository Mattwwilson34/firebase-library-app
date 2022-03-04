import './App.css';
import Card from './Components/Card/Card';
// import firebaseApp from './firebase';

// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// const db = getFirestore(firebaseApp);

// const addData = async () => {
//   try {
//     const docRef = await addDoc(collection(db, 'users'), {
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815,
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// };

function App() {
  return (
    <div className='App'>
      <Card />
    </div>
  );
}

export default App;
