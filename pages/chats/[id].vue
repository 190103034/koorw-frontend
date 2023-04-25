<template>
    <Header :isBack="true" title="Блок 2"></Header>
    <Content>
        <div class="messages">
            <div v-for="message in messages" class="messages__block">
                <div v-if="message.user.id != user.id" class="messages__picture">
                    <Thumbnail>
                        <img v-if="message.user.picture" class="post__picture" :src="`http://localhost/images/${message.user.picture}`" />
                        <div v-if="!message.user.picture" class="post__profile-picture">{{ initials(message.user) }}</div>
                    </Thumbnail>
                </div>
                <div class="messages__body">
                    <div class="messages__name" v-if="message.user.id != user.id">{{ message.user.name }}</div>
                    <div class="messages__item" :class="{'messages__item_self': message.user.id == user.id}">
                        <div class="messages__bubble" :class="{'messages__bubble_self': message.user.id == user.id}">{{ message.message }}</div>
                        <div class="messages__time">{{ moment(message.created_at).format("HH:mm:ss") }}</div>
                    </div>
                </div>
            </div>
        </div>
        <Send placeholder="Ваше сообщение.." @send="sendMessage"></Send>
    </Content>
</template>

<style lang="scss" scoped>
    .messages {
        height: calc(100vh - 180px);
        overflow: auto;
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 122px;
        &__block {
            display: flex;
            margin-bottom: 10px;
        }
        &__body {
            width: 100%;
        }
        &__name {
            font-size: $font-size-regular;
            font-weight: $font-weight-semibold;
            margin-bottom: 5px;
        }
        &__item {
            display: flex;
            margin-bottom: 7px;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            &_self {
                flex-direction: row-reverse;
            }
        }
        &__bubble {
            max-width: 85%;
            padding: 7px;
            line-height: 1.2rem;
            border: 1px solid $grey-light;
            border-radius: $border-radius-small;
            &_self {
                max-width: 75%;
            }
            &_emoji {
                font-size: 3rem;
            }
        }
    }
</style>

<script setup>
    import moment from 'moment'; 
    import Pusher from "pusher-js";

    const runTimeConfig = useRuntimeConfig()
    const { user } = authUtils()
    const route = useRoute()

    const { data: messages, refresh } = await useFetch(`${runTimeConfig.public.baseApi}/api/chats/${route.params.id}`, {
        onRequest({ options }) {
            options.headers = {
                'Authorization': `Bearer ${useCookie('token').value}`
            }
        }
    })

    const initials = (user) => {
        return `${user.name.charAt(0)}`
    }


    const pusher = new Pusher("d100e73474d992daed02", {
        cluster: "ap2",
    })
    const channel = pusher.subscribe(`chat.${route.params.id}`);

    const sendMessage = async (text) => {
        await useFetch(`${runTimeConfig.public.baseApi}/api/chats/${route.params.id}`, {
            onRequest({ options }) {
                options.method = "POST",
                options.headers = {
                    'Authorization': `Bearer ${useCookie('token').value}`
                },
                options.body = {
                    "message": text
                }
            }
        })
        refresh()
    }

    channel.bind('message.new', function() {
        refresh()
    });
</script>