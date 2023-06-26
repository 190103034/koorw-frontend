<template>
    <Block class="post" @click="open">
        <template #picture>
            <NuxtLink @click.stop="" :to="`/profile/${post.user.id}`" >
                <img v-if="post.user.picture" class="post__picture" :src="`https://auz3nn7dmfg6zy33bilh.koorw.com/images/${post.user.picture}`" />
                <div v-if="!post.user.picture" class="post__profile-picture">{{ initials }}</div>
            </NuxtLink>
        </template>
        <template #title>{{ post.user.name }}</template>
        <template #subtitle> • {{ post.user.username }}</template>
        <template #caption>{{ post.user.block.name }}</template>
        <template #body>
            <div class="post__body" v-html="formatBody(post.body)"></div>
            <div class="post__reactions">
                <div class="post__reactions-item" @click.stop="like()">
                    <font-awesome-icon :icon="heart" :class="{'post__reactions-item_active': isLiked == 1}" />
                    <span>{{ likes }}</span>
                </div>
                <div class="post__reactions-item">
                    <font-awesome-icon icon="fa-regular fa-message" />
                    <span>{{ post.comment_count }}</span>
                </div>
            </div>
        </template>
    </Block>
</template>

<style lang="scss">
    .post {
        a {
            width: 100%;
            height: 100%;
        }
        &-picture {
            object-fit: cover;
            object-position: center;
        }
        &__body {
            margin: 10px 0;
            line-height: 1.1rem;
            a {
                text-decoration: none;
            }
        }
        &__hashtag {
            font-weight: $font-weight-medium;
            color: $blue-main;
        }
        &__reactions {
            display: flex;
            &-item {
                &_active {
                    color: $yellow-main;
                }
                svg {
                    margin-right: 5px;
                }
                &:first-of-type {
                    margin-right: 20px;
                }
            }
        }
        &:not(:last-of-type) {
            margin-bottom: 10px;
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        post: {
            type: Object as () => Post,
            required: true
        }
    })

    const runTimeConfig = useRuntimeConfig()

    const { data: isLiked, refresh: refreshLike } = await useFetch(`${runTimeConfig.public.baseApi}/api/like/${props.post.id}`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const initials = computed(() => {
        return `${props.post.user.name.charAt(0)}`
    })

    const likes = ref(props.post.like_count)

    const heart = computed(() => {
        return isLiked.value == 1 ? ['fas', 'heart'] : ['far', 'fa-heart']
    })

    const open = () => {
        navigateTo(`/post/${props.post?.hash_id}`)
    }

    const formatBody = (body: string) => {
        const regex = /#[^\s#.]+/ug
        const matches = body.match(regex)

        if (matches) {
            matches.forEach((match) => {
                body = body.replace(
                    match,
                    `<a href="/search?query=${match.substring(1)}" class="post__hashtag" onClick="event.stopPropagation();">${match}</a>`
                );
            });
        }
        return body
    }

    const like = async () => {
        if (isLiked.value == 1) {
            await useFetch(`${runTimeConfig.public.baseApi}/api/like/${props.post.id}`, {
                server: false,
                onRequest({ options }) {
                    options.headers = {
                        'Authorization': `Bearer ${useCookie('token').value}`
                    }
                    options.method = 'DELETE'
                }, 
                onResponse({ response }) {
                    if (response.status == 200) {
                        likes.value--
                        refreshLike()
                    }
                }
            })
        } else {
            await useFetch(`${runTimeConfig.public.baseApi}/api/like`, {
                server: false,
                onRequest({ options }) {
                    options.headers = {
                        'Authorization': `Bearer ${useCookie('token').value}`
                    }
                    options.method = 'POST'
                    options.body = {
                            "post_id": props.post.id
                    }
                }, 
                onResponse({ response }) {
                    if (response.status == 201) {
                        likes.value++
                        refreshLike()
                    }
                }
            })
        }
    }
</script>