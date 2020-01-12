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
      <tr v-for="buses in buses" :key="buses">
        <th scope="row">{{ buses.licensenumber  }}</th>
        <td>{{ buses.phone }}</td>
        <td>{{ buses.id }}</td>
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
