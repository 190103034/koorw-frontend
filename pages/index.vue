<template></template>
<script setup lang="ts">
    const {isAuth} = authUtils()

    if (!isAuth.value) {
        navigateTo('/login')
    }
    navigateTo('/home')
</script>