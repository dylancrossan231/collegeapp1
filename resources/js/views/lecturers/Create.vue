<template>
  <b-row>
    <b-col cols="8">

      <b-card title="Add Enrolement" tag="article">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Name"
            v-model="form.name"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Address:"
            label-for="input-2"
          >
          <b-form-input
            id="input-2"
            type="text"
            required
            placeholder="Enter Address"
            v-model="form.address"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Email:"
            label-for="input-3"
          >
          <b-form-input
            id="input-3"
            type="text"
            required
            placeholder="Enter Email"
            v-model="form.email"
          >
          </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Phone:"
            label-for="input-4"
          >
          <b-form-input
            id="input-4"
            type="text"
            required
            placeholder="Enter Phone Number"
            v-model="form.phone"
          >
          </b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        address: '',
        email: '',
        phone: ''
      },

      loggedIn: false,
      errors: []
    }
  },
  computed: {
    codeValid() {
      return this.form.code.length <= 4 && this.form.code.length > 0
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
      this.$router.push('/');
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      axios.post('/api/lecturers', {
        name: app.form.name,
        address: app.form.address,
        email: app.form.email,
        phone: app.form.phone,
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/lecturers');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });











    }
  }
}
</script>
