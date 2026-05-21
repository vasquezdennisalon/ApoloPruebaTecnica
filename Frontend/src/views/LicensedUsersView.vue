<template>

  <div class="container mt-4">

    <h2>Usuarios con Licencia</h2>

    <UserTable :users="users" />

  </div>

</template>

<script setup>

import { onMounted, ref } from 'vue'

import UserTable from '../components/UserTable.vue'

import { getLicensedUsers }
from '../api/userService'

const users = ref([])

const loadUsers = async () => {

  const response =
    await getLicensedUsers()

  users.value = response.data
}

onMounted(() => {
  loadUsers()
})
</script>