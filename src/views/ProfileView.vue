<template>
    <div class="profile flex flex-col pt-[50px] items-center w-[100%] h-[100vh]">
        <h1 class="text-5xl">Hello {{ this.obj.firstName }} {{ this.obj.lastName }}</h1>
        <div class="w-[500px] h-[200px] mt-[50px] flex flex-col items-start justify-between">
            <span class="text-2xl">Your password: {{ this.obj.password }} </span>
            <span class="text-2xl">Your phone: {{ this.obj.phone }} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileView',
    data() {
        return {
            obj: JSON.parse(window.localStorage.profile),
        };
    },
}
</script>

<style scoped></style>