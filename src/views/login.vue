<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form @submit.prevent="onSubmit" class="space-y-6 justify-start flex-col">
                <div class="row">
                    <label for="email" class="flex flex-col">
                        <span class="font-semibold">Email Address</span>
                        <input id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email"
                            placeholder="Email">
                    </label>
                </div>
                <div class="row">
                    <label for="password" class="flex flex-col">
                        <span class="font-semibold">Password</span>
                        <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
                            placeholder="............">
                    </label>
                </div>

                <div class="row">
                    <button type="submit"
                        class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">Sign
                        In</button>
                </div>

            </form>
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm a new member.</span>
                <span class="ml-1">
                    <router-link :to="{ name: 'Register', params: {} }" class="text-primary font-bold">Sign Up</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        function onSubmit() {

        }
        return {
            onSubmit
        }
    }
}
</script>