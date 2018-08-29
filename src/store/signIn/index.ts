import { observable, action } from 'mobx';
import { Alert } from 'react-native';

export interface Country {
  id: number;
  name: string;
}

export interface SignInProps {
  loading: boolean;
  countryId: number;
  phone: string;
  countryList: Country[];
  verifyCode: string;
  setCountry: (country: number) => void;
  setPhone: (phone: string) => void;
  getCountries: () => void;
  getVerifyCode: () => void;
  setVerifyCode: (verifyCode: string) => void;
  login: () => void;
  forgot: () => void;
}

class SignIn {
  @observable loading: boolean = false;
  @observable countryId?: number;
  @observable phone: string = '';
  @observable countryList: Country[] = [];
  @observable verifyCode: string = '';

  @action
  setCountry = (countryId: number) => {
    this.countryId = countryId;
  }

  @action
  setPhone = (phone: string) => {
    this.phone = phone;
  }

  @action
  setVerifyCode = (verifyCode: string) => {
    this.verifyCode = verifyCode;
  }

  @action
  getCountries = () => {
    const countried = Promise.resolve([
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '美国'
      },
    ]);
    this.loading = true;
    countried.then((data) => {
      this.loading = false;
      this.countryList = data;
    });
  }

  @action
  getVerifyCode = () => {
    this.loading = true;
    fetch(`/verifycode/${this.phone}`, { method: 'GET' }).then((result: Response) => {
      return result.json();
    }).then(() => {
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
    fetch('/verifycode', { method: 'POST', body: JSON.stringify({
        phone: this.phone,
        verifyCode: this.verifyCode,
        countryId: this.countryId
      })
    }).then((result: Response) => {
      return result.json();
    }).then(() => {
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
  @action
  forgot = () => {
    this.loading = true;
    fetch('/forgot', {
      method: 'POST', body: JSON.stringify({
        phone: this.phone,
        countryId: this.countryId
      })
    }).then((result: Response) => {
      return result.json();
    }).then(() => {
      this.loading = false;
    }).catch(e => {
      console.error(e.message);
      Alert.alert(e.message);
      this.loading = false;
    });
  }
}

const signIn = new SignIn();

export default signIn;