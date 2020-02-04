<template>
  <div>
    <tr>
      <modal2
        v-show="isModalVisible"
        @close="closeModal"
      >
        <transition name="modal2">
          <div class="modal-mask2">
            <div class="modal-container2">
              <div class="modal-header2">
                <h3>
                  Шинэ Автобус
                </h3>
              </div>
              <div class="modal-body2">
                <form>
                  Дугаар:<br>
                  <input
                    v-model="newbus.number"
                    type="text"
                    name="firstname"
                  >
                </form>
              </div>
              <div class="modal-footer">
                <a
                  type="button"
                  class="btn btn-success"
                  @click="addBus()"
                >Нэмэх</a>
                <button
                  class="modal-default-button"
                  @click="closeModal()"
                >
                  Хаах
                </button>
              </div>
            </div>
          </div>
        </transition>
      </modal2>
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
          v-for="(x) in schools"
          :key="x"
        >
          <th scope="row">
            {{ x.username }}
          </th>
          <td>{{ x.buses }}</td>
          <td>{{ x._id }}</td>
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
      newbus: {
        number: '',
        school: '',
      },
      school: {
        email: '',
        password: '',
      },
      isModalVisible: false,
      schools: [],
    };
  },
  mounted() {
    const infopath = 'http://68.183.187.255:5000/dash_schools/1/1';
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
    showModal(school) {
      this.newbus.school = school;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addSchool() {
      const infopath = `http://68.183.187.255:5000/dash_schools/${this.school.email}/${this.school.password}`;
      axios.post(infopath)
        .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
        });
    },
    addBus() {
      const infopath = `http://68.183.187.255:5000/dash_buses/${this.newbus.school}`;
      axios.post(infopath, {'bus': this.newbus.number})
        .then((response) => {
          // eslint-disable-next-line
          console.error(response);
        })
        .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
        });
      }
    },
};
</script>

<style lang="scss">
input {
    width: 200px;
}
$color: red;
.modal-footer2 a {
  float: left;
  margin: 5px;
  background-color: rgb(255, 193, 7);
  border: none;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.modal-footer2 button {
  float: right;
  margin: 5px;
  background-color: rgb(255, 193, 7);
  border: none;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.modal-footer2 a:hover {
  background-color: purple;
}
.modal-footer2 button:hover {
  background-color: purple;
}
.modal-body2 input {
  margin: 5px 0px;
}
.modal-mask2 {
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .3s ease;
}
.modal-container2 {
  width: 400px;
  height: 250px;
  margin: 10px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header2 h3 {
  margin-top: 0;
  color: black;
}

.modal-body2 {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-footer {
    margin-bottom: 10px;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

