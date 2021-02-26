import { MessageLevels, MessageObject } from '@/models/base.model'
import { useStore } from 'vuex'

const store = useStore()

export default class Message {
  title: string
  text: string
  level: MessageLevels
  constructor(title: string, text: string | unknown, level: MessageLevels) {
    this.title = title
    this.text = text ?? 'unkn'
    this.level = level
  }

  async show() {
    await store.dispatch('setMessage', this, { root: true })
  }

  static getObject(
    title: string,
    text: string,
    level: MessageLevels
  ): MessageObject {
    return { title, text, level }
  }
}
