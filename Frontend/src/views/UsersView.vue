<template>

  <div class="container mt-4">

    <div class="d-flex justify-content-between mb-3">

      <h2>Usuarios</h2>

      <button
        class="btn btn-success"
        @click="sync"
      >
        Sincronizar
      </button>

    </div>

    <UserForm
      :user="selectedUser"
      @save="saveUser"
      @update="editUser"
      @cancel="cancelEdit"
    />

    <hr />

    <UserTable
      :users="users"
      @delete="removeUser"
      @edit="selectUser"
    />

  </div>

</template>

<script setup>

import {
  onMounted,
  ref
} from 'vue'

import UserForm from '../components/UserForm.vue'

import UserTable from '../components/UserTable.vue'

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  syncUsers
} from '../api/userService'

const users = ref([])

const selectedUser = ref(null)

const loadUsers = async () => {

  const response = await getUsers()

  users.value = response.data
}

const saveUser = async (data) => {

  await createUser(data)

  loadUsers()
}

const editUser = async (data) => {

  await updateUser(data.id, data)

  selectedUser.value = null

  loadUsers()
}

const removeUser = async (id) => {

  await deleteUser(id)

  loadUsers()
}

const selectUser = (user) => {

  selectedUser.value = user
}

const cancelEdit = () => {

  selectedUser.value = null
}

const sync = async () => {

  await syncUsers()

  loadUsers()
}

onMounted(() => {
  loadUsers()
})

</script>