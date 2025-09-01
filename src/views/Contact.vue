<template>
  <div class="container my-5 pt-5">
    <!-- Contact Form -->
    <div class="contact-form-section text-center mb-5 p-4 rounded">
      <h2 class="fw-bold">Contact Us</h2>
      <p class="text-muted">We’d love to hear from you! Fill out the form below 👇</p>
    </div>

    <div class="row justify-content-center contact-form-section p-4 rounded mb-5">
      <div class="col-md-8">
        <form
          action="https://formspree.io/f/xrbakdrw"
          method="POST"
          class="shadow p-4 rounded bg-light"
        >
          <!-- Name -->
          <div class="input-group mb-3">
            <span class="input-group-text bg-primary text-white">
              <i class="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <!-- Email -->
          <div class="input-group mb-3">
            <span class="input-group-text bg-primary text-white">
              <i class="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Your Email"
              required
            />
          </div>

          <!-- Message -->
          <div class="input-group mb-3">
            <span class="input-group-text bg-primary text-white">
              <i class="bi bi-chat-dots-fill"></i>
            </span>
            <textarea
              name="message"
              class="form-control"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="contact-info-section text-center mt-5 p-5 rounded">
      <h4 class="fw-bold mb-4">Get in Touch</h4>
      <div class="row g-4">
        <!-- Address -->
        <div class="col-md-4">
          <div class="card shadow-sm h-100 contact-card">
            <div class="card-body">
              <i class="bi bi-geo-alt-fill text-danger fs-1 mb-3"></i>
              <h5 class="card-title">Our Location</h5>
              <p class="card-text">Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <!-- Email -->
        <div class="col-md-4">
          <div class="card shadow-sm h-100 contact-card">
            <div class="card-body">
              <i class="bi bi-envelope-fill text-primary fs-1 mb-3"></i>
              <h5 class="card-title">Email Us</h5>
              <p class="card-text">support@example.com</p>
            </div>
          </div>
        </div>
        <!-- Phone -->
        <div class="col-md-4">
          <div class="card shadow-sm h-100 contact-card">
            <div class="card-body">
              <i class="bi bi-telephone-fill text-success fs-1 mb-3"></i>
              <h5 class="card-title">Call Us</h5>
              <p class="card-text">+20 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Google Map -->
    <div class="map-section map-container mt-5 p-3 rounded">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.156646018091!2d31.235711115113706!3d30.04441938188083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c2f35b9e8d%3A0x64b9f40e56d3e7d7!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1696000000000!5m2!1sen!2seg"
        width="100%"
        height="400"
        style="border:0; border-radius: 15px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 700;
}

.map-container {
  max-width: 900px;
  margin: 0 auto;
}

.contact-card {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Section Backgrounds */
.contact-form-section {
  background-color: #f8f9fa; /* رمادي فاتح */
}
.contact-info-section {
  background-color: #e8f5e9; /* أخضر فاتح */
}
.map-section {
  background-color: #e3f2fd; /* أزرق فاتح */
}
</style>
