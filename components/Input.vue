<template>
    <div class="input">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .input {
        border: 1px solid $grey-light;
        border-radius: $border-radius-regular;
        padding: 10px 15px;
        background-color: #fff;
        &:invalid {
            border-color: red;
        }
    }
</style>