<script setup>
import { useCartStore } from "./stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div>
    <header class="navbar">
      <RouterLink to="/" class="logo">
        TOKO KITA
      </RouterLink>

      <nav>
        <RouterLink to="/">
          Beranda
        </RouterLink>

        <RouterLink to="/cart" class="cart-link">
          Keranjang ({{ cartStore.totalItems }})
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>