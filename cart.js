import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {

  // Menyimpan daftar produk dalam keranjang
  const items = ref([]);

  // Menambahkan produk ke keranjang
  function addToCart(product) {
    const existingProduct = items.value.find(
      item => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      items.value.push({
        ...product,
        quantity: 1
      });
    }
  }

  // Menghapus produk dari keranjang
  function removeFromCart(id) {
    items.value = items.value.filter(
      item => item.id !== id
    );
  }

  // Menghitung jumlah seluruh barang
  const totalItems = computed(() => {
    return items.value.reduce(
      (total, item) => total + item.quantity,
      0
    );
  });

  // Menghitung total harga belanja
  const totalPrice = computed(() => {
    return items.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  });

  return {
    items,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice
  };
});