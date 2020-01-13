<template>
  <div>
    <div class="sidebar sidebar-dark bg-dark">
      <ul class="list-unstyled">
        <li>
          <router-link
            to="/allbuses"
            class="nav-link"
          >
            <i class="icon fa fa-home" /> Автуснууд
          </router-link>
        </li>
        <li>
          <router-link
            to="/allschools"
            class="nav-link"
          >
            <i class="icon fa fa-edit" /> Сургуулиуд
          </router-link>
        </li>
        <li>
          <router-link
            to="/alerts"
            class="nav-link"
          >
            <i class="icon fa fa-comment-alt" /> Alerts
          </router-link>
        </li>
        <li>
          <router-link
            to="/tables"
            class="nav-link"
          >
            <i class="icon fa fa-table" /> Tables
          </router-link>
        </li>
        <li>
          <router-link
            to="/login"
            class="nav-link"
          >
            <i class="icon fa fa-sign-in-alt" /> Login
          </router-link>
        </li>
        <li>
          <router-link
            to="/register"
            class="nav-link"
          >
            <i class="icon fa fa-user-plus" /> Register
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>
