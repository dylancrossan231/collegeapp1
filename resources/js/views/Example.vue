<template>
    <div>
        Test login  <br>

        <button @click="login()">Login</button>

        <br>

        Test courses <br>
        <button @click="getCourses()">Get courses </button>
        
        <button @click="logout()">Logout</button>
    </div>
</template>

<script>
export default{
    name:'app',
    components:{

    },
    data(){
        return{
            name:"",
            email:"",
            courses: []
        }

    },
    mounted(){
        if(localStorage.getItem("token") !== null){
            console.log("USER LOGGED IN");
        }
    },
    methods:{
        login(){
            let app = this;
            axios.post('/api/login',{
                email: "dylancrossan12@gmail.com",
                password:"secret"
            })
            .then(function(response){
                console.log(response.data);
                app.name = response.data.name;
                app.email = response.data.email;
                localStorage.setItem('token',response.data.token);
            })
            .catch(function(error){
                console.log(error);
            });
        },
        getCourses(){
            let app = this;
            let token = localStorage.getItem('token')
            axios.get('api/courses', {
                headers:{    Authorization: "Bearer " + token    } 
            })
            .then(function(response){
                console.log(response);
                app.courses = response.data.data;
            })
            .catch(function(error){
                console.log(error);
            });
            
        },
        logout(){
            let token = localStorage.getItem('token')
            axios.get('api/logout', {
                headers:{    Authorization: "Bearer " + token    } 
            })
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
            console.log("USER LOGGED OUT")
            localStorage.removeItem("token");
        }
    }
}

</script>

<style>
</style>