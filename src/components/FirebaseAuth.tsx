import {useMount} from 'react-use';
import {loadFirebaseUI} from '../../firebase.config';
import 'firebaseui/dist/firebaseui.css';
import { useStores } from 'store/storeContext';

const CONTAINER_ID = 'auth-container'

export function FirebaseAuth() {
  const rootStore = useStores();

  useMount(function attachFirebaseUI() {
    loadFirebaseUI(CONTAINER_ID, (user) => {
      rootStore.user = user;
    })
  });

  return (
    <div id={CONTAINER_ID}></div>
  );
}
