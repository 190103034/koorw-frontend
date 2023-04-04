<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    .button {
        border-radius: $border-radius-regular;
        padding: 10px 15px;
        background-color: $blue-main;
        color: #fff;
        font-weight: $font-weight-medium;
        width: 100%;
    }
</style>