<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
    const { setAuth } = authUtils()
    setAuth()
</script>