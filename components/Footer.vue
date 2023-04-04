<template>
    <footer class="footer">
        <div class="container">
            <nav class="footer__nav">
                <NuxtLink to="/home">
                    <font-awesome-icon icon="fa-solid fa-house-chimney" class="icon_small" />
                </NuxtLink>
                <NuxtLink to="/add">
                    <font-awesome-icon icon="fa-solid fa-plus" class="icon_small" />
                </NuxtLink>
                <NuxtLink to="/chats">
                    <font-awesome-icon icon="fa-solid fa-message" class="icon_small" />
                </NuxtLink>
                <NuxtLink to="/profile">
                    <font-awesome-icon icon="fa-solid fa-user" class="icon_small" />
                </NuxtLink>
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        bottom: 0;
        width: 100%;
        z-index: 10;
        padding: 20px;
        position: fixed;
        background-color: #fff;
        border-top: 1px solid $grey-light;
        box-shadow: 0 -5px 20px -10px rgba(0, 0, 0, 0.2);
        &__nav {
            display: flex;
            justify-content: space-around;
        }
    }
</style>