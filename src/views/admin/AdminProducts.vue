<template>
  <teleport to="body">
    <app-modal v-if="modal" title="Добавить продукт" @close="close">
      <modal-create-product></modal-create-product>
    </app-modal>
  </teleport>
  <admin-product-list :products="products"></admin-product-list>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Product } from '@/models/base.model'
import AppModal from '@/components/ui/AppModal.vue'
import ModalCreateProduct from '@/components/requests/ModalCreateProduct.vue'
import AdminProductList from '@/components/admin/AdminProductList.vue'

export default defineComponent({
  name: 'AdminProducts',
  components: { AdminProductList, ModalCreateProduct, AppModal },
  setup() {
    const store = useStore()
    const products = computed<Product[]>(() => {
      return store.getters['products/products']
    })
    const modal = computed<boolean>(() => store.getters['isModalVisible'])
    const close = async () => await store.dispatch('turnOffModal')

    return { products, modal, close }
  }
})
</script>
