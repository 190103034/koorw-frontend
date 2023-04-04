<template>
    <Header title="Написать пост"></Header>
    <Content>
        <PostAdd :user="user"></PostAdd>
        <button class="btn_publish">Опубликовать</button>
    </Content>
</template>

<style lang="scss" scoped>
    .btn_publish {
        padding: 7px 20px;
        background-color: $blue-main;
        border-radius: $border-radius-medium;
        color: #fff;
        margin-top: 10px;
        position: absolute;
        right: 20px;
    }
</style>

<script setup lang="ts">
    const user = ref({
        picture: '/abay.jpg',
        name: 'Абай Өмірзақ',
        address: '2 блок',
    })
</script>