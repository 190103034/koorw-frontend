<template>
    <Header title="Сообщения"></Header>
    <Content>
        <Chat v-for="(chat, index) in chats" :key="index" :chat="chat"></Chat>
    </Content>
</template>

<script setup lang="ts">
    const runTimeConfig = useRuntimeConfig()

    const { data: chats } = await useFetch(`${runTimeConfig.public.baseApi}/api/chats`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })
</script>