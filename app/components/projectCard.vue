<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  laptopImage: string
  mobileImage: string
}>()

const emit = defineEmits(["go-to-source-code", "go-to-demo"])

const onSourceCodeClick = () => {
  emit("go-to-source-code")
}

const onDemoClick = () => {
  emit("go-to-demo")
}
</script>

<template>
  <div class="project-card">

    <div class="project-card__content">
      <div class="project-card__content__title">{{ title }}</div>
      <div class="project-card__images">
        <img class="project-card__laptop" src="/assets/laptop.png"/>
        <img class="project-card__laptop-image" :src="laptopImage"/>
        <img class="project-card__phone" src="/assets/phone.png"/>
        <img class="project-card__phone-image" :src="mobileImage"/>
      </div>
      <div class="project-card__content__description">{{ description }}</div>
    </div>

    <div class="project-card__buttons">
      <div class="project-card__source-and-tech">
        <div class="project-card__button" @click="onSourceCodeClick">Source Code</div>
        <!-- <div class="project-card__button">Tech Details</div> -->
      </div>
      <div class="project-card__demo" @click="onDemoClick">Live Demo App</div>
    </div>
  </div>
</template>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 340px;
  height: 430px;
  border-radius: 12px;

  padding: 25px 20px 25px;

  font-weight: 600;
  line-height: 100%;
  font-family: 'Inter';
  color: $white;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);

  &__images {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 240px;
    height: 120px;
  }

  &__laptop {
    position: absolute;
    width: 200px;
    height: 110px;
    right: -10px;

    &-image {
      position: absolute;
      width: 163px;
      height: 97px;
      right: 9px;
      bottom: 14px;
    }
  }

  &__phone {
    position: absolute;
    width: 130px;
    height: 120px;
    right: -70px;
    top: 10px;

    &-image {
      position: absolute;
      width: 48px;
      height: 89px;
      right: -29px;
      top: 26px;
      border-radius: 4px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__title {
      font-size: 22px;
      align-self: center;
    }

    &__description {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5;
    }
  }

  &__buttons {
    font-size: 12px;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 30px;
    border-radius: 10px;
    background-color: rgba(#000000, 0.7);

    &:hover {
      cursor:pointer;
    }
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
    background-color: rgba($color: $green, $alpha: 0.5);
    width: 100%;
    border-radius: 8px;
    height: 30px;

    &:hover {
      cursor:pointer;
    }
  }

  /* Large Mobile */
  @media (min-width: 30rem) {
    width: 420px;
    height: 460px;
    border-radius: 16px;
    padding: 25px 29px 25px;

    &__images {
      width: 240px;
      height: 120px;
    }

    &__laptop {
      position: absolute;
      width: 230px;
      height: 130px;
      right: -50px;

      &-image{
        position: absolute;
        width: 188px;
        height: 115px;
        right: -29px;
        bottom: 5px;
      }
    }

    &__phone {
      position: absolute;
      width: 150px;
      height: 140px;
      right: -120px;
      top: 10px;

      &-image {
        position: absolute;
        width: 54px;
        height: 105px;
        right: -72px;
        top: 28px;
        border-radius: 4px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding-bottom: 20px;

      &__title {
        font-size: 22px;
        align-self: center;
      }

      &__description {
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
      }
    }

    &__buttons {
      font-size: 14px;
      width: 100%;
      display: flex;
      gap: 20px;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      border-radius: 10px;
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
      background-color: rgba($color: $green, $alpha: 0.5);
      width: 100%;
      border-radius: 8px;
      height: 30px;
    }
  }

  /* Tablet */
  @media (min-width: 48rem) {
    width: 340px;
    height: 430px;
    padding: 25px 29px 25px;
    border-radius: 20px;

    &__laptop {
      position: absolute;
      width: 200px;
      height: 110px;
      right: -10px;

      &-image {
        position: absolute;
        width: 163px;
        height: 97px;
        right: 9px;
        bottom: 14px;
      }
    }

    &__phone {
      position: absolute;
      width: 130px;
      height: 120px;
      right: -70px;
      top: 10px;

      &-image {
        position: absolute;
        width: 48px;
        height: 89px;
        right: -29px;
        top: 26px;
        border-radius: 4px;
      }
    }

    &__content {
      gap: 20px;

      &__description {
        font-size: 14px;
        line-height: 1.5;
      }
    }

    &__buttons {
      gap: 20px;
    }
  }

  /* Laptop */
  @media (min-width: 64rem) {
    width: 420px;
    height: 460px;
    border-radius: 16px;
    padding: 25px 29px 25px;

    &__laptop {
      position: absolute;
      width: 230px;
      height: 130px;
      right: -50px;

      &-image{
        position: absolute;
        width: 186px;
        height: 115px;
        right: -28px;
        bottom: 5px;
      }
    }

    &__phone {
      position: absolute;
      width: 150px;
      height: 140px;
      right: -120px;
      top: 10px;

      &-image {
        position: absolute;
        width: 54px;
        height: 105px;
        right: -72px;
        top: 28px;
        border-radius: 4px;
      }
    }

    &__buttons {
      gap:20px;
    }

    &__content {
      gap: 40px;
      padding-bottom: 20px;


      &__description {
        font-size: 15px;
        line-height: 22px;
      }
    }


  }
}
</style>
