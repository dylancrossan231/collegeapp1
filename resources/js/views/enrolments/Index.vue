<template>
  <b-row align-h="center">
    <b-col cols="10">

      <b-table-simple hover responsive striped bordered>
        <b-thead>
          <b-tr>
            <b-th>Date</b-th>
            <b-th>Time</b-th>
            <b-th>Status</b-th>
            <b-th>Course Name</b-th>
            <b-th>Lecturer Name</b-th>
            <b-th>Actions</b-th>

          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="item in items" :key="item.id">
            
            <b-td>{{ item.date }}</b-td>
            <b-td>{{ item.time }}</b-td>
            <b-td>{{ item.status }}</b-td>
            <b-td>{{ item.course.title }}</b-td>
            <b-td>{{ item.lecturer.name }}</b-td>

            <b-button variant="outline-primary"><router-link :to="`/enrolments/edit/${item.id}`">Edit</router-link></b-button>
            <b-button variant="outline-primary"><router-link :to="`/enrolments/show/${item.id}`">Show</router-link></b-button>
            <b-button variant="outline-primary" @click="deleteEnrolments(item.id)">Delete  </b-button>



          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created(){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get('/api/enrolments', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.items = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    })
  },
  methods: {

    deleteEnrolments(id){
          let app = this;
          let token = localStorage.getItem('token');
      axios.delete('/api/enrolments/'+ id , {
      headers: { Authorization: "Bearer " + token}
    })
        .then(function (response) {
       console.log(response.data);
       app.items = app.items.filter(dat => dat.id !== id)

    })
    .catch(function (error) {
       console.log(error);
    })
  
    }
  }
}
</script>
<style>
</style>
