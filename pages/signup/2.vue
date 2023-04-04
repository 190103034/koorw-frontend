<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>Регистрация</h1>
                <Input>
                    <input type="text" placeholder="имя пользователя">
                </Input>
                <Input>
                    <input type="text" placeholder="номер телефона">
                </Input>
                <Button @click="next()">Далее</Button>
            </div>
        </Welcome>
    </Content>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'empty'
    })

    const next = () => {
        navigateTo('/signup/3')
    }
</script>