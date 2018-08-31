import { observable, action } from 'mobx';
import { Alert } from 'react-native';

export interface GameBrief {
  id: number;
  name: string;
  desc: string;
  thumbImages: string[];
  videoUrl?: string;
}

class Main {
  @observable
  loading: boolean = true;
  @observable
  hotGames: GameBrief[] = [];
  @observable
  hotUpdates: GameBrief[] = [];
  @observable
  newGames: GameBrief[] = [];
  @observable
  advertisements: GameBrief[] = [];
  @action
  search = (inputVal: string) => {
    console.log('search with: ', inputVal);
  }
  @action
  getHotGames = () => {
    this.loading = true;
    fetch('/games/hot', {
      method: 'GET'
    }).then((result: Response) => {
      return result.json();
    }).then((data: GameBrief[]) => {
      this.hotGames = data;
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
  @action
  getHotUpdates = () => {
    this.loading = true;
    fetch('/games/hot', {
      method: 'GET'
    }).then((result: Response) => {
      return result.json();
    }).then((data: GameBrief[]) => {
      this.hotUpdates = data;
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
  @action
  getNewGames = () => {
    this.loading = true;
    fetch('/games/new', {
      method: 'GET'
    }).then((result: Response) => {
      return result.json();
    }).then((data: GameBrief[]) => {
      this.newGames = data;
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
  @action
  getAdvertisements = () => {
    this.loading = true;
    fetch('/advertisements', {
      method: 'GET'
    }).then((result: Response) => {
      return result.json();
    }).then((data: GameBrief[]) => {
      this.advertisements = data;
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
}