<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form @submit.prevent="handleLogin" class="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

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
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>

      <p class="mt-4 text-center text-sm">
        Don’t have an account?
        <router-link to="/register" class="text-blue-600 underline">Register</router-link>
      </p>

      <p v-if="error" class="text-red-600 mt-2 text-sm text-center">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/services/AuthService'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  try {
    await login(email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message
  }
}
</script>
