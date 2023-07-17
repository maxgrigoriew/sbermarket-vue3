<template>
  <nav class="menu">
    <div class="container">
      <ul class="menu__list">
        <li class="menu__item"><a href="" class="menu__link">Главная</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import './../../assets/scss/vars';

.menu {
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(-100%);
  background-color: $accent-light;
  color: $accent;
  transition: $transition;
  z-index: 100;
  &.active {
    transform: translateX(0);
  }
}
</style>
