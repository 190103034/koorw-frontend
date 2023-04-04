<template>
    <Header :isBack="true" title="Блок 2"></Header>
    <Content>
        <div class="messages" ref="messages">
            <div class="messages__block">
                <div class="messages__picture">
                    <Thumbnail>
                        <img class="post__picture" src="/asem.jpg" />
                    </Thumbnail>
                </div>
                <div class="messages__body">
                    <div class="messages__name">Әсем Қанат</div>
                    <div class="messages__list">
                        <div class="messages__item">
                            <div class="messages__bubble">Равным образом постоянное информационно.</div>
                            <div class="messages__time">10:12</div>
                        </div>
                        <div class="messages__item">
                            <div class="messages__bubble">Обеспечение нашей деятельности</div>
                            <div class="messages__time">10:12</div>
                        </div>
                        <div class="messages__item">
                            <div class="messages__bubble">Важную роль в формировании системы обучения кадров</div>
                            <div class="messages__time">10:13</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="messages__block">
                <div class="messages__picture">
                    <Thumbnail>
                        <img class="post__picture" src="/mariya.jpg" />
                    </Thumbnail>
                </div>
                <div class="messages__body">
                    <div class="messages__name">Мария Жүсіпбек</div>
                    <div class="messages__list">
                        <div class="messages__item">
                            <div class="messages__bubble">Равным образом постоянное информационно.</div>
                            <div class="messages__time">10:14</div>
                        </div>
                        <div class="messages__item">
                            <div class="messages__bubble">Обеспечение </div>
                            <div class="messages__time">10:14</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="messages__block">
                <div class="messages__body">
                    <div class="messages__list">
                        <div class="messages__item messages__item_self">
                            <div class="messages__bubble messages__bubble_self">Равным образом постоянное информационно.</div>
                            <div class="messages__time">10:21</div>
                        </div>
                        <div class="messages__item messages__item_self">
                            <div class="messages__bubble_self messages__bubble_emoji">👍🏻👍🏻</div>
                            <div class="messages__time">10:21</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="messages__block">
                <div class="messages__picture">
                    <Thumbnail>
                        <img class="post__picture" src="/giorgi.png" />
                    </Thumbnail>
                </div>
                <div class="messages__body">
                    <div class="messages__name">Гиорги Капанадзе</div>
                    <div class="messages__list">
                        <div class="messages__item">
                            <div class="messages__bubble">Равным образом постоянное информационно.</div>
                            <div class="messages__time">10:25</div>
                        </div>
                        <div class="messages__item">
                            <div class="messages__bubble">Обеспечение </div>
                            <div class="messages__time">10:25</div>
                        </div>
                        <div class="messages__item">
                            <div class="messages__bubble_emoji">😳</div>
                            <div class="messages__time">10:26</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="messages__block">
                <div class="messages__picture">
                    <Thumbnail>
                        <img class="post__picture" src="/asem.jpg" />
                    </Thumbnail>
                </div>
                <div class="messages__body">
                    <div class="messages__name">Әсем Қанат</div>
                    <div class="messages__list">
                        <div class="messages__item">
                            <div class="messages__bubble">Равным образом постоянное информационно.</div>
                            <div class="messages__time">10:32</div>
                        </div>
                        <div class="messages__item">
                            <div class="messages__bubble">Обеспечение нашей деятельности</div>
                            <div class="messages__time">10:32</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Send placeholder="Ваше сообщение.."></Send>
    </Content>
</template>

<style lang="scss" scoped>
    .messages {
        // height: calc(100vh - 180px);
        // overflow: auto;
        // transform: rotate(180deg);
        // direction: rtl;
        margin-top: 10px;
        margin-bottom: 122px;
        &__block {
            display: flex;
            margin-bottom: 10px;
            // transform: rotate(180deg);
            // direction: ltr;
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

<script setup lang="ts">
    const messages = ref()
</script>