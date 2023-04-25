<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>Регистрация</h1>
                <form @submit.prevent="next">
                    <Input>
                        <input type="text" placeholder="имя пользователя" v-model="username" required>
                    </Input>
                    <Input>
                        <input type="text" v-maska:[maskOptions] @input="phoneHandler" placeholder="+7 (7" v-model="phone" required>
                    </Input>
                    <Button type="submit">Далее</Button>
                </form>
            </div>
        </Welcome>
    </Content>
</template>

<script setup lang="ts">
    import { useSignupStore } from '~~/stores/signup';

    definePageMeta({
        layout: 'empty'
    })

    const signupStore = useSignupStore()
    const runTimeConfig = useRuntimeConfig()
    const username = ref('')
    const phone = ref('')
    const maskOptions = ref({ mask: "+7 (7##) ### ##-##" })

    const phoneHandler = () => {
        if (!phone.value.startsWith("+7 (7")) {
            phone.value = "+7 (7"
        }
    }

    const next = async () => {
        await useFetch(`${runTimeConfig.public.baseApi}/api/register/verify`, {
            server: false,
            onRequest({ options }) {
                options.method = "POST"
                options.body = {
                    "username": username.value,
                    "phone": phone.value
                }
            },
            onResponse({ response }) {
                if (response.status == 204) {
                    signupStore.setSecondStep(username.value, phone.value)
                    navigateTo('/signup/3')
                } else {
                    alert('Пользователь с такими данными уже существует')
                }
            }
        })
    }
</script>