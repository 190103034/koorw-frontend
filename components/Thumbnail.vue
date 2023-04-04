<template>
    <div class="thumbnail" :class="{thumbnail_large: isLarge}">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .thumbnail {
        width: 50px;
        height: 50px;
        display: grid;
        overflow: hidden;
        margin-right: 10px;
        place-items: center;
        color: $yellow-main;
        background-color: $blue-main;
        font-weight: $font-weight-semibold;
        border-radius: $border-radius-regular; 
        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
        &_large {
            width: 75px;
            height: 75px;
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        isLarge: Boolean
    })
</script>