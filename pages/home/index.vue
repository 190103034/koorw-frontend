<template>
    <Header :isLogo="true" :isSearch="true">
        <Navigation class="categories">
            <button class="categories__button" @click="setCategory('')" :class="{categories__button_active: currentCategory == ''}">Всё</button>
            <button v-for="category in categories" :key="category.id" class="categories__button" @click="setCategory(category.keyword)" :class="{categories__button_active: currentCategory == category.keyword }">{{category.name}}</button>
        </Navigation>
    </Header>
    <Content>
        <div class="posts">
            <Post v-for="post in posts.data" :key="post.id" :post="post"></Post>
        </div>
    </Content>
</template>

<style lang="scss" scoped>
    .categories {
        &__button {
            margin-right: 20px;
            position: relative;
            font-weight: $font-weight-medium;
            &_active {
                &::after {
                    content: '';
                    height: 4px;
                    width: 100%;
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    border-top-left-radius: $border-radius-medium;
                    border-top-right-radius: $border-radius-medium;
                    background-color: $blue-main;
                }
            }
        }
    }
    .posts {
        margin-top: 20px;
    }
</style>

<script setup>
    const {isAuth, user} = authUtils()
    const runTimeConfig = useRuntimeConfig()
    const currentCategory = ref('')

    if (!isAuth.value) {
        navigateTo('/login')
    }

    const { data: categories } = await useFetch(`${runTimeConfig.public.baseApi}/api/category`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const { data: posts } = await useFetch(() => `${runTimeConfig.public.baseApi}/api/post${currentCategory.value == '' ? '' : '?category=' + currentCategory.value}`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const setCategory = (keyword) => {
        currentCategory.value = keyword
    }
</script>