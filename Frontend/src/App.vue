<template>

  <nav class="navbar navbar-expand navbar-dark bg-dark">

    <div class="container">

      <router-link
        to="/"
        class="navbar-brand"
      >
        Apolo prueba técnica
      </router-link>

      <div class="navbar-nav">

        <router-link
          to="/"
          class="nav-link"
        >
          Usuarios
        </router-link>

        <router-link
          to="/licensed"
          class="nav-link"
        >
          Licenciados
        </router-link>

      </div>

    </div>

  </nav>

  <router-view />

</template>