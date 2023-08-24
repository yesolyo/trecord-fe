import { createContext, useContext } from 'react';
import RecordStore from './RecordStore';

interface Store {
  recordStore: RecordStore;
}

export const store: Store = {
  recordStore: new RecordStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
