<template>
    <Header :isBack="true" title="Пост"></Header>
    <Content>
        <Post :post="post"></Post>
        <h2 v-if="post.child_posts.length > 0">Комментарии</h2>
        <Post v-for="comment in post.child_posts" :key="comment.hash_id" :post="comment"></Post>
        <Send placeholder="Написать свой комментарий.." @send="send"></Send>
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

    const { data: post, refresh } = await useFetch(`${runTimeConfig.public.baseApi}/api/post/${route.params.hash}`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const send = async (text) => {
        await useFetch(`${runTimeConfig.public.baseApi}/api/post`, {
            server: false,
            onRequest({ options }) {
                options.headers = {
                    'Authorization': `Bearer ${useCookie('token').value}`
                }
                options.method = 'POST'
                options.body = {
                    "parent_id": post.value.id,
                    "category_id": post.value.category_id,
                    "visibility_id": post.value.visibility_id,
                    "body": text
                }
            }, 
            onResponse({ response }) {
                if (response.status == 201) {
                    text = ''
                    refresh()
                }
            }
        })
    }
</script>