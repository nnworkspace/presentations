<template>
  <footer
    v-if="$slidev.nav.currentPage > 1"
    class="absolute bottom-0 right-0 p-2 text-xs text-gray-400 font-mono z-50"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
