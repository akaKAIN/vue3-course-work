import { App } from 'vue'
import { PaginationOptions } from '@/plugins/pagination/pagination.models'

export default {
  install: (app: App, options: PaginationOptions) => {
    console.log('app', app)
    console.log('options', options)
    app.
  }
}
