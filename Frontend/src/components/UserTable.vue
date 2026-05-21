<template>

    <table class="table table-bordered">

        <thead>

            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Dirección</th>
                <th>Activo</th>
                <th>Licencias</th>
                <th>Acciones</th>
            </tr>

        </thead>

        <tbody>

            <tr v-for="user in users" :key="user.id">

                <td>{{ user.fullName }}</td>

                <td>{{ user.email }}</td>

                <td>{{ user.address }}</td>

                <td>

                    <span v-if="user.userActive" class="badge bg-success">
                        Activo
                    </span>

                    <span v-else class="badge bg-danger">
                        Inactivo
                    </span>

                </td>

                <td>

                    <span v-if="user.coworkerContractIds?.length > 0" class="badge bg-primary">
                        {{ user.coworkerContractIds.length }}
                    </span>

                    <span v-else class="badge bg-secondary">
                        Sin licencia
                    </span>

                </td>

                <td class="d-flex gap-2">

                    <button class="btn btn-warning btn-sm" @click="$emit('edit', user)">
                        Editar
                    </button>

                    <button class="btn btn-danger btn-sm" @click="$emit('delete', user.id)">
                        Eliminar
                    </button>

                </td>

            </tr>

        </tbody>

    </table>

</template>

<script setup>

defineProps({
    users: Array
})

defineEmits([
    'edit',
    'delete'
])

</script>