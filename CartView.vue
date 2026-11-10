<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

function formatRupiah(harga) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(harga);
}
</script>

<template>
  <main class="container">
    <h1>Keranjang Belanja</h1>

    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <h2>Keranjang masih kosong</h2>
      <p>Silakan pilih produk di halaman beranda.</p>
      <RouterLink to="/">Kembali Belanja</RouterLink>
    </div>

    <div v-else class="cart-content">
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="cart-item"
      >
        <img :src="item.image" :alt="item.name" />

        <div class="cart-detail">
          <h3>{{ item.name }}</h3>

          <p>{{ formatRupiah(item.price) }}</p>

          <p>Jumlah: {{ item.quantity }}</p>

          <p>
            Subtotal:
            {{ formatRupiah(item.price * item.quantity) }}
          </p>

          <button @click="cartStore.removeFromCart(item.id)">
            Hapus
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Total Barang: {{ cartStore.totalItems }}</h3>

        <h2>
          Total Belanja:
          {{ formatRupiah(cartStore.totalPrice) }}
        </h2>
      </div>
    </div>
  </main>
</template>