<template>
  <div class="products-amazon-bg py-5 px-2">
    <div class="container pt-4">
      <!-- Search Bar -->
      <div class="mb-4 d-flex justify-content-center">
        <div class="input-group search-bar-group shadow-sm">
          <span class="input-group-text bg-white border-0">
            <i class="bi bi-search text-warning"></i>
          </span>
          <input
            v-model="search"
            type="text"
            class="form-control search-bar"
            placeholder="Search for products, brands and more..."
          />
        </div>
      </div>

      <!-- Categories -->
      <div class="mb-4 d-flex flex-wrap justify-content-center gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          class="btn btn-category fw-bold"
          :class="{ active: selectedCategory === cat }"
          @click="selectCategory(cat)"
        >
          <i v-if="cat === 'all'" class="bi bi-grid me-1"></i>
          <i v-else-if="cat === `men's clothing`" class="bi bi-person-badge me-1"></i>
          <i v-else-if="cat === `women's clothing`" class="bi bi-person-hearts me-1"></i>
          <i v-else-if="cat === 'jewelery'" class="bi bi-gem me-1"></i>
          <i v-else-if="cat === 'electronics'" class="bi bi-cpu me-1"></i>
          {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}
        </button>
      </div>

      <!-- Products -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="(product, idx) in filteredProducts"
          :key="product.id"
          class="col"
        >
          <div
            class="card product-card h-100 border-0 shadow-sm animate__animated animate__fadeInUp hover-zone"
            tabindex="0"
            @click="onCardClick(product)"
            @keydown.enter="onCardClick(product)"
          >
            <div class="product-img-wrap d-flex align-items-center justify-content-center bg-white">
              <img
                :src="product.image"
                class="card-img-top p-3"
                :alt="product.title"
                style="height: 180px; object-fit: contain;"
              />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold mb-2" style="min-height: 48px;">
                {{ product.title }}
              </h5>
              <span class="badge bg-category mb-2 align-self-start">
                <i v-if="product.category === `men's clothing`" class="bi bi-person-badge me-1"></i>
                <i v-else-if="product.category === `women's clothing`" class="bi bi-person-hearts me-1"></i>
                <i v-else-if="product.category === 'jewelery'" class="bi bi-gem me-1"></i>
                <i v-else-if="product.category === 'electronics'" class="bi bi-cpu me-1"></i>
                {{ product.category }}
              </span>
              <p class="card-text text-success fw-bold fs-5 mb-2">
                $ {{ product.price.toFixed(2) }}
              </p>
              <div class="mb-2">
                <span class="badge bg-warning text-dark me-2">
                  <i class="bi bi-star-fill"></i>
                  {{ getRating(product, idx) }}
                </span>
                <span class="text-muted small">Free Delivery</span>
              </div>
              <button
                class="btn btn-amazon mt-auto fw-bold d-flex align-items-center justify-content-center"
                @click.stop="addToCart(product)"
              >
                <i class="bi bi-cart-plus me-2"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center mt-4">
        <div class="spinner-border" role="status"></div>
      </div>

      <!-- Error -->
      <div v-if="error" class="alert alert-danger mt-4">
        Failed to load products.
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import cartStore from '../cartStore'

export default {
  setup() {
    const products = ref([])
    const search = ref('')
    const filteredProducts = ref([])
    const loading = ref(false)
    const error = ref(false)
    const categories = ref([
      'all',
      "men's clothing",
      "women's clothing",
      'jewelery',
      'electronics'
    ])
    const selectedCategory = ref('all')

    const fetchProducts = async () => {
      loading.value = true
      error.value = false
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        products.value = await res.json()
        filteredProducts.value = products.value
      } catch {
        error.value = true
      } finally {
        loading.value = false
      }
    }

    const selectCategory = (cat) => {
      selectedCategory.value = cat
      filterProducts()
    }

    const filterProducts = () => {
      let list = products.value
      if (selectedCategory.value !== 'all') {
        list = list.filter(p => p.category === selectedCategory.value)
      }
      const term = search.value.toLowerCase()
      filteredProducts.value = list.filter((p) =>
        p.title.toLowerCase().includes(term)
      )
    }

    watch(search, filterProducts)

    onMounted(fetchProducts)

    const addToCart = (product) => {
      cartStore.addToCart(product)
      alert(`Added "${product.title}" to cart.`)
    }

    function getRating(product, idx) {
      if (product.rating && product.rating.rate) {
        return product.rating.rate.toFixed(1)
      }
      const ratings = [4.9, 4.7, 4.5, 4.3, 4.1, 3.9, 4.8, 4.6, 4.2, 3.8, 4.0]
      return ratings[idx % ratings.length]
    }

    function onCardClick(product) {
      alert(`Product: ${product.title}`)
    }

    return {
      search,
      filteredProducts,
      loading,
      error,
      addToCart,
      categories,
      selectedCategory,
      selectCategory,
      getRating,
      onCardClick
    }
  },
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Background */
.products-amazon-bg {
  background: linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%);
  min-height: 100vh;
}

