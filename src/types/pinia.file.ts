import { defineStore } from 'pinia'

interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      userList: [],
      user: 0
    }
  }
})

interface UserInfo {
  name: string
  age: number
}
