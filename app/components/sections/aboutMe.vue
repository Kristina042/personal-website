<template>
  <div class="section">

    <div class="section__text">
      <div class="section__title-and-profile">
        <div class="section__name-and-title">
          <div class="section__name">👋 Hi, I'm Christine</div>
          <div class="section__title">Software Engineer</div>
        </div>
        <img class="section__profile-picture section__profile-picture--mobile" src="assets/profile.png" />
      </div>

      <div class="section__description">
        I specialize in building fast, accessible, and visually polished web applications. With a
        strong eye for detail and a passion for great design, I turn complex ideas into elegant,
        user-friendly interfaces using modern technologies
      </div>
    </div>
    <img class="section__profile-picture" src="assets/profile.png" />
  </div>
</template>





<style scoped lang="scss">

//mobile
.section {
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 130px 20px 80px;

  &__text {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__name {
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }

  &__title {
    font-family: 'Allerta Stencil';
    font-weight: 400;
    font-size: 28px;
    line-height: 1.5;
  }

  &__description {
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }

  &__name-and-title {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__title-and-profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }

  &__profile-picture {
    display: none;

    &--mobile {
      display: block;
      width: 32%;
      height: 32%;
      max-width: 125px;
      max-height: 125px;
      border-radius: 100%;
      box-shadow: 0 0 25px rgba($purple, 0.9);
    }
  }

  /* Large Mobile */
  @media (min-width: 30rem) {
    &__text {
      padding: 0px 50px;
    }

    &__title {
      text-wrap: nowrap;
      max-width: 310px;
      font-size: 28px;
    }

      &__profile-picture {
        display: none;

        &--mobile {
          display: block;
          width: 120px;
          height: 120px;
          border-radius: 100%;
          box-shadow: 0 0 25px rgba($purple, 0.9);
        }
      }
  }

  @media (min-width: 638px) {
    &__title {
      font-size: 36px;
    }

    &__text {
      max-width: 500px;
      padding: 0px;
    }
  }

  /* Tablet */
  @media (min-width: 48rem) {
    padding: 150px 100px 100px;
    margin-bottom: 50px;
    color: $white;
    display: flex;
    flex-direction: row;
    gap: 100px;

    &__text {
      display: flex;
      flex-direction: column;
      gap: 60px;
      max-width: 850px;
    }

    &__name {
      font-family: 'Roboto Condensed';
      font-weight: 400;
      font-size: 30px;
    }

    &__title {
      font-family: 'Allerta Stencil';
      font-weight: 400;
      font-size: 42px;
      text-wrap: nowrap;
      min-width: 400px;
    }

    &__description {
      font-family: 'Roboto Condensed';
      font-weight: 400;
      font-size: 28px;
      line-height: 40px;
    }

    &__title-and-profile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__profile-picture {
      display: none;

      &--mobile {
        display: block;
        min-width: 200px;
        min-height: 200px;
        border-radius: 100%;
        box-shadow: 0 0 25px rgba($purple, 0.9);
      }
    }
  }

  /* Laptop */
  @media (min-width: 64rem) {
    padding: 250px 100px 200px;
    margin-bottom: 50px;
    color: $white;
    display: flex;
    flex-direction: row;
    gap: 100px;

    &__text {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 850px;
    }

    &__name {
      font-family: 'Roboto Condensed';
      font-weight: 400;
      font-size: 30px;
    }

    &__title {
      font-family: 'Allerta Stencil';
      font-weight: 400;
      font-size: 44px;
    }

    &__title-and-profile {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &__description {
      font-family: 'Roboto Condensed';
      font-weight: 400;
      font-size: 24px;
      line-height: 40px;
    }

    &__profile-picture {
      display: block;
      width: 280px;
      height: 280px;
      border-radius: 100%;
      box-shadow: 0 0 25px rgba($purple, 0.9);

      &--mobile {
        display: none;
      }
    }
  }

  /* Large Desktop */
  @media (min-width: 90rem) {}

  /* 4K */
  @media (min-width: 240rem) {}

}
</style>
