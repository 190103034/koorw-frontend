<template>
    <button class="button" :type="type">
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .button {
        border-radius: $border-radius-regular;
        padding: 10px 15px;
        background-color: $blue-main;
        color: #fff;
        font-weight: $font-weight-medium;
        width: 100%;
    }
</style>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'button'
        }
    })
</script>