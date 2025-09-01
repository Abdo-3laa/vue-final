<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm animate__animated animate__fadeInDown"
  >
    <div class="container">
      <!-- Brand name with icon -->
      <router-link
        class="navbar-brand d-flex align-items-center fw-bold brand-hover"
        to="/"
      >
        <i class="bi bi-bag-check-fill me-2 text-warning"></i>
        Brand Store
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Left side: links -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link nav-hover" to="/">
              <i class="bi bi-house-door-fill me-1"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-hover" to="/products">
              <i class="bi bi-box-seam me-1"></i> Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-hover" to="/about">
              <i class="bi bi-info-circle-fill me-1"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-hover" to="/contact">
              <i class="bi bi-envelope-fill me-1"></i> Contact
            </router-link>
          </li>
        </ul>

        <!-- Right side: Cart -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item position-relative">
            <router-link class="nav-link nav-hover" to="/cart">
              <i class="bi bi-cart-fill me-1"></i> Cart
              <span
                v-if="cartCount > 0"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bounce-badge"
                style="font-size: 0.7rem;"
              >
                {{ cartCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import cartStore from '../cartStore'

const { cart } = cartStore

const cartCount = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity, 0)
)
</script>

<style scoped>
/* Hover effect for nav links */
.nav-hover {
  transition: all 0.3s ease;
  position: relative;
}
.nav-hover:hover {
  color: #ffc107 !important;
}
.nav-hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #ffc107;
  transition: width 0.3s ease;
}
.nav-hover:hover::after {
  width: 100%;
}

/* Brand hover effect */
.brand-hover {
  transition: transform 0.3s ease, color 0.3s ease;
}
.brand-hover:hover {
  transform: scale(1.05);
  color: #ffc107 !important;
}

/* Bounce animation for cart badge */
@keyframes bounce {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}
.bounce-badge {
  animation: bounce 1s infinite;
}

/* Fade animation for navbar */
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
</style>
