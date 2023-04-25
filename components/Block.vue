<template>
    <div class="block">
        <div class="block__header" :class="{block__header_full: isFull}">
            <Thumbnail>
                <slot name="picture"></slot>
            </Thumbnail>
            <div class="block__info" :class="{block__info_full: isFull}">
                <div class="block__title">
                    <strong>
                        <slot name="title"></slot>
                    </strong>
                    <slot name="subtitle"></slot>
                </div>
                <div class="block__subheader">
                    <slot name="subheader"></slot>
                </div>
                <div class="block__caption">
                    <slot name="caption"></slot>
                </div>
            </div>
        </div>
        <slot name="body"></slot>
    </div>
</template>

<style lang="scss">
    .block {
        border: 1px solid $grey-light;
        border-radius: $border-radius-regular;
        padding: 15px;
        &__header {
            display: flex;
            width: fit-content;
            &_full {
                width: 100% !important;
            }
        }
        &__info {
            &_full {
                flex: 1;
            }
        }
        &__title {
            strong {
                font-size: $font-size-regular;
                font-weight: $font-weight-semibold;
            }
        }
        &__subheader {
            margin-top: 3px;
            font-size: $font-size-caption;
            font-weight: $font-weight-semibold;
        }
        &__caption {
            margin-top: 3px;
            font-size: $font-size-caption;
        }
        button {
            display: block;
        }
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        isFull: Boolean
    })
</script>