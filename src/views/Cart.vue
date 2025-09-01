<template>
  <div class="cart-amazon-style pt-5 py-4">
    <h2 class="mb-4 fw-bold border-bottom pb-2">Your Cart</h2>
    <div v-if="cart.items.length">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="cart-item d-flex flex-wrap flex-md-nowrap align-items-center p-3 mb-3 bg-white rounded shadow-sm"
      >
        <img
          :src="item.image"
          alt="product"
          class="cart-item-img me-md-4 mb-3 mb-md-0"
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
        <div class="fw-bold fs-5 ms-md-4 mt-3 mt-md-0 text-end price-box">
          $ {{ (item.price * item.quantity).toFixed(2) }}
        </div>
      </div>

      <div class="cart-summary bg-summary p-3 rounded shadow-sm mt-4 d-flex justify-content-between align-items-center flex-wrap">
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
  max-width: 950px; /* وسعنا الكارت أكتر */
  margin: 80px auto 40px auto;
  background: #f6f6f6;
  min-height: 80vh;
  padding: 30px;
  border-radius: 12px;
}

.cart-item {
  border: 1px solid #e3e3e3;
  transition: box-shadow 0.2s;
  min-width: 100%;
}
.cart-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}

.cart-item-img {
  width: 120px;
  height: 120px;
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

/* السعر في صندوق علشان ما يطلعش برا */
.price-box {
  min-width: 120px;
  text-align: right;
  white-space: nowrap;
}

/* Responsiveness للموبايل */
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .price-box {
    text-align: left;
    margin-left: 0;
  }
  .cart-item-img {
    width: 100px;
    height: 100px;
  }
}
</style>
