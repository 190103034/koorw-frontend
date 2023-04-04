<template>
    <Block class="post" @click="open">
        <template #picture>
            <img class="post__picture" :src="post?.user.picture" />
        </template>
        <template #title>{{ post?.user.name }}</template>
        <template #subtitle> • {{ post?.user.username }}</template>
        <template #caption>{{ post?.user.block.name }}</template>
        <template #body>
            <div class="post__body" v-html="formatBody(post?.body as string)"></div>
            <div class="post__reactions">
                <div class="post__reactions-item">
                    <font-awesome-icon icon="fa-regular fa-heart" />
                    <span>{{ post?.like_count }}</span>
                </div>
                <div class="post__reactions-item">
                    <font-awesome-icon icon="fa-regular fa-message" />
                    <span>{{ post?.comment_count }}</span>
                </div>
            </div>
        </template>
    </Block>
</template>

<style lang="scss">
    .post {
        &-picture {
            object-fit: cover;
            object-position: center;
        }
        &__body {
            margin: 10px 0;
            line-height: 1.1rem;
        }
        &__hashtag {
            font-weight: $font-weight-medium;
            color: $blue-main;
        }
        &__reactions {
            display: flex;
            &-item {
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
        post: Object as () => Post
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
                    `<span class="post__hashtag">${match}</span>`
                );
            });
        }
        return body
    }
</script>