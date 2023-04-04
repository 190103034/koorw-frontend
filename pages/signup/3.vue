<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>Введите ваш адрес</h1>
                <Input>
                    <input type="text" placeholder="ваше имя">
                </Input>
                <Input>
                    <input type="text" placeholder="придумайте пароль">
                </Input>
                <Input class="input_last">
                    <input type="text" placeholder="повторите пароль">
                </Input>
                <div class="flex-wrapper">
                    <Button>Выбрать фото</Button>
                    <Button @click="signup()">Пропустить</Button>
                </div>
            </div>
        </Welcome>
    </Content>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'empty'
    })

    const signup = () => {
        navigateTo('/home')
    }
</script>