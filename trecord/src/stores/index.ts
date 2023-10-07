import { createContext, useContext } from 'react';
import RecordStore from './RecordStore';
import FeedStore from './FeedStore';

interface Store {
  recordStore: RecordStore;
  feedStore: FeedStore;
}

export const store: Store = {
  recordStore: new RecordStore(),
  feedStore: new FeedStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
