//TODO pass images as props
<script lang="ts" setup>
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

        <div class="project-card__buttons">
            <div class="project-card__source-and-tech">
                <div class="project-card__button">Source Code</div>
                <div class="project-card__button">Tech Details</div>
            </div>
            <div class="project-card__demo">Live Demo App</div>
        </div>
    </div>
</template>


<style lang="scss">
    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 312px;
        height: 329px;
        border-radius: 12px;

        padding-bottom: 16px;
        padding-left: 29px;
        padding-right: 29px;
        padding-top: 24px;

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
            padding-bottom: 20px;

            &__title {
                font-size: 18px;
                align-self: center;
            }

            &__description{
                font-size: 10px;
            }
        }

        &__buttons {
            font-size: 8px;
            width: 100%;
            display: flex;
            gap: 4px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &__button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 119px;
            height: 23px;
            border-radius: 8px;
            background-color: rgba($color: #000000, $alpha: 0.5);
        }

        &__source-and-tech {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        &__demo {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba($color: #41F21E80, $alpha: 0.5);
            width: 100%;
            border-radius: 8px;
            height: 23px;
        }
    }
</style>