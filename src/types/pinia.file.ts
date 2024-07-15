import { defineStore } from 'pinia'
import { UserInfo } from '../types.ts'

interface State {
  userList: UserInfo[]
  user: number | null
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      userList: [],
      user: 0
    }
  }
})

