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

const clients = [
    {
        name: 'Gisele Meireles',
        description: 'Descrição da Gisele Meireles',
        photo: 'https://cdn.discordapp.com/attachments/801210889943384105/1128464520185131168/logo.png',
        projects: [
            {
                image: 'https://images-ext-1.discordapp.net/external/4ruXRu7zm5rKR538X1ANskR5J41ZihVJGxGYDbjDmAs/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369230482237423617/2abaa661c51bfbd4d4466b6918f78d1e.png?size=2048',
                page: '#'
            },
        ]
    },
    {
        name: 'Matheus Staudinger',
        description: 'Descrição do Matheus Staudinger',
        photo: 'https://cdn.discordapp.com/attachments/801210889943384105/1128464553248825424/logo.png',
        projects: [
            {
                image: 'https://images-ext-1.discordapp.net/external/4ruXRu7zm5rKR538X1ANskR5J41ZihVJGxGYDbjDmAs/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369230482237423617/2abaa661c51bfbd4d4466b6918f78d1e.png?size=2048',
                page: '#'
            },
        ]
    },
    {
        name: 'Pure Healthy',
        description: 'Descrição da Pure Healthy',
        photo: 'https://cdn.discordapp.com/attachments/801210889943384105/1128464577957470208/logo.png',
        projects: [
            {
                image: 'https://images-ext-1.discordapp.net/external/4ruXRu7zm5rKR538X1ANskR5J41ZihVJGxGYDbjDmAs/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/369230482237423617/2abaa661c51bfbd4d4466b6918f78d1e.png?size=2048',
                page: '#'
            },
        ]
    },
].sort(() => {

    return Math.random() - 0.5

})

const alreadyViewed = []
const elements = {
    infosTop: {
        self: document.querySelector('.slide .content .infos-top'),
        foto: document.querySelector('.slide .content .infos-top .foto'),
        clientInfos: {
            self: document.querySelector('.slide .content .infos-top .client-infos'),
            name: document.querySelector('.slide .content .infos-top .client-infos .name'),
            description: document.querySelector('.slide .content .infos-top .client-infos .description')
        },
        btnAction: document.querySelector('.slide .content .infos-top .btn-action')
    }
}

window.addEventListener('load', async () => {

    const client = await getClient()

    elements.infosTop.foto.src = client.photo
    elements.infosTop.clientInfos.name.textContent = client.name
    elements.infosTop.clientInfos.description.textContent = client.description

    elements.infosTop.btnAction.addEventListener('click', async () => {

        const client = await getClient()
    
        elements.infosTop.foto.src = client.photo
        elements.infosTop.clientInfos.name.textContent = client.name
        elements.infosTop.clientInfos.description.textContent = client.description
    
    })

})

async function getClient() {

    if(alreadyViewed.length == clients.length){

        while(alreadyViewed.length > 0){

            alreadyViewed.pop()

        }

    }

    const filteredClients = clients.filter((client, index) => {

        return !alreadyViewed.includes(client)

    })

    const client = filteredClients[0]

    alreadyViewed.push(client)

    return client

}