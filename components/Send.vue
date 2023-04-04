<template>
    <Input class="send">
        <input class="send__text" :placeholder="placeholder" />
        <font-awesome-icon icon="fa-solid fa-paper-plane" />
    </Input>
</template>

<style lang="scss" scoped>
    .send {
        bottom: 67px;
        width: calc(100% - 40px);
        display: flex;
        justify-content: space-between;
        position: fixed;
        &__text {
            width: 90%;
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        placeholder: String
    })
</script>