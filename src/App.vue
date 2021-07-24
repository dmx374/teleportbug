<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <component :is="Component"/>
      </transition>
    </router-view>
  </component>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  setup () {
    const route = useRoute()

    return {
      layout: computed(()=>route.meta.layout || 'div')
    }
  }
}
</script>