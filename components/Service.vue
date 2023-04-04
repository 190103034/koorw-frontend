<template>
    <Block class="service" :isFull="true">
        <template #picture>{{ picture }}</template>
        <template #title>{{ props.service?.name }}</template>
        <template #caption>
            <div class="service__contacts">
                <div class="service__phone">{{ phone }}</div>
                <div class="service__socials">
                    <NuxtLink v-for="contact in service?.contacts" :to="contactLink(contact)" target="_blank">
                        <font-awesome-icon v-if="contact.type != 'phone'" :icon="getIcon(contact.type)" />
                    </NuxtLink>
                </div>
            </div>
        </template>
    </Block>
</template>

<style lang="scss" scoped>
    .service {
        &__contacts {
            display: flex;
            margin-top: 5px;
            justify-content: space-between;
            align-items: center;
        }
        &__socials {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            svg {
                margin-left: 10px;
            }
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        service: Object as () => Service
    })

    const picture = computed(() => {
        return `${props.service?.name.charAt(0)}`
    })

    const phone = computed(() => {
        let phoneNumber = props.service?.contacts.find(obj => obj['type'] === 'phone')
        if (phoneNumber) {
            return `+${phoneNumber.value.slice(0, 1)} (${phoneNumber.value.slice(1, 4)}) ${phoneNumber.value.slice(4, 7)} ${phoneNumber.value.slice(7, 9)}-${phoneNumber.value.slice(9)}`;
        }
    })

    const getIcon = (type: string) => {
        switch (type) {
            case 'instagram': return 'fa-brands fa-instagram';
            case 'whatsapp': return 'fa-brands fa-whatsapp';
            case 'telegram': return 'fa-brands fa-telegram';
        }
    }

    const contactLink = (contact: ServiceContact) => {
        switch (contact.type) {
            case 'instagram': return `http://instagram.com/${contact.value}`; 
            case 'whatsapp': return `http://wa.me/${contact.value}`; 
            case 'telegram': return `http://t.me/${contact.value}`;
        }
    }
</script>