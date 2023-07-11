const clients = [
    {
        name: 'Teste',
        description: 'Lorem ipsum dolor sit amet consectetur',
        projects: [
            {
                image: 'https://images-ext-1.discordapp.net/external/4ruXRu7zm5rKR538X1ANskR5J41ZihVJGxGYDbjDmAs/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369230482237423617/2abaa661c51bfbd4d4466b6918f78d1e.png?size=',
                page: '#'
            },
            {
                image: 'https://images-ext-1.discordapp.net/external/4ruXRu7zm5rKR538X1ANskR5J41ZihVJGxGYDbjDmAs/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369230482237423617/2abaa661c51bfbd4d4466b6918f78d1e.png?size=',
                page: '#'
            },
            {
                image: 'https://images-ext-1.discordapp.net/external/4ruXRu7zm5rKR538X1ANskR5J41ZihVJGxGYDbjDmAs/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369230482237423617/2abaa661c51bfbd4d4466b6918f78d1e.png?size=',
                page: '#'
            },
        ]
    },
]

const debounce = (c, w = 1000, t = null) => {

    try {

        return (...args) => {

            clearTimeout(t)
            t = setTimeout(() => {

                c(...args)

            }, w)

        }

    } catch (Error) {

        console.error(Error.message)

    }

}

window.addEventListener('keydown', debounce((e) => {

    console.log(clients)

}, 300))