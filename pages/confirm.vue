<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Sent</h1>
      </div>
    </Container>
      
  </section>
</template>

<script>
import ArticleCard from '~/components/ArticleCard'
import Container from '~/components/Container'


export default {

  components: {
    ArticleCard,
    Container
  },
data: function () {
    return {
      colors: null
    }
  },

  created() {
  },
  methods: {

  }
}
</script>

<style lang="scss" >
.intro {
  text-align: center;
  margin-bottom: 2.4rem;

  h1 {
    margin-top: 0;
  }
}
.container {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  &.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 567px) {
      display: block;
    }
  }

  &.narrow {
    max-width: 760px;
  }
}
</style>
