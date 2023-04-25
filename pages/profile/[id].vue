<template>
    <header class="header">
        <div class="container">
            <div class="header__flex">
                <Thumbnail :isLarge="true">
                    <img v-if="profile.picture" class="header__picture" :src="`http://localhost/images/${profile.picture}`" />
                    <div v-if="!profile.picture" class="header__picture">{{ initials }}</div>
                </Thumbnail>
                <div class="header__info">
                    <div class="header__flex header__flex_sb">
                        <div class="header__flex">
                            <div class="header__title"><strong>{{ profile.name }}</strong> • {{ profile.username }}</div>
                        </div>
                    </div>
                    <div class="header__caption">{{ profile.block.house_name }}, {{ profile.block.name.toLowerCase() }}</div>
                </div>
            </div>
        </div>
    </header>
    <Content>
        <div v-if="!isEstate" class="posts section">
            <Post v-for="(post, index) in profile.posts" :key="post.hash_id" :post="post"></Post>
        </div>
    </Content>
</template>

<script setup>
    const {isAuth} = authUtils()
    const runTimeConfig = useRuntimeConfig()
    const route = useRoute()

    if (!isAuth.value) {
        navigateTo('/login')
    }

    const { data: profile } = await useFetch(`${runTimeConfig.public.baseApi}/api/user/${route.params.id}`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }, 
    })

    const initials = computed(() => {
        return `${profile.value.name.charAt(0)}`
    })

</script>