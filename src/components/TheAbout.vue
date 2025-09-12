<template>
    <h1>Welcome To Weekly Menu - About Us</h1>
    <section>
      <h2>Our philosophy</h2>
    <article>
      We do not need fancy tricks or styling to make a tool that is worth using.
      </article>
    <article>
      But we tried our best, to make something worth paying attention too!
    </article>
    <article>
      So, please check our webpage out <span class="heart-unicode">&#10084;</span>

    </article>
    </section>
</template>

<style>
h1{
  background: var(--color-primary-1);
  border-radius: 2rem/3rem;
  text-wrap:balance;
  color:var(--color-black);
  margin:0.8rem auto;
  width:100%;
}

h2{
  background: var(--color-secondary-1);
  border-radius: 2rem/3rem;
  text-wrap:balance;
  margin:1rem auto;
  width:100%;

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
