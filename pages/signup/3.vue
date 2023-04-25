<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>Регистрация</h1>
                <form @submit.prevent="checkPassword">
                    <Input>
                        <input type="text" v-model="name" placeholder="ваше имя">
                    </Input>
                    <Input>
                        <input type="password" v-model="password" placeholder="придумайте пароль">
                    </Input>
                    <Input class="input_last">
                        <input type="password" v-model="confirmPassword" placeholder="повторите пароль">
                    </Input>
                    <Button type="submit">Зарегистрироваться</Button>
                </form>
            </div>
        </Welcome>
    </Content>
</template>

<style lang="scss" scoped>
    .button {
        display: block;
        text-align: center;
    }
    .file-input {
        display: none;
    }
</style>

<script setup lang="ts">
    import { useAuthStore } from '~~/stores/auth';
    import { useSignupStore } from '~~/stores/signup';

    definePageMeta({
        layout: 'empty'
    })

    const runTimeConfig = useRuntimeConfig()
    const signupStore = useSignupStore()
    const authStore = useAuthStore()
    const name = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const picture = ref<File | null>()

    const checkPassword = () => {
        if (password.value == confirmPassword.value) {
            signup()
        } else {
            alert("Пароли не совпадают")
        }
    }

    const signup = async () => {
        await useFetch(`${runTimeConfig.public.baseApi}/api/register`, {
            server: false, 
            onRequest({ options }) {
                options.method = "POST",
                options.body = {
                    "block_id": signupStore.getInfo.blockId,
                    "username": signupStore.getInfo.username,
                    "picture": picture.value,
                    "name": name.value,
                    "phone": signupStore.getInfo.phone,
                    "password": password.value,
                    "password_confirmation": confirmPassword.value,
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
                    navigateTo('/profile')
                }
            }
        })
    }
</script>