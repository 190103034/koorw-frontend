<template>
    <Block class="chat" @click="open">
        <template #picture>{{ picture }}</template>
        <template #title>{{ props.chat.name }}</template>
        <template #subheader>{{ props.chat.last_message?.user.name }}</template>
        <template #caption>{{ props.chat.last_message?.message }}</template>
    </Block>
</template>

<style lang="scss" scoped>
    .chat {
        margin-bottom: 10px;
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        chat: {
            type: Object as () => Chat,
            required: true
        }
    })

    const picture = computed(() => {
        return `${props.chat.name.charAt(0)}`
    })

    const open = () => {
        navigateTo(`/chats/${props.chat.id}`)
    }
</script>