import { User } from '@firebase/auth';
import { makeAutoObservable } from 'mobx';
import { signOut } from '../../firebase.config';

export class RootStore {
  user: User | null = null;
  
  constructor() {
    makeAutoObservable(this);
  }

  signOut = () => {
    this.user = null;
    signOut();
  }
}
