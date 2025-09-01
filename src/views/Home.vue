<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center px-3">
      <h1
        class="mb-4 display-4 fw-bold animate__animated animate__fadeInDown brand-title"
      >
        <i class="bi bi-shop-window me-2"></i>
        Welcome to <span class="brand-gradient">Brand Store</span>
      </h1>
      <p
        class="lead mb-3 animate__animated animate__fadeInUp animate__delay-1s hero-lead"
      >
        Your one-stop destination for amazing products!
      </p>
      <p
        class="mb-5 fs-5 animate__animated animate__fadeInUp animate__delay-2s hero-desc"
      >
        Discover our wide range of high-quality products at unbeatable prices.<br />
        From <span class="fw-bold text-highlight">electronics</span> to
        <span class="fw-bold text-highlight">fashion</span>, we have everything you need.
      </p>
      <router-link
        to="/products"
        class="btn btn-gradient btn-lg mb-5 shadow-sm px-4 py-2 animate__animated animate__zoomIn animate__delay-3s play-btn"
      >
        <i class="bi bi-stars me-2"></i>
        Show Our Products
        <i class="bi bi-box-seam ms-2"></i>
      </router-link>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5 px-3">
      <div class="container py-5">
        <div class="row justify-content-center g-4">
          <!-- Feature Cards -->
          <div class="col-md-4">
            <div
              class="feature-card-2 animate__animated animate__fadeInUp animate__delay-1s"
            >
              <div class="feature-icon mb-3">
                <i class="bi bi-truck-front-fill"></i>
                <i class="bi bi-clock-history ms-1 text-info"></i>
              </div>
              <h5 class="feature-title">Fast Shipping</h5>
              <p class="feature-desc">
                Get your orders delivered quickly with our express shipping service.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div
              class="feature-card-2 animate__animated animate__fadeInUp animate__delay-2s"
            >
              <div class="feature-icon mb-3">
                <i class="bi bi-shield-lock-fill"></i>
                <i class="bi bi-credit-card-2-front-fill ms-1 text-success"></i>
              </div>
              <h5 class="feature-title">Secure Payment</h5>
              <p class="feature-desc">
                Shop with confidence using our secure payment system.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div
              class="feature-card-2 animate__animated animate__fadeInUp animate__delay-3s"
            >
              <div class="feature-icon mb-3">
                <i class="bi bi-headset"></i>
                <i class="bi bi-chat-dots-fill ms-1 text-primary"></i>
              </div>
              <h5 class="feature-title">24/7 Support</h5>
              <p class="feature-desc">
                Our customer support team is here to help you anytime.
              </p>
            </div>
          </div>
        </div>

        <!-- Trusted Section -->
        <div
          class="trusted-section mt-5 animate__animated animate__fadeInUp animate__delay-4s text-center"
        >
          <h4 class="mb-4 trusted-title">
            Trusted by <span class="text-highlight">10,000+</span> happy customers
          </h4>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <i class="bi bi-star-fill text-star fs-3"></i>
            <i class="bi bi-star-fill text-star fs-3"></i>
            <i class="bi bi-star-fill text-star fs-3"></i>
            <i class="bi bi-star-fill text-star fs-3"></i>
            <i class="bi bi-star-half text-star fs-3"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Hero Section */
.hero-section {
  background: url("https://images.pexels.com/photos/5531541/pexels-photo-5531541.jpeg")
    no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 15px 80px;
}

.brand-title {
  color: #fdfdfd;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.5);
}

.brand-gradient {
  background: linear-gradient(90deg, #ffd700 0%, #ff9900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-lead {
  color: #e3f2fd;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}
.hero-desc {
  color: #fefefe;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

/* Button */
.btn-gradient {
  background: linear-gradient(90deg, #ffb347 0%, #ffcc33 100%);
  color: #222;
  border: none;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, #ffcc33 0%, #ffb347 100%);
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

/* زرار "بيلعب" */
.play-btn {
  animation: bouncePlay 2s infinite;
}

@keyframes bouncePlay {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.05);
  }
}

/* Features Section */
.features-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e0f7fa 100%);
  border-radius: 30px 30px 0 0;
  margin-top: -40px;
  padding-top: 100px;
  padding-bottom: 80px;
}

.feature-card-2 {
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 18px rgba(30, 60, 114, 0.12);
  padding: 2rem 1.5rem;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;
}
.feature-card-2:hover {
  transform: translateY(-12px) scale(1.05);
  box-shadow: 0 10px 30px rgba(30, 60, 114, 0.25);
}

.feature-icon {
  font-size: 2.2rem;
  color: #ff9800;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.3em;
}

.feature-title {
  font-size: 1.35rem;
  font-weight: bold;
  color: #1e3c72;
}

.feature-desc {
  color: #444;
  font-size: 1.08rem;
  margin-top: 0.5rem;
}

/* Trusted Section */
.trusted-section {
  margin-top: 4rem;
  padding: 2.5rem;
  background: linear-gradient(90deg, #1e3c72 0%, #38ef7d 100%);
  border-radius: 18px;
}

.trusted-title {
  color: #fffde7;
}

.text-highlight {
  background: linear-gradient(90deg, #ffd700 0%, #ff9900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-star {
  color: #ffd700 !important;
}
</style>
