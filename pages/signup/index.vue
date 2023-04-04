<template>
    <Content :isFull="true">
        <Welcome>
            <div class="inputs">
                <h1>Введите ваш адрес</h1>
                <Input>
                    <input type="text" placeholder="улица">
                </Input>
                <div class="flex-wrapper">
                    <Input>
                        <input type="text" placeholder="номер дома">
                    </Input>
                    <Input>
                        <input type="text" placeholder="блок">
                    </Input>
                </div>
                <Input>
                    <input type="text" placeholder="кодовый номер дома">
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
        navigateTo('/signup/2')
    }
</script>