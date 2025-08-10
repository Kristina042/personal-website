<script lang="ts" setup>
    import navButton from './navButton.vue';

    defineProps<{
    title: string,
    description: string
    }>()

</script>


<template>
    <div class="project-card">
        <div class="project-card__content">
            <div class="project-card__content__title"> {{ title }} </div>
            <div class="project-card__content__description"> {{ description }} </div>
        </div>

        <div class="project-card__nav">
            <navButton class="project-card__nav__button" text="view demo"/>
            <navButton class="project-card__nav__button" text="view docs"/>
        </div>
    </div>
</template>


<style lang="scss">
    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 413px;
        height: 372px;
        border-radius: 12px;

        padding: 24px;

        font-weight: 600;
        line-height: 100%;
        font-family: 'Inter';
        color: white;

        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow:
        0 10px 20px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.7),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1);

        &__content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 30px;

            &__title {
                font-size: 18px;
            }

            &__description{
                font-size: 10px;
            }
        }

        &__nav {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &__button {
                width: 163px;
                height: 38px;
            }
        }
    }
</style>