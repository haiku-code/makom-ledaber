import { User } from '@firebase/auth';
import { makeAutoObservable } from 'mobx';
import { initFirebaseAuth } from 'services/auth.service';
import { LocalAuth } from 'models/auth.model';


export class RootStore {
  user: User | null = null;
  auth: LocalAuth | null = null;

  constructor() {
    makeAutoObservable(this);
    this.auth = initFirebaseAuth((user) => this.setUser(user));

    if(this.auth.currentUser) {
      this.setUser(this.auth.currentUser);
    }
  }

  loadFirebaseUI = (elementId: string) => {
    this.auth?.loadFirebaseUI(elementId);
  }

  setUser = (user: User | null) => {
    this.user = user;
  }

  signOut = () => {
    this.user = null;
    this.auth?.signOut();
  }
}
