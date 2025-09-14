<template>
  <footer class="menu-app__footer">
    <a
      class="menu-app__link"
      href="https://github.com/efpcode"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="menu-app__icon-social"
        src="../assets/codelogo.png"
        alt="GitHub cat-logo linked to profile"
      />
      <span class="menu-app__icon-text"><strong>GitHub</strong></span>
    </a>

    <h5>© 2025 Esteban Fernandez Parada</h5>
  </footer>
</template>

<style>
.menu-app__footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  background: var(--color-secondary-1);
  width: 100vw;
}

.menu-app__link {
  box-shadow:
    0.5rem 0.5rem black,
    -0.5rem -0.5rem #ffe795;
  border-radius: 2rem;
  background: var(--color-cta-highlight-dark);
}

.menu-app__link:hover {
  background: var(--color-primary-1);
}

.menu-app__icon-social {
  height: 3rem;
  width: 3rem;
  max-height: 4rem;
  max-width: 4rem;
  border-radius: 100%;
  position: relative;
  margin: 0.2rem auto;
  display: flex;
}

.menu-app__icon-text {
  text-align: center;
  display: inline-flex;
  margin: 0.3rem auto;
  padding: 0.4rem;
}

@media (hover: none) {
  .menu-app__link {
    background: var(--color-cta-highlight-dark) !important;
  }
}
</style>
