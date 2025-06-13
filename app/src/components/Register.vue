<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form @submit.prevent="handleRegister" class="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

      <input
        type="email"
        v-model="email"
        placeholder="Email"
        required
        class="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
        class="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Register
      </button>

      <p class="mt-4 text-center text-sm">
        Already have an account?
        <router-link to="/login" class="text-green-600 underline">Login</router-link>
      </p>

      <p v-if="error" class="text-red-600 mt-2 text-sm text-center">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { register } from '@/services/AuthService'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  try {
    await register(email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message
  }
}
</script>
