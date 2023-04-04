<template>
    <header class="header">
        <div class="container">
            <div class="header__flex">
                <Thumbnail :isLarge="true">
                    <img class="post__profile-picture" :src="profile.picture" />
                </Thumbnail>
                <div class="header__info">
                    <div class="header__flex header__flex_sb">
                        <div class="header__title"><strong>{{ profile.name }}</strong> • {{ profile.username }}</div>
                        <font-awesome-icon icon="fa-solid fa-pencil" />
                    </div>
                    <div class="header__caption">{{ profile.block.house_name }}, {{ profile.block.name.toLowerCase() }}</div>
                </div>
            </div>
        </div>
        <Navigation class="sections">
            <div class="sections__flex">
                <div class="sections__item" @click="isEstate = false">Ваши посты</div>
                <div class="sections__item" @click="isEstate = true">О вашем ЖК</div>
            </div>
        </Navigation>
    </header>
    <Content>
        <div v-if="!isEstate" class="posts section">
            <Post v-for="(post, index) in profile.posts" :key="post.hash_id" :post="post"></Post>
        </div>
        <div v-if="isEstate" class="estate section">
            <div class="estate__category" v-if="masters.length > 0">
                <h2 class="estate__header">Мастера</h2>
                <Service v-for="master in masters" :key="master.id" :service="master"></Service>
            </div>
            <div class="estate__category" v-if="businesses.length > 0">
                <h2 class="estate__header">Бизнесы</h2>
                <Service v-for="business in businesses" :key="business.id" :service="business"></Service>
            </div>
        </div>
    </Content>
</template>

<style lang="scss" scoped>
    .header {
        top: 0;
        width: 100%;
        position: sticky;
        background-color: #fff;
        .container {
            padding: 20px;
        }
        .thumbnail {
            margin-right: 15px;
        }
        &__flex {
            // width: 100%;
            display: flex;
            &_sb {
                justify-content: space-between;
            }
        }
        &__info {
            flex: 1;
        }
        &__title {
            strong {
                font-size: $font-size-regular;
                font-weight: $font-weight-semibold;
            }
        }
        &__caption {
            margin-top: 5px;
            font-size: $font-size-caption;
        }
    }
    .sections {
        &__flex {
            display: flex;
        }
        &__item {
            width: 0;
            flex: 1 1 0;
            text-align: center;
            font-weight: $font-weight-medium;
        }
    }
    .section {
        margin-top: 20px;
    }
    .estate {
        .service {
            margin-top: 10px;
        }
        &__category {
            margin-top: 15px;
        }
        &__header {
            font-size: $font-size-regular;
            font-weight: $font-weight-semibold;
        }
    }
</style>

<script setup>
    const {isAuth, user} = authUtils()
    const runTimeConfig = useRuntimeConfig()

    if (!isAuth.value) {
        navigateTo('/login')
    }

    const { data: profile } = await useFetch(`${runTimeConfig.public.baseApi}/api/user/${user.value.id}`)
    const { data: house } = await useFetch(`${runTimeConfig.public.baseApi}/api/house/${profile.value.block.house_id}`)

    const masters = ref([])
    const businesses = ref([])

    house.value.services.map((service) => {
        switch (service.type) {
            case 'master': masters.value.push(service); break;
            case 'business': businesses.value.push(service); break;
        }
    })

    const isEstate = ref(false)

    const services = ref([
        {
            name: "Электрик",
            phone: "+7 (707) 707 70-70",
            instagram: "",
            whatsapp: "+7 (707) 707 70-70",
            telegram: ""
        },
        {
            name: "Сантехник",
            phone: "+7 (707) 707 70-70",
            instagram: "",
            whatsapp: "+7 (707) 707 70-70",
            telegram: ""
        }
    ])

    const servicesB = ref([
        {
            name: "Пиццерия d’Italia",
            phone: "+7 (707) 707 70-70",
            instagram: "test",
            whatsapp: "+7 (707) 707 70-70",
            telegram: ""
        },
        {
            name: "Салон красоты Sulujan",
            phone: "+7 (707) 707 70-70",
            instagram: "test",
            whatsapp: "+7 (707) 707 70-70",
            telegram: "test"
        }
    ])

</script>