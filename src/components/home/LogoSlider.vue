<template>
  <div class="logo-section">
    <div class="logo-viewport">
      <div class="logo-track">
        <a
          v-for="logo in doubledLogos"
          :key="logo.name + Math.random()"
          :href="logo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="logo-item"
        >
          <img
            :src="logo.logo"
            :alt="logo.name"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  {
    name: 'PYREG',
    url: 'https://pyreg.com/',
    logo: 'https://pyreg.com/wp-content/uploads/2025/12/210929_Pyreg_Logo_Net_Zero_CMYK.png'
  },
  {
    name: 'Invest BW',
    url: 'https://invest-bw.de/',
    logo: 'https://invest-bw.de/wp-content/uploads/2025/05/Logo-invest-bw-2.png'
  },
  {
    name: 'Fusinite',
    url: 'https://fusinite.com/',
    logo: 'https://fusinite.com/cdn/shop/files/Fusinite_logo_1.png'
  },
  {
    name: 'bhyo',
    url: 'https://bhyo.de',
    logo: 'https://bhyo.de/wp-content/uploads/2023/09/logo-bhyo-green-gradient-grey-01.svg'
  },
  {
    name: 'EffCheck',
    url: 'https://effcheck.rlp.de/ueber-den-effcheck',
    logo: 'https://effcheck.rlp.de/fileadmin/_logos/logo_effcheck_180.png'
  },
  {
    name: 'ARTi',
    url: 'https://www.arti.com/',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.TvnL30n8tPvJX2ksKzd8ewHaD-%3Fpid%3DApi&f=1&ipt=8cd2b188f501bd31d2bd4c8239af8ab7236523384e625c88c6e3c2bee81454d0&ipo=images'
  }
]

const doubledLogos = [...logos, ...logos]
</script>

<style scoped>
/* 🌕 LIGHT SECTION WRAPPER */
.logo-section {
  width: 100%;
  /* neo-brutalist strip: logos stay on white so partner marks remain legible */
  background: #FBF6EC;
  border: 3px solid var(--nb-ink);
  box-shadow: 6px 6px 0 var(--nb-ink);
  border-radius: 0;
  padding: 36px 0;
  margin: 24px 0;
}

/* viewport */
.logo-viewport {
  width: 100%;
  overflow: hidden;
}

/* track */
.logo-track {
  display: flex;
  align-items: center;
  gap: 70px;
  width: max-content;
  animation: scroll 28s linear infinite;
}

/* pause on hover */
.logo-viewport:hover .logo-track {
  animation-play-state: paused;
}

/* logo container */
.logo-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border: 3px solid transparent;
  transition: all 0.15s ease;
}

/* hover card effect */
.logo-item:hover {
  background: #DEC593;
  border-color: #1A1A1A;
  box-shadow: 4px 4px 0 #1A1A1A;
  transform: translate(-2px, -2px);
}

/* logos */
.logo-item img {
  max-height: 55px;
  max-width: 160px;
  object-fit: contain;

  opacity: 0.9;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

/* hover logo highlight */
.logo-item img:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: scale(1.06);
}

/* animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>