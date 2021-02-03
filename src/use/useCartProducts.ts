import { ref } from 'vue';
import { Product } from '@/models/base.model';
import ApiService from '@/services/api.service';

export function useCartProducts() {
  const apiService = new ApiService();
  const products = ref<Product[] | null>(null);
  const request = async () => {
    const resp = await apiService.getCartProducts();
    if (resp.status === 200) {
      products.value = resp.data;
    }
  };

  const removeProduct = (id: string): void => {
    if (products.value) {
      const ind: number = products.value.findIndex(
        (prod: Product) => prod.id === id
      );
      products.value.splice(ind, 1);
    }
  };

  const subtractProduct = (id: string): void => {
    if (products.value) {
      products.value.find((prod: Product) => {
        if (prod.id === id) {
          if (prod.count <= 1) {
            removeProduct(id);
          } else {
            prod.count--;
          }
        }
      });
    }
  };

  const addProduct = (id: string): void => {
    if (products.value) {
      products.value.find((prod: Product) => {
        if (prod.id === id) {
          prod.count++;
        }
      });
    }
  };

  return { products, request, addProduct, subtractProduct };
}
