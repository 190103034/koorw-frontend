<template>
    <Block class="chat" @click="open">
        <template #picture>{{ picture }}</template>
        <template #title>{{ props.chat?.chatName }}</template>
        <template #subheader>{{ props.chat?.personName }}</template>
        <template #caption>{{ props.chat?.message }}</template>
    </Block>
</template>

<style lang="scss" scoped>
    .chat {
        margin-bottom: 10px;
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        chat: Object as () => Chat
    })

    const picture = computed(() => {
        return (props.chat?.newMessages && props.chat?.newMessages > 0) ? `+${props.chat?.newMessages}` : ':)'
    })

    const open = () => {
        navigateTo('/chats/1')
    }
</script>