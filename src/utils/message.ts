import { MessageLevels, MessageObject } from '@/models/base.model'
import { useStore } from 'vuex'

const store = useStore()

export default class MyMessage {
  title: string
  text: string
  level: MessageLevels
  constructor(title: string, text: string, level: MessageLevels) {
    this.title = title
    this.text = text === 'null' ? text : ''
    this.level = level
  }

  async show() {
    await store.dispatch('setMessage', { ...this }, { root: true })
  }

  static getObject(
    title: string,
    text: string,
    level: MessageLevels
  ): MessageObject {
    return { title, text, level }
  }
}
