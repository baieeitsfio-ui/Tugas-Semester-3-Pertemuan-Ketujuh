<script setup>
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.vue";
import { useCartStore } from "../stores/cart.js";

const cartStore = useCartStore();

function handleAddToCart(product) {
  cartStore.addToCart(product);
  alert(product.name + " berhasil ditambahkan ke keranjang!");
}
</script>

<template>
  <main class="container">
    <section class="hero">
      <h1>Selamat Datang di Toko Kita</h1>
      <p>Temukan produk skincare pilihan untuk kebutuhanmu.</p>
    </section>

    <section class="catalog">
      <h2>Katalog Produk</h2>

      <div class="product-list">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </section>

    <section class="cart-link">
      <router-link to="/cart">
        Lihat Keranjang Belanja
        ({{ cartStore.totalItems }})
      </router-link>
    </section>
  </main>
</template>