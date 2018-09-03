import { observable, action } from 'mobx';

export interface AccountInfo {
  id: number;
  name: string;
  phone: string;
  telegram_id: number;
  account_address: string;
  avatar: string;
  real_name: string;
  type: string;
  id_address: string;
  brief: string;
}

enum TransactionType {
  INCOME = 1,
  PAYMENT = 2
}

export interface TransactionDetail {
  id: number;
  name: string;
  amount: number;
  type: TransactionType;
  createdAt: string;
}

class Account {
  @observable
  loading: boolean = false;
  @observable
  blance: number = 0;
  @observable
  historyTransactions: TransactionDetail[] = [];
  @action
  listHistoryTransactions() {
    this.historyTransactions = [];
  }
}