<template>
    <div class="navigation">
        <div class="navigation__wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .navigation {
        overflow-x: auto;
        white-space: nowrap;
        border-bottom: 1px solid $grey-stroke;
        &__wrapper {
            padding: 0 20px 10px;
            max-width: 425px;
            margin: 0 auto;
        }
        &__button {
            margin-right: 20px;
            font-weight: $font-weight-medium;
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>