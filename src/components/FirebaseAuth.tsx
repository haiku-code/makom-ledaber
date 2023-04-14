import {useMount} from 'react-use';
import 'firebaseui/dist/firebaseui.css';
import { useStores } from 'store/storeContext';

const CONTAINER_ID = 'auth-container'

export function FirebaseAuth() {
  const rootStore = useStores();

  useMount(function attachFirebaseUI() {
    rootStore.loadFirebaseUI(CONTAINER_ID);
  });

  return (
    <div id={CONTAINER_ID}></div>
  );
}
