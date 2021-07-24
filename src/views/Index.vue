<template>
  <div class="page text-gray-700">
    <div>Index.vue</div>

    <div class="mt-6">
      <router-link to="/about" class="text-teal-500 underline">
        About Page
      </router-link>
    </div>

    <teleport to="#modals">
      <div>MODAL</div>
    </teleport>
  </div>
</template>
