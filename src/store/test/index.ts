import { observable, action } from 'mobx';

export interface ITest {
  sum?: number;
  increase?: () => void;
  decrease?: () => void;
}

class Test {
  @observable sum: number = 0;

  @action
  increase = () => {
    this.sum ++;
  }
  @action
  decrease = () => {
    this.sum --;
  }
}

const test = new Test();

export default test;