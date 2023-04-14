import { User } from "@firebase/auth";

type LoadFirebaseUI = (elementId: string) => void;

// local auth model
export interface LocalAuth {
  currentUser: User | null;
  signOut: () => void;
  loadFirebaseUI: LoadFirebaseUI;
}