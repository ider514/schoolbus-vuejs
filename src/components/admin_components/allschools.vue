<template>
  <div>
    <tr>
        <h1>Сургуулиуд</h1>
    </tr>
    <form>
        Нэр:<br>
        <input type="text" name="firstname" v-model="user.email"><br>
        Нүүц үг:<br>
        <input type="text" name="lastname" v-model="user.password">
    </form>
    <button>Нэмэх</button>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>Нэр</th>
        <th>Дугаар</th>
        <th>Id</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(schools) in schools" :key="schools">
        <th scope="row">{{ schools.username  }}</th>
        <td>{{ schools.buses }}</td>
        <td>{{ schools._id }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<style lang="scss">
input {
    width: 200px;
}
$color: red;
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      schools: [],
    };
  },
  mounted() {
    const infopath = 'http://localhost:5000/dash_schools';
    axios.get(infopath)
      .then((response) => { this.schools = response.data; });
    document.title = 'School-Bus';
  },
};
</script>
