<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>С возвращением!</h1>
                <form v-on:submit="login">
                    <Input>
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <input type="text" placeholder="имя пользователя" v-model="username" required>
                    </Input>
                    <Input>
                        <font-awesome-icon icon="fa-solid fa-lock" />
                        <input minlength="8" type="password" placeholder="пароль" v-model="password" required>
                    </Input>
                    <Button type="submit">Войти</Button>
                </form>
            </div>
        </Welcome>
        <div class="bottom">
            <h2>Ещё нет аккаунта?</h2>
            <Button @click="navigateTo('/signup')">Зарегистрироваться</Button>
        </div>
    </Content>
</template>

<style lang="scss" scoped>
    .bottom {
        position: absolute;
        bottom: 70px;
        text-align: center;
        width: calc(100% - 80px);
        h2 {
            margin-bottom: 15px;
        }
    }
</style>

<script setup lang="ts">
    import { useAuthStore } from '~~/stores/auth';

    definePageMeta({
        layout: 'empty'
    })

    const authStore = useAuthStore()
    const runTimeConfig = useRuntimeConfig()
    const username = ref("")
    const password = ref("")
    const {isAuth} = authUtils()

    if (isAuth.value) {
        navigateTo('/home')
    }

    const getCSRF = async () => {
        await useFetch(`${runTimeConfig.public.baseApi}/sanctum/csrf-cookie`, {
            onRequest({ request, options }) {
                options.headers = {
                        'Accept': 'application/json'
                }
                options.method = "GET"
                options.credentials = "include"
            }
        })
    }

    const login = async (e: Event) => {
        e.preventDefault()
        getCSRF()
        await useFetch(`${runTimeConfig.public.baseApi}/api/login`, {
            onRequest({ options }) {
                options.headers = {
                        "Accept": "application/json",
                        "XSRF-TOKEN": useCookie("XSRF-TOKEN").value as string,
                }
                options.method = "POST"
                options.body = {
                        "username": username.value,
                        "password": password.value,
                        "token_name": "webapp"
                }
            },
            onResponse({ response }) {
                if (response.status == 201) {
                    authStore.setUser(response._data.user)
                    const token = useCookie('token', {
                        secure: true
                    })
                    const user = useCookie('user', {
                        secure: true
                    })
                    token.value = response._data.token
                    user.value = JSON.stringify(response._data.user)
                    navigateTo('/home')
                }
                if (response.status == 401) {
                    alert('Неверные данные')
                }
            },
            onResponseError({ response }) {
                if (response._data.errors.username) {
                    alert('Пользователя с таким именем пользователя не существует')
                }
            }
        })
    }
</script>