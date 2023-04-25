<template>
    <header class="header">
        <div class="container">
            <div class="header__flex">
                <div v-show="isBack || isSearch">
                    <div v-show="isBack" class="header__back" @click="back">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                        <span>Назад</span>
                    </div>
                </div>
                <div class="header__title">
                    <NuxtLink to="/">
                        <img v-show="isLogo" class="logo" src="/assets/logo.svg" />
                    </NuxtLink>
                    <h1>{{ title }}</h1>
                </div>
                <div v-show="isBack || isSearch">
                    <NuxtLink to="/search" v-show="isSearch" class="header__search">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon_medium" />
                    </NuxtLink>
                </div>
            </div>    
        </div>
        <slot></slot>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        top: 0;
        z-index: 99;
        width: 100%;
        position: sticky;
        background-color: #fff;
        font-weight: $font-weight-semibold;
        .container {
            padding: 20px;
        }
        &__flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            > div {
                flex: 1 1 0;
                width: 0;
                &:last-of-type {
                    text-align: right;
                }
            }
        }
        &__back {
            span:before {
                content: '';
                margin-left: 5px;
            }
        }
        &__title {
            text-align: center;
            h1 {
                font-size: $font-size-large;
            }
        }
    }

    .logo {
        width: 90px;
    }
</style>

<script setup lang="ts">
    const router = useRouter()

    const props = defineProps({
        isBack: Boolean,
        isSearch: Boolean,
        isLogo: Boolean,
        title: {
            type: String,
            default: ''
        }
    })

    const back = () => router.back()
</script>