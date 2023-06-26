<template>
    <Block class="post">
        <template #picture>
            <img v-if="user.picture" class="post__profile-picture" :src="`https://auz3nn7dmfg6zy33bilh.koorw.com/images/${user.picture}`" />
            <div v-if="!user.picture" class="post__profile-picture">{{ initials }}</div>
        </template>
        <template #title>{{ user.name }}</template>
        <template #caption>{{ user.block.name }}</template>
        <template #body>
            <slot></slot>
            <button class="post__select" @click="emit('category')">
                <font-awesome-icon icon="fa-solid fa-table-cells-large" class="icon_small" />
                <span>{{ categoryTitle }}</span>
            </button>
            <button class="post__select" @click="emit('visibility')">
                <font-awesome-icon icon="fa-solid fa-eye" class="icon_small" />
                <span>{{ visibilityTitle }}</span>
            </button>
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
        user: {
            type: Object as () => User,
            required: true
        },
        categoryTitle: {
            type: String,
            required: true
        },
        visibilityTitle: {
            type: String,
            required: true
        }
    })

    const initials = computed(() => {
        return `${props.user.name.charAt(0)}`
    })

    const emit = defineEmits(['category', 'visibility'])
</script>