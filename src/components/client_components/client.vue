<template>
  <div>
    <body>
      <div class="top">
        <img src="../assets/logo.png">
        <h1>SCHOOL BUS</h1>
      </div>
      <section>
        <div class="bus">
          <h2>Автус</h2>
          <table style="width:100%">
            <tr>
              <th>ID</th>
              <th>Дугаар</th>
              <th>Утас</th>
            </tr>
            <tr
              v-for="bus in buses"
              :key="bus"
            >
              <td>{{ bus.id }}</td>
              <td>{{ bus.licensenumber }}</td>
              <td>{{ bus.phone }}</td>
            </tr>
          </table>
        </div>
        <div class="route">
          <h2>Маршрут</h2>
          <button
            type="button"
            class="btn btn-success"
            @click="showRouteAdd()"
          >
            +
          </button>
          <table style="width:100%">
            <tr>
              <th>Nº</th>
              <th>Зогсоол</th>
              <th>Өргөрөг</th>
              <th>Уртраг</th>
            </tr>
            <tr
              v-for="route in routes"
              :key="route"
            >
              <td>{{ route.number }}</td>
              <td>{{ route.stop }}</td>
              <td>{{ route.lat }}</td>
              <td>{{ route.lon }}</td>
            </tr>
          </table>
        </div>
      </section>
      <div class="users">
        <h2>Сурагчид</h2>
      </div>
    </body>
  </div>
</template>



<script>
import axios from 'axios'
import store from '@/store/store.js';
export default {
  components: {
    },
    data() {
      return {
        buses: [],
        users: [],
        routes: [],
        }
    },
        computed: {
  titles:function(){
    var titles = [];
    for(var i = 0; i < this.routes.length; i++){
      for(var k = 0; k < this.routes[i].length; k++){
        titles.push(this.routes[i][k].name);
      }
    }
    return titles;
  }
},
    mounted() {
      axios
    .get(`http://127.0.0.1:5000/dash_buses/${store.state.client_name}`)
    .then((response1) => {
      (this.buses = response1.data)
      // eslint-disable-next-line
      console.log(response1);
    },),
      axios
    .get(`http://127.0.0.1:5000/dash_routes/${store.state.client_name}`)
    .then((response2) => {
      (this.routes = response2.data)
      // eslint-disable-next-line
      console.log(response2);
    },)
  },
    methods: { 
      showRouteAdd() {
        this.$router.replace('/route');
      }
    },
};
</script>

<style>

* {
  box-sizing: border-box;
}
table {
  overflow: auto;
}
th, td {
  text-align: left;    
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}
body {
  background-color: rgb(240, 240, 240)
}
.top img {
  float: left;
  width: 8.5%;
}
h1 {
  color: white;
  text-align: center;
  margin: 8px;
  padding-right: 10%
}
.top {
  z-index: 1;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 193, 7);
  position: fixed;
}
section {
  margin-top: 80px;
}
section:after {
  content: "";
  display: table;
  clear: both;
}
/* Style page content */
.bus {
  margin-left: 1%; /* Same as the width of the sidebar */
  margin-right: 0%;
  padding: 0px 10px;
  width: 48.5%;
  height: 400px;
  float: left;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
}
.route {
  margin-right: 1%;
  padding: 0px 10px;
  width: 48.5%;
  height: 400px;
  float: right;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
  overflow: auto;
}
.route h2 {
  float: left;
  margin: 5px;
}
.route button {
  margin: 10px;
  float: left;
}
.users{
  padding: 0px 10px;
  height: 300px;
  width: 98%;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}
</style>


