import { User } from '@/types/user';
import { makeAutoObservable } from 'mobx';

class FeedStore {
  feedId: number;
  contributors: User[];
  canWriteComment: boolean;

  constructor() {
    this.feedId = 0;
    this.contributors = [];
    this.canWriteComment = false;

    makeAutoObservable(this);
  }

  setFeedId(feedId: number) {
    this.feedId = feedId;
  }

  setContributors(contributors: User[]) {
    this.contributors = contributors;
  }

  setCanWriteComment(canWriteComment: boolean) {
    this.canWriteComment = canWriteComment;
  }
}

export default FeedStore;
