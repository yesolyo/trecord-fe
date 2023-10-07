import { User } from '@/types/user';
import { makeAutoObservable } from 'mobx';

class FeedStore {
  feedId: number;
  contributors: User[];

  constructor() {
    this.feedId = 0;
    this.contributors = [];

    makeAutoObservable(this);
  }

  setFeedId(feedId: number) {
    this.feedId = feedId;
  }

  setContributors(contributors: User[]) {
    this.contributors = contributors;
  }
}

export default FeedStore;
