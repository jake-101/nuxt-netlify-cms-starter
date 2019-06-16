<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Contact</h1>
      </div>
    </Container>
        <div  class="container">
<form name="contact" method="POST" data-netlify="true" v-on:submit="onSubmit" action="/confirm">
  <p>
    <label>Email <input v-model="formmail.email" type="email" required name="email"></label>
  </p>
  <p>
    <label>Message <textarea v-model="formmail.message" required name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
   
        </div>
  </section>
</template>

<script>
import Container from '~/components/Container'


export default {

  components: {
    Container
  },
data: function () {
    return {
      colors: null,
      formmail: {
        'form-name': 'contact',
        email: '',
        message: ''
      }
    }
  },

  created() {
  },
  methods: {
        onSubmit(evt) {
            // this.formmail["form-name"] = 'contact'
            console.log(this.formmail,'formmail')
            this.$axios.setHeader('Content-Type', 'application/x-www-form-url-encoded', ['post'])
            this.$axios.$post('https://norman-bertolino.netlify.com/confirm/', JSON.stringify(this.formmail))
                .then(function (response) {
                    // success
                    response => console.log(response,'success')
                }, function (errors) {
                    // error
                    errors => console.log(errors,'error')
                });
        }
  }
}
</script>

<style lang="scss" >
form input,form textarea {
    font-size: 1rem;
    display: block;
    width: 45ch;
    max-width: 90%;
    padding: .4rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin: .5rem 0;
}
form button {
  background: #000;border-radius:4px;padding: .3rem .6rem;color:#fff;font-size:1rem;
}
label {font-size:65%;}
form {
    margin: auto;
    max-width: 45ch;
}

form label {
    width: 45ch;
    max-width: 100%;
}
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
