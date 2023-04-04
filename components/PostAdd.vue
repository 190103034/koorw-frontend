<template>
    <Block class="post">
        <template #picture>
            <img class="post__profile-picture" :src="user?.picture" />
        </template>
        <template #title>{{ user?.name }}</template>
        <template #caption>{{ user?.address }}</template>
        <template #body>
            <textarea class="post__input" name="" id="" placeholder="Напишите чем вы хотите поделиться.."></textarea>
            <div class="post__select">
                <font-awesome-icon icon="fa-solid fa-table-cells-large" class="icon_small" />
                <button>Категория</button>
            </div>
            <div class="post__select">
                <font-awesome-icon icon="fa-solid fa-eye" class="icon_small" />
                <button>Кто увидит пост</button>
            </div>
        </template>
    </Block>
</template>

<style lang="scss">
    .post {
        &__input {
            width: 100%;
            height: 100px;
            margin: 10px 0;
            border: none;
            outline: none;
        }
        &__select {
            svg {
                margin-right: 5px;
            }
            &:not(:last-of-type) {
                margin-bottom: 10px;
            }
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        user: Object as () => User
    })

    console.log(props.user)
</script>