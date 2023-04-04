<template>
    <div class="wrapper">
        <div class="logo">
            <img src="/assets/logo.svg" />
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        position: relative;
        top: 80px;
    }
    .logo {
        margin-bottom: 70px;
        text-align: center;
        img {
            width: 150px;
        }
    }
</style>