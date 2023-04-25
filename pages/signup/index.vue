<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>Введите ваш адрес</h1>
                <form @submit.prevent="next">
                    <Input>
                        <select name="street" id="street" v-model="street" required>
                            <option selected disabled value="">улица</option>
                            <option v-for="street in streets" :key="street.id" :value="street.id">{{ street.name }}</option>
                        </select>
                    </Input>
                    <div class="flex-wrapper">
                        <Input>
                            <select name="house" id="house" v-model="house" required :disabled="street == ''">
                                <option selected disabled value="">номер дома</option>
                                <option v-if="houses" v-for="house in houses" :key="house.id" :value="house.id">{{ house.house_number }}</option>
                            </select>
                        </Input>
                        <Input>
                            <select name="block" id="block" v-model="block" required :disabled="house == ''">
                                <option selected disabled value="">блок</option>
                                <option v-if="blocks" v-for="block in blocks" :key="block.id" :value="block.id">{{ block.name }}</option>
                            </select>
                        </Input>
                    </div>
                    <Input>
                        <input type="text" placeholder="кодовый номер дома" v-model="secretCode" :disabled="block == ''" required>
                    </Input>
                    <Button type="submit">Далее</Button>
                </form>
            </div>
        </Welcome>
    </Content>
</template>

<script setup>
    import { useSignupStore } from '~~/stores/signup';

    definePageMeta({
        layout: 'empty'
    })

    const runTimeConfig = useRuntimeConfig()
    const signupStore = useSignupStore()
    const street = ref('')
    const house = ref('')
    const block = ref('')
    const secretCode = ref('')

    const { data: streets } = await useFetch(`${runTimeConfig.public.baseApi}/api/street`);
    const { data: houses } = useFetch(() => `${runTimeConfig.public.baseApi}/api/house?street_id=${street.value}`, {
        immediate: false,
        watch: [street]
    });
    const { data: blocks } = useFetch(() => `${runTimeConfig.public.baseApi}/api/block?house_id=${house.value}`, {
        immediate: false,
        watch: [house]
    });

    const next = async () => {
        await useFetch(`${runTimeConfig.public.baseApi}/api/house/verify`, {
            server: false,
            onRequest({ options }) {
                options.method = "POST"
                options.body = {
                    "house_id": house.value,
                    "secret_code": secretCode.value
                }
            },
            onResponse({ response }) {
                if (response._data == 1) {
                    signupStore.setFirstStep(block.value)
                    navigateTo('/signup/2')
                } else {
                    alert('Неверный кодовый номер')
                }
            }
        })
    }
</script>