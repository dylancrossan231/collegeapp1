<template>
  <b-row align-h="center">
    <b-col cols="8">
      <h3 v-if="!loggedIn">You are not logged in!!</h3>
      <b-card
        v-else
        title="Edit Enrolement"
        tag="article"
      >

        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Date:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="enrolment.date"
              type="date"
              required
              placeholder="YYYY-MM-DD"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Time:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="enrolment.time"
              type="time"
              required
              placeholder="Enter time 00:00"
            ></b-form-input>
          </b-form-group>


      <b-form-group id="input-group-3" label="Status:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="enrolment.status"
          :options="status"
          required
        ></b-form-select>
      </b-form-group>





      <b-form-group id="input-group-4" label="courses:" label-for="input-4">
        <b-form-select
        name='courses'
        v-model='enrolment.course_id'
        class='form-control'>

        <option
        placeholder="Select A Course"
        v-for="course in courses"
        :key="course.id"
        v-bind:value="course.id">

        {{course.title}}

        </option>
      </b-form-select>
      </b-form-group>
      

      <b-form-group id="input-group-4" label="lecturer:" label-for="input-4">
        <b-form-select
        name='lecturer'
        v-model='enrolment.lecturer_id'
        class='form-control'>

        <option
        placeholder="Select A Lecturer"
        v-for="lecturer in lecturers"
        :key="lecturer.id"
        v-bind:value="enrolment.lecturer_id">

        {{lecturer.name}}

        </option>
      </b-form-select>
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
      enrolment:{},
        status: null,
        courses: '',
        lecturers: '',
      
        status: [{ text: 'Select One', value: null }, 'assigned', 'associate', 'career_break', 'interested'],
        show: true,
      loggedIn: false,
      errors: []
    }
    },
    created() {
      // console.log(localStorage.getItem('token'));
      if (localStorage.getItem('token')) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }

      let app = this;
      let token = localStorage.getItem('token');
      axios.get(`/api/enrolments/${app.$route.params.id}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(function (response) {
        console.log(response);
        app.enrolment = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get(`/api/courses`, {
        headers: { Authorization: "Bearer " + token }
    })    
    .then(function (response) {
       console.log(response.data);
       app.courses = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    }); 
      axios.get(`/api/lecturers`, {
        headers: { Authorization: "Bearer " + token }
      })    
      .then(function (response) {
       console.log(response.data);
       app.lecturers = response.data.data;
      })
    .catch(function (error) {
       console.log(error);
    });

    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        let app = this;
        let token = localStorage.getItem('token');
        axios.put(`/api/enrolments/${app.$route.params.id}`, {
        date: app.enrolment.date,
        time: app.enrolment.time,
        status: app.enrolment.status,
        course_id: app.enrolment.course,
        lecturer_id: app.enrolment.lecturer
        },
        {
          headers: { Authorization: "Bearer " + token }
        })
        .then(function (response){
          app.$router.push('/enrolments');
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>