/* Search */
.search-bar-group {
  max-width: 500px;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid #ffd700;
  background: #fff;
}
.search-bar {
  border: none;
  font-size: 1.1rem;
  padding-left: 0.5rem;
  background: #fff;
}
.search-bar:focus {
  box-shadow: none;
  outline: none;
}
.input-group-text {
  border: none;
  background: #fff;
  font-size: 1.25rem;
}

/* Category Buttons */
.btn-category {
  background: linear-gradient(90deg, #fffbe6 0%, #ffe082 100%);
  color: #b8860b;
  border: 1.5px solid #ffd700;
  border-radius: 20px;
  padding: 0.4em 1.2em;
  font-size: 1rem;
  transition: background 0.25s, color 0.25s, border 0.25s, box-shadow 0.25s;
  box-shadow: 0 1px 4px rgba(255, 193, 7, 0.08);
}
.btn-category.active,
.btn-category:hover {
  background: linear-gradient(90deg, #ffd700 0%, #ff9900 100%);
  color: #222;
  border: 1.5px solid #ff9900;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.18);
}

/* Product Card */
.product-card {
  border-radius: 18px;
  background: linear-gradient(135deg, #fffbe6 0%, #f8fafc 100%);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease;
  box-shadow: 0 2px 12px rgba(255, 193, 7, 0.08);
  cursor: pointer;
}
.product-card:hover,
.product-card:focus {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 10px 32px rgba(255, 193, 7, 0.25);
  border: 2px solid #ff9900;
}
.product-card:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.18);
  border: 2px solid #ffd700;
}

/* Product Image */
.product-img-wrap {
  min-height: 200px;
  background: linear-gradient(90deg, #fffbe6 0%, #e3f0ff 100%);
  border-bottom: 1px solid #ffe082;
}

/* Title */
.card-title {
  color: #1e3c72;
  font-size: 1.08rem;
}

/* Category Badge */
.badge.bg-category {
  background: linear-gradient(90deg, #e3f0ff 0%, #ffe082 100%);
  color: #b8860b;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 8px;
  padding: 0.35em 0.9em;
  margin-bottom: 0.2em;
  box-shadow: 0 1px 4px rgba(255, 193, 7, 0.08);
}

/* Add to Cart Button */
.btn-amazon {
  background: linear-gradient(90deg, #ffd700 0%, #ff9900 100%);
  color: #222;
  border: none;
  border-radius: 24px;
  font-weight: bold;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.1);
  transition: background 0.25s, color 0.25s, box-shadow 0.25s;
  padding: 0.6rem 1.5rem;
}
.btn-amazon:hover {
  background: linear-gradient(90deg, #ff9900 0%, #ffd700 100%);
  color: #fff;
  box-shadow: 0 4px 18px rgba(255, 193, 7, 0.25);
}

/* Rating Badge */
.badge.bg-warning {
  background: linear-gradient(90deg, #ffd700 0%, #ff9900 100%) !important;
  color: #222 !important;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.4em 0.8em;
  box-shadow: 0 1px 4px rgba(255, 193, 7, 0.1);
}

/* Responsive */
@media (max-width: 767px) {
  .product-img-wrap {
    min-height: 140px;
  }
  .search-bar-group {
    font-size: 1rem;
  }
}
</style>
