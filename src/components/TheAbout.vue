<template>
  <section class="about-page">
    <h1>Welcome To Weekly Menu - About Us</h1>
    <section>
      <h2>Our philosophy</h2>
    <article>
      We don't need fancy tricks or styling to make a tool that is worth using.
      </article>
    <article>
      But we tried our best, to make something worth paying attention to!
    </article>
    <article>
      So, please check out our webpage  <span class="heart-unicode">&#10084;</span>

    </article>
    </section>

  </section>
</template>

<style>


.about-page{
  display:grid;
  grid-template-columns:1fr;
  gap:2rem;
}

h2{
  background: var(--color-secondary-1);
  border-radius: 2rem/3rem;
  text-wrap:balance;
  margin:1rem auto;
  /* width:100%; */
  padding:1rem;
  height:auto;

}

article{
  font-size:large;
  padding:1.3rem;
  text-wrap:balance;
  margin:1rem auto;



}

article:nth-of-type(odd){
background: var(--color-background-light);
  color: var(--color-text-light);
  border-radius:2rem 2rem 3rem;

}

article:nth-of-type(even){
background: var(--color-background-dark);
  color: var(--color-white);
  border-radius:3rem 2rem 2rem;
}

.heart-unicode{
  font-size:xx-large;
  font-family:"Fugaz One", sans-serif;
  color:var(--color-secondary-1);
  margin:0.2rem;
}
</style>
