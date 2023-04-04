<template>
    <Header title="Сообщения"></Header>
    <Content>
        <Chat v-for="(chat, index) in chats" :key="index" :chat="chat"></Chat>
    </Content>
</template>

<script setup lang="ts">
    const chats = ref([
        {
            newMessages: 5,
            chatName: "Блок 2",
            personName: "Әсел Сүлеймен",
            message: "Соседи, предлагаю нам всем.."
        },
        {
            newMessages: 0,
            chatName: "ЖК Türkistan",
            personName: "Серік Бекбол",
            message: "Тоже так считаю"
        },
    ])
</script>