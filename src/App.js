import './App.css';
import firebaseApp from './firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);
const docRef = doc(db, 'test', 'test1');
const getData = async () => {
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};
getData();

function App() {
  return <div className='App'>Firebase Library</div>;
}

export default App;
