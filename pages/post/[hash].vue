<template>
    <Header :isBack="true" title="Пост"></Header>
    <Content>
        <Post :post="post"></Post>
        <h2 v-if="post.child_posts.length > 0">Комментарии</h2>
        <Post v-for="comment in post.child_posts" :key="comment.hash_id" :post="comment"></Post>
        <Send placeholder="Написать свой комментарий.."></Send>
    </Content>
</template>

<style lang="scss" scoped>
    h2 {
        margin-bottom: 10px;
    }
</style>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const route = useRoute()

    const { data: post } = await useFetch(`${runTimeConfig.public.baseApi}/api/post/${route.params.hash}`)

    const comments = ref([
        {
            user: {
                picture: '/asem.jpg',
                name: 'Әсем Қанат',
                address: '5 блок',
            },
            body: 'Поддерживаю!',
            hashtags: [],
            likes: 5,
            comments: 3
        },
        {
            user: {
                picture: '/mariya.jpg',
                name: 'Мария Жүсіпбек',
                address: '1 блок',
            },
            body: 'Считаю это лишним.',
            hashtags: [],
            likes: 1,
            comments: 0
        }
    ])
</script>