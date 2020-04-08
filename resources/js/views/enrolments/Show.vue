<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive bordered striped>
        <b-thead>
          <b-tr>
            <b-th>ID</b-th>
            <b-th>Date</b-th>
            <b-th>Time</b-th>
            <b-th>Status</b-th>
            <b-th>Course Name</b-th>
            <b-th>Lecturer Name</b-th>
            <b-th>Actions</b-th>
          </b-tr>
        </b-thead>
        <b-tbody class="container">
            <b-td>{{ enrolment.id }}</b-td>
            <b-td>{{ enrolment.date }}</b-td>
            <b-td>{{ enrolment.time }}</b-td>
            <b-td>{{ enrolment.status }}</b-td>
            <b-td>{{ enrolment.course.title }}</b-td>
            <b-td>{{ enrolment.lecturer.name }}</b-td>
            <b-td><b-button variant="outline-primary"><router-link :to="`/enrolments`">Back</router-link></b-button></b-td>
        </b-tbody>
      </b-table-simple>
    </b-col>
  </b-row>
</template>
<script>


  export default {
    data() {
      return {
        enrolment: {},
        show: true,
        loggedIn: false
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
        app.enrolment = response.data.data;
                console.log(app.enrolment);

      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
    
</script>


