<template>
  <div>
    <h1>Бүx Автус</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Дугаар</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(x, index) in buses"
          :key="index"
        >
          <th scope="row">
            {{ x.licensenumber }}
          </th>
          <td>{{ x.phone }}</td>
          <td>{{ x.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      buses: [],
    };
  },
  mounted() {
    const infopath = 'http://localhost:5000/dash_buses/all';
    axios.get(infopath)
      .then((response) => { this.buses = response.data; });
    document.title = 'School-Bus';
  },
};
</script>
