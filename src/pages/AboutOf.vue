<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Acerca de Nosotros</h1>
        <p>Conoce más sobre nuestra misión, visión y el equipo detrás de este proyecto</p>
      </div>
    </section>

    <!-- Contenido Principal -->
    <main class="main-content">
      <div class="container">
        <!-- Misión y Visión -->
        <section class="mission-vision">
          <div class="card">
            <h2>🎯 Nuestra Misión</h2>
            <p>
              Proporcionar soluciones innovadoras y de alta calidad para personas y ministerios
              cristianos usando las tecnologias.
            </p>
          </div>

          <div class="card">
            <h2>👁️ Nuestra Visión</h2>
            <p>
              Ser reconocidos como líderes en desarrollo de software educativos y de uso general en
              la comunidad cristiana y ministerios cristianos.
            </p>
          </div>
        </section>

        <!-- Equipo -->
        <section class="team">
          <h2>👥 Nuestro Equipo</h2>
          <div class="team-grid">
            <div v-for="member in team" :key="member.name" class="team-member">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </section>

        <!-- Tecnologías -->
        <section class="technologies">
          <h2>🛠️ Tecnologías que Usamos</h2>
          <div class="tech-list">
            <span v-for="tech in technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </section>

        <section class="contact">
          <h2>📞 Contáctanos</h2>
          <div class="contact-content">
            <!-- Información de contacto -->
            <div class="contact-info">
              <h3>Estamos aquí para ayudarte</h3>
              <p>
                No dudes en ponerte en contacto con nosotros para cualquier consulta, propuesta o
                colaboración.
              </p>

              <div class="contact-details">
                <div class="contact-item">
                  <span class="icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>liyuangarcia@gmail.com</p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="icon">📱</span>
                  <div>
                    <strong>Teléfono</strong>
                    <p>+53 56249995</p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="icon">📍</span>
                  <div>
                    <strong>Ubicación</strong>
                    <p>Ciego de Avila, Cuba</p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="icon">🕒</span>
                  <div>
                    <strong>Horario</strong>
                    <p>Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Datos del equipo (puedes reemplazar con datos reales)
const team = ref([
  {
    name: 'Liyuan García Caballero',
    role: 'Desarrollador Frontend',
  },
  {
    name: 'Marisol Santana Martinez',
    role: 'Beta Tester',
  },
])

// Tecnologías utilizadas
const technologies = ref([
  'Vue.js',
  'Quasar Framework',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'Dexie',
  'Git',
])
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 10px 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Contenido Principal */
.main-content {
  padding: 60px 0;
}

/* Misión y Visión */
.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

/* Equipo */
.team {
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
}

/* Tecnologías */
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.tech-tag {
  background: #e9ecef;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>
