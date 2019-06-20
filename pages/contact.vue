<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Contact</h1>
      </div>
    </Container>
        <div v-if="!response" class="container">
<form name="contact">
  <p>
    <label>Email <input v-model="formmail.email" type="email" required name="email"></label>
  </p>
  <p>
    <label>Message <textarea rows="4" v-model="formmail.message" required name="message"></textarea></label>
  </p>
  <p>
    <button  v-on:click.prevent="onSubmit" type="submit">Send</button>
  </p>
</form>
   
        </div>
                <div v-else class="container text-center">
{{response}}
   
        </div>
  </section>
</template>

<script>
import Container from '~/components/Container'


export default {
name: 'contact',
  components: {
    Container
  },
    head() {
    return {
      title: `Contact | Norman Bertolino`,
    }},
data: function () {
    return {
      response: null,
      formmail: {
        email: '',
        message: ''
      }
    }
  },

  created() {
  },
  methods: {
        onSubmit(evt) {
          const _this = this
            console.log(this.formmail,'formmail')
            this.$axios.setHeader('Content-Type', 'application/json', ['post'])
            this.$axios.$post('/.netlify/functions/send', this.formmail)
                .then(function (response) {
                    // success
                    response => JSON.parse(response)
                    _this.response = response.message
                    
                }, function (errors) {
                    // error
                    errors =>   _this.response = errors
                  
                });
        }
  }
}
</script>

<style lang="scss" >
.text-center {text-align:center;}
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
  background: #000;border-radius:4px;padding: .3rem .6rem;color:#fff;font-size:1rem;cursor:pointer;
}
form button:hover {background:#222;transition:.2s all;}
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
