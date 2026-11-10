<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});

defineEmits(["add-to-cart"]);
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name">

    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>

    <h4>
      Rp {{ product.price.toLocaleString("id-ID") }}
    </h4>

    <button @click="$emit('add-to-cart', product)">
      Beli Sekarang
    </button>
  </div>
</template>