<template>
  <div>
    <tr>
      <h1>Сургуулиуд</h1>
    </tr>
    <form>
      Сургуулийн нэр:<br>
      <input
        v-model="school.email"
        type="text"
        name="firstname"
      ><br>
      Нүүц үг:<br>
      <input
        v-model="school.password"
        type="text"
        name="lastname"
      >
    </form>
    <button
      type="button"
      @click="addSchool()"
    >
      Нэмэх
    </button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Нэр</th>
          <th>Дугаар</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(schools) in schools"
          :key="schools"
        >
          <th scope="row">
            {{ schools.username }}
          </th>
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
      school: {
        email: '',
        password: '',
      },
      schools: [],
    };
  },
  mounted() {
    const infopath = 'http://localhost:5000/dash_schools/1/1';
    axios.get(infopath)
      .then((response) => {
        this.schools = response.data;
        // eslint-disable-next-line
      console.log(response);})
      .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
      });
    document.title = 'School-Bus';
  },
  methods: {
    addSchool() {
      const infopath = `http://localhost:5000/dash_schools/${this.school.email}/${this.school.password}`;
      axios.post(infopath)
        // .then((response) => {
        //   if (response.data === 'sucess') {
        //   }
        // })
        .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
        });
    },
  },
};
</script>
