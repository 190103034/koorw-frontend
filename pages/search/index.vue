<template>
    <Header :isBack="true" title="Поиск"></Header>
    <Content>
        <Search @search="search"></Search>
        <div class="posts">
            <Post v-for="post in posts" :key="post.id" :post="post"></Post>
        </div>
    </Content>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const route = useRoute()
    const router = useRouter()

    const { data: posts, refresh } = await useFetch(() => `${runTimeConfig.public.baseApi}/api/search?q=${route.query.query}`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const search = (query) => {
        router.push({ query: query != '' ? {query: query} : null })
        refresh()
    }
</script>