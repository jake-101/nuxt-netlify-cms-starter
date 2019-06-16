<template>
  <footer class="footer">
    <Container flex>
      &copy; Norman Bertolino {{ new Date().getFullYear() }}
    </Container>
  </footer>
</template>

<script>
import Container from '~/components/Container'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss">
.footer {
  padding: 2rem 0;
  font-size: 75%;
  opacity: .5;

  @media (max-width: 567px) {
    padding: 1.2rem 0;
  }
}
</style>
