<template>
<footer class="footer bg-dark text-light pt-5 pb-4">
  <div class="container">
    <div class="row gy-4">
      <!-- Brand Section -->
      <div class="col-lg-4 col-md-6">
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-gem fs-2 text-warning me-2"></i>
          <!-- خليت البراند يتوهج -->
          <h5 class="mb-0 fw-bold brand-glow">Brand Store</h5>
        </div>
        <p class="small text-light">
          Your premium destination for quality products and exceptional shopping experience.
        </p>
        <!-- Social Icons -->
        <div class="d-flex gap-2 mt-3">
          <a href="#" class="btn btn-outline-light btn-sm rounded-circle">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="btn btn-outline-light btn-sm rounded-circle">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" class="btn btn-outline-light btn-sm rounded-circle">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="btn btn-outline-light btn-sm rounded-circle">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Links -->
      <div class="col-lg-2 col-md-6">
        <h6 class="fw-bold mb-3 text-light">SHOP</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link">All Products</a></li>
          <li><a href="#" class="footer-link">New Arrivals</a></li>
          <li><a href="#" class="footer-link">Best Sellers</a></li>
          <li><a href="#" class="footer-link">Sale Items</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-6">
        <h6 class="fw-bold mb-3 text-light">SUPPORT</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link">Help Center</a></li>
          <li><a href="#" class="footer-link">Shipping Info</a></li>
          <li><a href="#" class="footer-link">Returns</a></li>
          <li><a href="#" class="footer-link">Size Guide</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-6">
        <h6 class="fw-bold mb-3 text-light">COMPANY</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link">About Us</a></li>
          <li><a href="#" class="footer-link">Careers</a></li>
          <li><a href="#" class="footer-link">Press</a></li>
          <li><a href="#" class="footer-link">Blog</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-md-6">
        <h6 class="fw-bold mb-3 text-light">LEGAL</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link">Privacy Policy</a></li>
          <li><a href="#" class="footer-link">Terms of Service</a></li>
          <li><a href="#" class="footer-link">Cookie Policy</a></li>
          <li><a href="#" class="footer-link">GDPR</a></li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-secondary my-4">

    <!-- Bottom Row -->
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p class="mb-2 mb-md-0 small text-light">© 2024 brand_store. All rights reserved.</p>
       <small>Made By ❤ Abdelrahman Alaa</small>
      <div class="d-flex align-items-center gap-3">
        <span class="small text-light">We Accept:</span>
        <i class="bi bi-credit-card fs-5"></i>
        <i class="bi bi-paypal fs-5"></i>
        <i class="bi bi-apple fs-5"></i>
        <i class="bi bi-google fs-5"></i>
      </div>
    </div>
  </div>
</footer>
</template>

<style>
.footer a:hover {
  color: #fff !important;
}

/* لينكات أوضح */
.footer-link {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #ffffff !important;
}

/* توهج البراند */
.brand-glow {
  color: #ffc107;
  text-shadow: 0 0 8px #ffc107, 0 0 16px #ffda6a;
}
</style>
