import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TheLoader from '@/components/TheLoader.vue'

describe('CartProduct.vue', () => {
  it('rendering loader if props is true', () => {
    const wrapper = shallowMount(TheLoader, {
      props: {
        isLoading: true
      }
    })
    expect(wrapper.html()).to.contain('loader')
  })

  it('no loader if props is false', () => {
    const wrapper = shallowMount(TheLoader, {
      props: {
        isLoading: false
      }
    })
    expect(wrapper.html()).to.not.contain('loader')
  })
})
