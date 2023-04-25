<template>
    <main class="content" :class="{content_full: isFull}">
        <div class="container" :class="{container_full: isFull}">
            <slot></slot>
        </div>
    </main>
</template>

<script setup lang="ts">
    const props = defineProps({
        isFull: Boolean
    })
</script>