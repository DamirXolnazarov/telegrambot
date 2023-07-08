import { createStore } from "vuex"

export default createStore({

    state: {
        users: [
            {
                firstName: 'Damir',
                lastName: 'Xolnazarov',
                email: 'damir777xolnazarov@gmail.com',
                phone: '+998 77 777 77 77',
                password: 'damir2008'
            },
            {
                firstName: 'Davlat',
                lastName: 'Xojiyev',
                email: 'davlatxoj@gmail.com',
                phone: '+998 34 344 54 22',
                password: 'password1'
            },
            {
                firstName: 'Sardor',
                lastName: 'Mannonov',
                email: 'sardormann@gmail.com',
                phone: '+998 94 542 46 23',
                password: 'helloworld'
            },

        ],
    },
    getters: {
        users: (state) => state.users
    },
    mutations: {
        ADD_USER_MUTATION(state, obj) {
            state.users.push(obj)
            console.log(state.users);
        },

    },

    actions: {
        ADD_USER({ commit, state }, obj) {
            commit("ADD_USER_MUTATION", obj)
        },
    },

    modules: {
    },
})