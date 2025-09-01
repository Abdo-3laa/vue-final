<template>
  <div>
    <!-- OUR STORY HERO SECTION -->
    <section class="hero-section d-flex align-items-center text-center text-white">
      <div class="container-fluid hero-overlay py-5">
        <h6 class="fw-bold text-uppercase fade-down">OUR STORY</h6>
        <h2 class="brand-title fade-up">About Brand Store</h2>
        <p class="lead mx-auto fade-up-delay">
          Discover the passion, craftsmanship, and vision behind Brand Store's timeless fashion collections.
        </p>
      </div>
    </section>

    <!-- Our Story Content -->
    <div class="section section-story">
      <div class="container py-5">
        <div class="card shadow-lg border-0 p-4 animate__animated animate__fadeInUp soft-card">
          <h2 class="fw-bold mb-3 text-center">Our Story</h2>
          <p>
            Brand Store was born from a bold vision: to redefine premium fashion by making it not only accessible, but also inspiring and unforgettable. What started as a small circle of dreamers with a passion for timeless style has grown into a destination where elegance meets modern sophistication.
          </p>
          <p>
            From the very beginning, our mission has been clear — to craft and curate collections that embody quality, individuality, and artistry. Every detail, every stitch, and every design reflects our commitment to excellence and our belief that fashion is more than clothing; it’s a statement of identity.
          </p>
          <p>
            Today, Brand Store stands as a symbol of refined taste and contemporary luxury — offering not just fashion pieces, but a lifestyle that celebrates confidence, creativity, and the timeless pursuit of elegance.
          </p>
        </div>
      </div>
    </div>

    <!-- Our Team -->
    <div class="section section-team">
      <div class="container py-5">
        <h2 class="text-center fw-bold mb-4 section-title">Our Team</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(member, index) in team" :key="index">
            <div class="card team-card text-center p-4 shadow-lg h-100 fade-up soft-card">
              <i :class="member.icon" class="display-4 mb-3"></i>
              <h5 class="fw-bold">{{ member.title }}</h5>
              <p class="text-muted">{{ member.role }}</p>
              <p>{{ member.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Values -->
    <div class="section section-values">
      <div class="container py-5">
        <h2 class="text-center fw-bold mb-4 section-title">Our Values</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(value, index) in values" :key="index">
            <div class="card value-card shadow-lg h-100 p-4 text-center fade-up soft-card">
              <i :class="value.icon" class="display-4 mb-3"></i>
              <h5 class="fw-bold">{{ value.title }}</h5>
              <p>{{ value.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Craftsmanship & Global Inspiration -->
    <div class="section section-extras">
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-6" v-for="(extra, index) in extras" :key="index">
            <div class="card shadow-lg p-4 text-center fade-up soft-card">
              <i :class="extra.icon" class="display-4 mb-3"></i>
              <h5 class="fw-bold">{{ extra.title }}</h5>
              <p>{{ extra.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const team = [
  {
    icon: "bi bi-brush text-primary",
    title: "Creative Director",
    role: "Fashion & Design",
    desc: "Leads our creative vision and ensures every piece reflects Brand Store’s timeless elegance and style."
  },
  {
    icon: "bi bi-megaphone text-success",
    title: "Brand Manager",
    role: "Brand Strategy & Marketing",
    desc: "Develops Brand Store's identity and ensures consistent messaging to build lasting customer relationships."
  },
  {
    icon: "bi bi-star text-warning",
    title: "Style Curator",
    role: "Fashion & Trends",
    desc: "Curates collections and stays ahead of fashion trends to bring the most coveted pieces each season."
  }
]

const values = [
  {
    icon: "bi bi-award text-danger",
    title: "Premium Quality",
    desc: "We source only the finest materials and work with skilled artisans to ensure exceptional quality."
  },
  {
    icon: "bi bi-heart text-danger",
    title: "Customer Love",
    desc: "Every customer is part of the Brand Store family. We deliver personalized service & memorable experiences."
  },
  {
    icon: "bi bi-clock-history text-info",
    title: "Timeless Style",
    desc: "We create pieces that transcend trends, offering elegance that never goes out of style."
  }
]

const extras = [
  {
    icon: "bi bi-scissors text-primary",
    title: "Craftsmanship Excellence",
    desc: "Every piece is meticulously crafted with attention to detail, ensuring only the finest quality fashion."
  },
  {
    icon: "bi bi-globe text-success",
    title: "Global Inspiration",
    desc: "Our designs are inspired by fashion capitals worldwide, blending contemporary style with global flair."
  }
]
</script>

<style scoped>
/* HERO */
.hero-section {
  height: 100vh;
  background: url('https://images.pexels.com/photos/2309235/pexels-photo-2309235.jpeg') no-repeat center/cover;
  position: relative;
}
.hero-overlay {
  background: rgba(0, 0, 0, 0.55);
  border-radius: 12px;
}
.hero-section h6 {
  font-size: 22px;
  letter-spacing: 3px;
  opacity: 0.9;
}
.brand-title {
  font-size: 56px;
  font-family: 'Georgia', serif;
  font-weight: 700;
}

/* SECTION BACKGROUNDS */
.section-story {
  background: #fdfdfd;
}
.section-team {
  background: #f7f9fc; /* أزرق فاتح هادي */
}
.section-values {
  background: #fff8f0; /* بيج دافي */
}
.section-extras {
  background: #f0f9f4; /* أخضر فاتح */
}

/* SECTION TITLES */
.section-title {
  font-size: 38px;
  color: #444;
  position: relative;
}
.section-title::after {
  content: '';
  width: 70px;
  height: 3px;
  background: #0d6efd;
  display: block;
  margin: 12px auto 0;
  border-radius: 2px;
}

/* CARDS */
.card {
  border-radius: 16px;
  transition: all 0.35s ease-in-out;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}
.soft-card {
  background: #ffffff;
  border: none;
}

/* ANIMATIONS */
.fade-up {
  animation: fadeUp 1.2s ease;
}
.fade-up-delay {
  animation: fadeUp 1.5s ease;
}
.fade-down {
  animation: fadeDown 1.2s ease;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
