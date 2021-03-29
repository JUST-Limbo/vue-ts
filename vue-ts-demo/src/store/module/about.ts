import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'

import store from '../index'

const getList = () => {
  return new Promise<Array<Number>>((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6])
    }, 500);
  })
}

export interface IAboutState {
  count: Number;
  list: Array<Number>;
}

@Module({
  name: 'about',
  dynamic: true,
  store
})
export default class About extends VuexModule implements IAboutState {
  count: Number = 1;
  list: Array<Number> = [];

  // getters
  get filterList() {
    return this.list.filter(item => item % 2 === 0)
  }

  @Mutation
  updateCount(payload: Number): void {
    this.count += payload
  }
  @Mutation
  updateList(payload: Array<number>): void {
    this.list = payload
  }

  @Action
  async getList(): Promise<boolean> {
    const res: Array<Number> = await getList()
    this.updateList(res)
    return Promise.resolve(true)
  }
}

export const AboutStore = getModule(About)
