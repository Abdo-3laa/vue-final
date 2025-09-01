import { reactive, watch } from 'vue'

const cart = reactive({
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
})

watch(
  () => cart.items,
  (newItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newItems))
  },
  { deep: true }
)

function addToCart(product) {
  const existing = cart.items.find((item) => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.items.push({ ...product, quantity: 1 })
  }
}

function removeFromCart(productId) {
  const index = cart.items.findIndex((item) => item.id === productId)
  if (index !== -1) {
    cart.items.splice(index, 1)
  }
}

function increaseQuantity(productId) {
  const item = cart.items.find((item) => item.id === productId)
  if (item) item.quantity++
}

function decreaseQuantity(id) {
  const item = this.cart.items.find((i) => i.id === id)
  if (item) {
    item.quantity--
    if (item.quantity <= 0) {
      this.cart.items = this.cart.items.filter((i) => i.id !== id)
    }
  }
}

export default {
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}