<template>
    <Input class="send">
        <input class="send__text" :placeholder="placeholder" v-model="text" required />
        <button type="submit" @click="emit('send', text)"><font-awesome-icon icon="fa-solid fa-paper-plane" /></button>
    </Input>
</template>

<style lang="scss" scoped>
    .send {
        bottom: 67px;
        position: fixed;
        width: calc(100% - 40px);
        max-width: 385px;
        display: flex;
        justify-content: space-between;
        &__text {
            width: 90%;
            padding: 0;
            border: none;
            outline: none;
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        placeholder: String
    })

    const emit = defineEmits(['send']);

    const text = ref('');
</script>