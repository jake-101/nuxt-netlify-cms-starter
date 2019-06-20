<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-inner">
      <div class="brand">
        <nuxt-link to="/" class="nav-link"><span :key="colors[0]" class="nav-nb" :style="getGradient">Norman Bertolino</span><div class="subheading">Writer/Director</div></nuxt-link>
        
      </div>
      <ul class="social-icons">
        <li v-for="page in pages" :key="page.slug" class="page">
          <nuxt-link :to="`/page/${page.slug}`" 
           class="nav-link">
            {{page.title}}
          </nuxt-link>
        </li>
          <li class="page">
          <nuxt-link to="/contact" 
           class="nav-link">
            Contact
          </nuxt-link>
        </li>
        <li class="icon">
          <a href="https://twitter.com/normanbertolino/"
           target="_blank" 
           class="nav-link">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
            <li class="icon">
          <a href="https://www.instagram.com/nor_mans_land/"
           target="_blank" 
           class="nav-link">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
                    <li class="icon">
          <a href="https://www.imdb.com/name/nm4341041/"
           target="_blank" 
           class="nav-link">
            <font-awesome-icon :icon="['fab', 'imdb']" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>


export default {
props: ['pages'],
computed: {
      colors() {
      return this.$store.state.colors
    },
    getGradient() {
      return `background: linear-gradient(to right,${this.colors[0]},${this.colors[1]},${this.colors[2]});-webkit-background-clip: text;color:${this.colors[2]};`
    }
}
  
  }
  </script>

<style lang="scss" >
.nav-nb {
  transition: .4s all; -webkit-text-fill-color: transparent; -webkit-background-clip: text;-webkit-box-decoration-break: clone;
}
.subheading {font-weight:300;font-size:75%;opacity:.7;}
.navbar {
  width: 100%;
  font-family: 'Rubik', sans-serif;

  .navbar-inner {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;

    .brand {
      display: block;
      font-size:1.25rem;
      font-weight: 700;
      text-align: left;

      img {
        height: 24px;
        display: block;
      }

      a {
        padding: 1rem;
        display: block;
        box-shadow: none;
      }
    }

    .social-icons {
      padding: 0 1rem;
      margin: 0;
      list-style-type: none;
      line-height: 1;

      li {
        display: inline;

        a {
          display: inline-block;
          padding: 1.1rem 1rem 1rem .25rem;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
