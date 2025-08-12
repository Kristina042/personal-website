<script setup lang="ts">
import nuxtIcon from "~/assets/svg/nuxt.svg";
import linkedInIcon from '~/assets/svg/linkedIn.svg'
import gitHubIcon from '~/assets/svg/gitHub.svg'
</script>

<template>
  <div class="footer">

    <div class="footer__top">
      <div>Powered By</div>
      <nuxtIcon class="footer__icon"/>
      <div>Nuxt</div>
    </div>

    <div class="footer__bottom">
      <div class="footer__rights">© 2025 Christine Miaekivi, All rights reserved.</div>
      <div class="footer__icons">
        <linkedInIcon/>
        <gitHubIcon/>
        <img src="/assets/Medium-Icon.png"/>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.footer {
  font-family: 'Roboto Condensed';
  color: white;
  background-color: rgba($black, 25%);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-bottom: 10px;

  &__top {
    padding-bottom: 5px;
    padding-left: 128px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    font-size: 14px;
    border-bottom: solid 1px;
    border-color: rgba($color: #ffffff, $alpha: 0.25);
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__rights {
    padding-left: 128px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
  }

  &__icons {
    padding-right: 128px;
    align-items: center;
    display: flex;
    gap: 20px;
  }
}
</style>
