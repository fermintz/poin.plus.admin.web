import { createModule, mutation } from 'vuex-class-component';

export class UserStore extends createModule({ namespaced: 'user' }) {
  name = '';
  phone = '';

  @mutation
  setName(name: string) {
    this.name = name;
  }
}
