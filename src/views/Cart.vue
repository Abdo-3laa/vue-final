<template>
  <div class="cart-amazon-style py-4">
    <h2 class="mb-4 fw-bold border-bottom pb-2">Your Cart</h2>
    <div v-if="cart.items.length">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="cart-item d-flex align-items-center p-3 mb-3 bg-white rounded shadow-sm"
      >
        <img
          :src="item.image"
          alt="product"
          class="cart-item-img me-4"
        />
        <div class="flex-grow-1">
          <div class="fw-semibold fs-5 mb-1">{{ item.title }}</div>
          <div class="text-muted mb-2">$ {{ item.price.toFixed(2) }}</div>
          <div class="d-flex align-items-center mb-2">
            <button
              class="btn btn-outline-secondary btn-sm me-2"
              @click="decreaseQuantity(item.id)"
              :disabled="item.quantity <= 1"
            >-</button>
            <span class="fw-bold px-2 cart-qty-badge">{{ item.quantity }}</span>
            <button
              class="btn btn-outline-secondary btn-sm ms-2"
              @click="increaseQuantity(item.id)"
            >+</button>
          </div>
          <button
            class="btn btn-danger btn-sm mt-2"
            @click="removeFromCart(item.id)"
          >
            <i class="bi bi-trash me-1"></i> Remove
          </button>
        </div>
        <div class="fw-bold fs-5 ms-4 text-end" style="min-width: 100px;">
          $ {{ (item.price * item.quantity).toFixed(2) }}
        </div>
      </div>
      <div class="cart-summary bg-summary p-3 rounded shadow-sm mt-4 d-flex justify-content-between align-items-center">
        <span class="fw-bold fs-5">Total:</span>
        <span class="fw-bold fs-4 text-success">$ {{ totalPrice.toFixed(2) }}</span>
      </div>
      <div class="d-flex justify-content-between mt-4 gap-3 flex-wrap">
        <router-link to="/products" class="btn btn-warning btn-lg d-flex align-items-center">
          <i class="bi bi-arrow-left me-2"></i> Continue Shopping
        </router-link>
        <button class="btn btn-success btn-lg d-flex align-items-center">
          <i class="bi bi-credit-card-2-front me-2"></i> Proceed to Checkout
        </button>
      </div>
    </div>
    <div v-else class="alert alert-info mt-4">
      Your cart is empty.
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import cartStore from '../cartStore'

export default {
  setup() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = cartStore

    const totalPrice = computed(() =>
      cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    )

    return { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice }
  },
}
</script>

<style scoped>
.cart-amazon-style {
  max-width: 800px;
  margin: 0 auto;
  background: #f6f6f6;
  min-height: 80vh;
}
.cart-item {
  border: 1px solid #e3e3e3;
  transition: box-shadow 0.2s;
}
.cart-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.cart-item-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  background: #fff;
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 8px;
}
.cart-qty-badge {
  background: linear-gradient(90deg, #ffd700 0%, #ff9900 100%);
  color: #222;
  border-radius: 12px;
  min-width: 32px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  padding: 2px 10px;
  margin: 0 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
.cart-summary {
  border: 1px solid #e3e3e3;
}
.bg-summary {
  background: linear-gradient(90deg, #fffbe6 0%, #ffe0b2 100%);
}
</style>