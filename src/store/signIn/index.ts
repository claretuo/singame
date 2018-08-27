import { observable, action } from 'mobx';
import { Alert } from 'react-native';

export interface Country {
  id: number;
  name: string;
}

export interface SignInProps {
  loading: boolean;
  country: string;
  phone: string;
  countryList: Country[];
  verifyCode: string;
  getVerifyCode: () => void;
  login: () => void;
}

class Test {
  @observable loading: boolean = false;
  @observable country: string = '';
  @observable phone: string = '';
  @observable countryList: Country[] = [];
  @observable verifyCode: string = '';

  @action
  getVerifyCode = () => {
    this.loading = true;
    fetch(`/verifycode/${this.phone}`, { method: 'GET' }).then((result: Response) => {
      return result.json();
    }).then((verifyCode: string) => {
      this.verifyCode = verifyCode;
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
  @action
  login = () => {
    this.loading = true;
    fetch(`/verifycode/${this.phone}`, { method: 'POST', body: {
        phone: this.phone,
        verifyCode: this.verifyCode,
        country: this.country
      }
    }).then((result: Response) => {
      return result.json();
    }).then((verifyCode: string) => {
      this.verifyCode = verifyCode;
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
}

const test = new Test();

export default test;