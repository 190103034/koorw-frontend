<template>
    <div class="search">
        <form @submit.prevent="emit('search', query)">
            <Input class="search__input">
                <input class="search__text" placeholder="Найдите пост..." v-model="query" />
                <button type="submit" class="search__button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            </Input>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .search {
        position: sticky;
        background-color: #fff;
        top: 58px;
        padding-bottom: 10px;
        &_input {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        &__text {
            width: 90%;
            padding: 0;
            border: none;
            outline: none;
        }
    }
</style>

<script setup lang="ts">
    const emit = defineEmits(['search']);

    const query = ref('');
</script>