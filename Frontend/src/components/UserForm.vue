<template>

  <form @submit.prevent="submitForm">

    <!-- Nombre -->

    <div class="mb-3">

      <label class="form-label">
        Nombre
      </label>

      <input
        v-model="form.fullName"
        class="form-control"
        placeholder="Nombre"
      />

    </div>

    <!-- Email -->

    <div class="mb-3">

      <label class="form-label">
        Email
      </label>

      <input
        v-model="form.email"
        class="form-control"
        placeholder="Email"
      />

    </div>

    <!-- Dirección -->

    <div class="mb-3">

      <label class="form-label">
        Dirección
      </label>

      <input
        v-model="form.address"
        class="form-control"
        placeholder="Dirección"
      />

    </div>

    <!-- Usuario Activo -->

    <div class="mb-3 form-check">

      <input
        type="checkbox"
        class="form-check-input"
        id="activeCheck"
        v-model="form.userActive"
      />

      <label
        class="form-check-label"
        for="activeCheck"
      >
        Usuario Activo
      </label>

    </div>

    <!-- Licencias -->

    <div class="mb-3">

      <label class="form-label">
        Licencias (IDs separados por coma)
      </label>

      <input
        v-model="contractIdsInput"
        class="form-control"
        placeholder="1418369399,1418369477"
      />

    </div>

    <!-- Botones -->

    <div class="d-flex gap-2">

      <button class="btn btn-primary">

        {{ form.id ? 'Actualizar' : 'Guardar' }}

      </button>

      <button
        v-if="form.id"
        type="button"
        class="btn btn-secondary"
        @click="resetForm"
      >
        Cancelar
      </button>

    </div>

  </form>

</template>

<script setup>

import {
  reactive,
  ref,
  watch
} from 'vue'

const props = defineProps({
  user: Object
})

const emit = defineEmits([
  'save',
  'update',
  'cancel'
])

const form = reactive({
  id: null,
  fullName: '',
  email: '',
  address: '',
  userActive: true,
  coworkerContractIds: []
})

const contractIdsInput = ref('')

watch(() => props.user, (value) => {

  if (value) {

    form.id = value.id

    form.fullName = value.fullName

    form.email = value.email

    form.address = value.address

    form.userActive = value.userActive

    form.coworkerContractIds =
      value.coworkerContractIds || []

    contractIdsInput.value =
      form.coworkerContractIds.join(',')
  }

}, { immediate: true })

const submitForm = () => {

  form.coworkerContractIds =
    contractIdsInput.value
      ? contractIdsInput.value
          .split(',')
          .map(id => Number(id.trim()))
          .filter(id => !isNaN(id))
      : []

  if (form.id) {

    emit('update', { ...form })

  } else {

    emit('save', { ...form })
  }

  resetForm()
}

const resetForm = () => {

  form.id = null

  form.fullName = ''

  form.email = ''

  form.address = ''

  form.userActive = true

  form.coworkerContractIds = []

  contractIdsInput.value = ''

  emit('cancel')
}

</script>