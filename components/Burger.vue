<template>
  <header
    :class="['z-[900] header fixed top-insetMain md:top-14 right-insetMain flex justify-center items-center rounded-full w-16 h-16 sm:w-20 sm:h-20 transition-all bounce-transition', isScrolled || isActive ? 'flex scale-1' : 'flex sm:scale-0 sm:invisible', isActive ? 'active bg-black' : '']">
    <div @mousemove="(e) => moveMagnet(e, 1)" @mouseout="(e) => resetMagnet(e)" @click="isActive = !isActive"
      :class="['z-10 w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center cursor-pointer rounded-full active border', isActive ? 'bg-black border-black' : 'bg-white']">
      <div @mousemove="(e) => moveMagnet(e, 0.4)" @mouseout="(e) => resetMagnet(e)"
        class="w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center rounded-full">
        <div
          :class="['w-6 h-[12px] sm:w-8 sm:h-[13px] flex flex-col items-center justify-between burger-menu-container', isActive && 'active-burger']">
          <div
            :class="['transition-all duration-300 rounded-full w-full h-[2px] burger-menu-item', isActive ? 'bg-white' : 'bg-black']">
          </div>
          <div
            :class="['transition-all duration-300 rounded-full w-full h-[2px] burger-menu-item', isActive ? 'bg-white' : 'bg-black']">
          </div>
        </div>
      </div>
    </div>
    <nav
      :class="['menu flex flex-col justify-center items-center gap-10 pb-16 transition-all duration-300 fixed top-0 right-0 w-screen h-screen delay-150', isActive ? 'opacity-1' : 'opacity-0 invisible']">
      <Language class="!absolute top-insetMain py-5 md:py-0 md:top-20 left-insetMain" />
      <ul>
        <li>
          <NuxtLink @click="isActive = !isActive" to="/"
            :class="['link !text-4xl font-loos-bold link_white']">{{ language == "FRA" ? 'Home' : 'Home' }}
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink @click="isActive = !isActive" to="/work"
            :class="['link !text-4xl font-loos-bold link_white']">{{ language == "FRA" ? 'Projets' : 'Projects' }}
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink @click="isActive = !isActive" to="/about"
            :class="['link !text-4xl font-loos-bold link_white']">{{ language == "FRA" ? 'À propos' : 'About' }}
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <NuxtLink @click="isActive = !isActive" to="/contact"
            :class="['link !text-4xl font-loos-bold link_white']">{{ language == "FRA" ? 'Contact' : 'Contact' }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex absolute bottom-24 justify-start items-center gap-4">
        <li>
          <a href="https://www.instagram.com/erwand.design/" target="_blank" class="hover:opacity-70">
            <svg class='h-10 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z">
              </path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/erwan-donisa/" target="_blank" class="hover:opacity-70">
            <svg class='h-10 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z">
              </path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/erwandonisa" target="_blank" class="hover:opacity-70">
            <svg class='h-10 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M7.5 11C8.60457 11 9.5 10.1046 9.5 9C9.5 7.89543 8.60457 7 7.5 7H3V11H7.5ZM8.5 13H3V17H8.5C9.60457 17 10.5 16.1046 10.5 15C10.5 13.8954 9.60457 13 8.5 13ZM10.5632 11.5725C11.7239 12.2726 12.5 13.5457 12.5 15C12.5 17.2091 10.7091 19 8.5 19H1V5H7.5C9.70914 5 11.5 6.79086 11.5 9C11.5 9.97964 11.1478 10.877 10.5632 11.5725ZM15.5 6H21V7.5H15.5V6ZM23 14.5H15.5V14.75C15.5 16.2688 16.7312 17.5 18.25 17.5C19.3187 17.5 20.245 16.8904 20.7001 16H22.8338C22.2851 18.0169 20.4407 19.5 18.25 19.5C15.6266 19.5 13.5 17.3734 13.5 14.75V13.25C13.5 10.6266 15.6266 8.5 18.25 8.5C20.8734 8.5 23 10.6266 23 13.25V14.5ZM20.8965 12.5C20.57 11.3457 19.5088 10.5 18.25 10.5C16.9912 10.5 15.93 11.3457 15.6035 12.5H20.8965Z">
              </path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const language = useLanguage()
</script>
<script>
import { gsap } from 'gsap';

export default {
  name: 'Header',
  props: {
    isDark: Boolean
  },
  data() {
    return {
      isBackground: false,
      prevScrollPos: 0,
      scrollDirection: false,
      isActive: false,
      isScrolled: false
    };
  },
  methods: {
    resetMagnet(event) {
      gsap.to(event.currentTarget, 1, { x: 0, y: 0 })
    },
    moveMagnet(event, speed) {
      if (!useTouchDevive().value) {
        var bounding = event.currentTarget.getBoundingClientRect()
        gsap.to(event.currentTarget, 1, {
          x: (((event.clientX - bounding.left) / event.currentTarget.offsetWidth) - 0.5) * (30 * speed),
          y: (((event.clientY - bounding.top) / event.currentTarget.offsetHeight) - 0.5) * (30 * speed),
        })
      }
    },
    checkScrolled() {
      const scrolledDistance = window.scrollY || window.pageYOffset;
      this.isScrolled = scrolledDistance >= window.innerHeight * 0.4;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrolled)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScrolled)
  },
};
</script>

<style scoped lang='scss'>
@import '@/scss/main.scss';

.menu .menu.scroll-direction {
  &::after {
    transform: translateY(-300px);
  }
}

.header {
  &::after {
    z-index: -3;
    content: '';
    position: fixed;
    background: black;
    transition: all 0.5s cubic-bezier(.66, 0, .35, 1);
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    transform: scale(0);
  }
}

.header.active {
  &::after {
    transform: scale(3);
  }
}

.active-burger.burger-menu-container {
  .burger-menu-item:nth-child(1) {
    transform: translate(0, 6px) rotate(45deg);
  }

  .burger-menu-item:nth-child(2) {
    transform: translate(0, -6px) rotate(-45deg);
  }
}</style>