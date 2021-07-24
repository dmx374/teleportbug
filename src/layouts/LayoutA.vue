<template>
  <div class="layout h-screen flex flex overflow-auto bg-gray-200">
    <div class="bg-gray-800 text-white p-2 flex-shrink-0 flex flex-col w-64 space-y-3">
      <router-link to="/" class="text-teal-500 border border-gray-700 p-3 hover:bg-gray-700">
        Index
      </router-link>

      <router-link to="/about" class="text-teal-500 border border-gray-700 p-3 hover:bg-gray-700">
        About
      </router-link>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="bg-gray-400 text-gray-700 p-2">
        Using Layout A
      </div>
      <div class="border border-gray-400 h-full p-6">
        <!-- removing suspense fixes the problem -->
        <Suspense>
          <template #default>
            <slot/>
          </template>
          <template #fallback>
            WAIT
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

