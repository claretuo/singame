import { action, observable } from 'mobx';
import api from '../../utils/api';
import { Alert } from 'react-native';

export interface AccountInfo {
  id: number;
  name: string;
  phone: string;
  telegramId: number;
  accountAddress: string;
  avatar: string;
  realName: string;
  type: string;
  idAddress: string;
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

export interface Page {
  pageNum: number;
  pageSize: number;
}

interface TransactionResponse {
  page: Page;
  total: number;
  historyTransactions: TransactionDetail[];
}

class Account {
  @observable
  accountInfo?: AccountInfo;
  @observable
  banlanceShow: boolean = false;
  @observable
  loading: boolean = false;
  @observable
  banlance: number = 0;
  @observable
  historyTransactions: TransactionDetail[] = [];
  @observable
  pageNum: number = 1;
  @observable
  pageSize: number = 10;
  @observable
  total: number = 0;
  @action
  async listHistoryTransactions() {
    this.loading = true;
    const result: { historyTransactions: TransactionResponse } = await api(`
      query historyTransactions {
        historyTransactions{
          total,
          page: { pageNum, pageSize },
          historyTransactions: {
            id, name, amount, type, createdAt
          }
        }
      }
    `);
    const { page: { pageNum, pageSize }, historyTransactions, total } = result.historyTransactions;
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.historyTransactions = historyTransactions;
    this.total = total;
    this.loading = false;
  }
  @action
  async getUserInfo() {
    this.loading = true;
    const result: { userInfo: AccountInfo } = await api(`
      query userInfo {
        userInfo{
          id,
          name,
          phone,
          telegramId,
          accountAddress,
          avatar,
          realName,
          type,
          idAddress,
          brief
        }
      }
    `);
    this.accountInfo = result.userInfo;
    this.loading = false;
  }
  @action
  toggleBanlance() {
    this.banlanceShow = !this.banlanceShow;
  }
}