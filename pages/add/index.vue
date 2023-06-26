<template>
    <Header title="Написать пост"></Header>
    <Content>
        <form class="form" @submit.prevent="send">
            <PostAdd :user="user" :categoryTitle="categoryTitle" :visibilityTitle="visibilityTitle" :text="text" @category="setCategory" @visibility="setVisibility">
                <textarea class="post__input" placeholder="Напишите чем вы хотите поделиться.." v-model="text" required></textarea>
            </PostAdd>
            <button class="btn_publish" type="submit">Опубликовать</button>
        </form>
        <div class="options" v-if="optionsType != ''" @click="closeOptions()">
            <div class="options__content" @click.stop="">
                <h2>{{ optionsTitle }}</h2>
                <ul>
                    <li v-for="option in options" :key="option.id" @click="setOption(option)">{{ option.name }}</li>
                </ul>
            </div>
        </div>
    </Content>
</template>

<style lang="scss" scoped>
    .form {
        position: relative;
    }
    .btn_publish {
        padding: 7px 20px;
        background-color: $blue-main;
        border-radius: $border-radius-medium;
        color: #fff;
        margin-top: 10px;
        position: absolute;
        right: 0;
    }
    .options {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: rgba($color: $blue-main, $alpha: 0.25);
        &__content {
            background-color: white;
            min-height: 300px;
            position: absolute;
            bottom: 20px;
            max-width: 425px;
            width: 90%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: $border-radius-regular;
            h2 {
                text-align: center;
                padding: 20px;
            }
            li {
                padding: 20px 40px;
                border-bottom: 1px solid $grey-stroke;
                &:first-of-type {
                    border-top: 1px solid $grey-stroke;
                }
            }
        }
    }
</style>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const {isAuth, user} = authUtils()
    const categoryTitle = ref('Категория')
    const visibilityTitle = ref('Кто увидит пост')
    const optionsType = ref('')
    const optionsTitle = ref('')
    const options = ref()
    const text = ref('')
    const categoryId = ref()
    const visibilityId = ref()

    const { data: categories } = await useFetch(`${runTimeConfig.public.baseApi}/api/category`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const { data: visibilities } = await useFetch(`${runTimeConfig.public.baseApi}/api/visibility`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const setCategory = () => {
        optionsType.value = 'category'
        optionsTitle.value = categoryTitle.value
        options.value = categories.value
    }

    const setVisibility = () => {
        optionsType.value = 'visibility'
        optionsTitle.value = visibilityTitle.value
        options.value = visibilities.value
    }

    const setOption = (option) => {
        switch (optionsType.value) {
            case 'category': categoryTitle.value = option.name; categoryId.value = option.id; break;
            case 'visibility': visibilityTitle.value = option.name; visibilityId.value = option.id; 
        }
        closeOptions()
    }

    const closeOptions = () => {
        optionsType.value = ''
    }

    const send = async () => {
        // if (text.value.trim().length === 0 || typeof(categoryId.value) != "number" || typeof(visibilityId.value) != "number") {
        //     alert('Заполните все поля')
        //     return
        // }
        await useFetch(`${runTimeConfig.public.baseApi}/api/post`, {
            server: false,
            onRequest({ options }) {
                options.headers = {
                    'Authorization': `Bearer ${useCookie('token').value}`
                }
                options.method = 'POST'
                options.body = {
                    "category_id": categoryId.value,
                    "visibility_id": visibilityId.value,
                    "body": text.value
                }
            }, 
            onResponse({ response }) {
                if (response.status == 201) {
                    navigateTo(`/post/${response._data.hash_id}`)
                }
            }
        })
    }
</script>