import React, { FC, ReactNode } from 'react';
import { RootStore } from './root.store';

const isDevMode = import.meta.env.DEV;
const store = new RootStore();
const StoreContext = React.createContext(store);

export const useStores = (): RootStore => {
	const store = React.useContext(StoreContext);
	if (!store) {
		// this is especially useful in TypeScript so you don't need to be checking for null all the time
		throw new Error('You have forgot to use StoreProvider, shame on you.');
	}
	return store;
};

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};

if (isDevMode) {
	// @ts-ignore
	window['store'] = store;
}
