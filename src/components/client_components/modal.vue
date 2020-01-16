<script>
// import axios from 'axios';
// import store from '@/store/store.js';
  export default {
    name: 'Modal',
        data() {
      return {
        stop: {
          lon: '',
          lat: '',
          name: '',
        }
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      addRoute(){
        this.$store.commit('setStop', this.stop);
        this.$emit('close');
      }
    },
  };
</script>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>
              Маршрут Нэмэх
            </h3>
          </div>

          <div class="modal-body">
            <form>
              Нэр:<br>
              <input
                v-model="stop.name"
                type="text"
                name="firstname"
              ><br>
              Өргөрөг:<br>
              <input
                v-model="stop.lat"
                type="text"
                name="firstname"
              ><br>
              Уртраг:<br>
              <input
                v-model="stop.lon"
                type="text"
                name="lastname"
              >
            </form>
          </div>

          <div class="modal-footer">
            <button
              class="modal-default-button"
              @click="addRoute()"
            >
              Нэмэх
            </button>
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >
              Хаах
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-mask {
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
.modal-container {
  width: 500px;
  height: 500px;
  margin: 10px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
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