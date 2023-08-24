import { makeAutoObservable } from 'mobx';

class RecordStore {
  thumbNailUrl: string;
  title: string;
  startDate: string;
  weather: string;
  place: string;
  feel: string;
  move: string;
  withPeople: string;

  constructor() {
    this.thumbNailUrl = '';
    this.title = '';
    this.startDate = '';
    this.weather = '';
    this.place = '';
    this.feel = '';
    this.move = '';
    this.withPeople = '';

    makeAutoObservable(this);
  }

  setThumbNailUrl(url: string) {
    this.thumbNailUrl = url;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setStartDate(startDate: string) {
    this.startDate = startDate;
  }

  setWeather(weather: string) {
    this.weather = weather;
  }

  setPlace(place: string) {
    this.place = place;
  }

  setFeel(feel: string) {
    this.feel = feel;
  }

  setMove(move: string) {
    this.move = move;
  }

  setWithPeople(withPeople: string) {
    this.withPeople = withPeople;
  }

  resetAll() {
    this.thumbNailUrl = '';
    this.title = '';
    this.startDate = '';
    this.weather = '';
    this.place = '';
    this.feel = '';
    this.move = '';
    this.withPeople = '';
  }
}

export default RecordStore;
