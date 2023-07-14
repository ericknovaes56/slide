const clients = [
    {
        name: 'Gisele Meireles',
        description: 'Descrição da Gisele Meireles',
        photo: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/icongs.png',
        images: [
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342377721_1322063631704741_5339397734611834695_n_1080-1.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342373556_888794072225970_6394532793165796485_n_1080-1.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342280851_231521492885132_5469276481783619988_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342101572_768162264720561_3240492123577296049_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342083275_1411824366221165_5357967678716503921_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342067728_749248463361735_8298239884568301860_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342065312_698465782053602_7578099195561972987_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_342039584_756499279431425_3093297704798233902_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_339145169_1269735400298651_4063940089860892140_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_338756439_602068328649375_970361855913615907_n_1080.jpg',
            },
        ]
    },
    {
        name: 'Matheus Staudinger',
        description: 'Descrição do Matheus Staudinger',
        photo: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/iconms-1.png',
        images: [
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_349040524_989746442016645_1782292294069088091_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/m1.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348749239_276612601469460_905745581815246018_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348862042_1804157626646932_7698996856201145835_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348670622_937757114157421_4157285723538284629_n_1080.jpg',
            },
            {
                image: 'https://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348664033_1380204189487913_7907616534426737778_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348662650_127263963697782_6036216806623176685_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348654148_205637658971834_6024116929798325022_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348647709_1610231812834414_5296188404553254524_n_1080.jpg',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/Snapinsta.app_348488684_1034266564203321_7536135470659574564_n_1080.jpg',
            },
        ]
    },
    {
        name: 'Pure Healthy',
        description: 'Descrição da Pure Healthy',
        photo: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/iconpure.png',
        images: [
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p5.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p8.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p6.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p7.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p9.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p10.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p1.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p2.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p3.png',
            },
            {
                image: 'http://jhonzzera.com.br/wp-content/uploads/2023/07/p4.png',
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
    },
    slideContainer: {
        self: document.querySelector('.slide .content .slide-container'),
        actions: {
            self: document.querySelector('.slide .content .slide-container .actions'),
            childs: document.querySelectorAll('.slide .content .slide-container .actions .action'),
        },
        images: {
            self: document.querySelector('.slide .content .slide-container .images .group'),
            childs: document.querySelectorAll('.slide .content .slide-container .images .group .image'),
        }
    }
}

window.addEventListener('load', async () => {

    const carouselResizeObserver = new ResizeObserver(async (entries) => {

        for (entry of entries){

            const currentImage = Array.from(elements.slideContainer.images.childs).filter((child) => {

                return child.classList.contains('current')
                
            })[0]
            const currentImageIndex = Array.from(elements.slideContainer.images.childs).indexOf(currentImage)

            if(currentImageIndex > 0){

                await scrollCarousel(elements.slideContainer.images.childs[currentImageIndex - 1], 'right')

            }

        }

    })

    carouselResizeObserver.observe(elements.slideContainer.self)

    const client = await getClient()

    elements.infosTop.foto.src = client.photo
    elements.infosTop.clientInfos.name.textContent = client.name
    elements.infosTop.clientInfos.description.textContent = client.description

    if(client.images.length > 0){

        client.images.forEach(async (project, index) => {

            const projectContainer = document.createElement('div')
            const projectImage = document.createElement('img')

            projectContainer.classList.add('image')

            projectImage.src = project.image

            projectContainer.appendChild(projectImage)
            elements.slideContainer.images.self.appendChild(projectContainer)

        })

        elements.slideContainer.images.childs = elements.slideContainer.images.self.childNodes

        await scrollCarousel(elements.slideContainer.images.childs[0], 'right')

    }

    elements.infosTop.btnAction.addEventListener('click', async () => {

        const client = await getClient()
    
        elements.infosTop.foto.src = client.photo
        elements.infosTop.clientInfos.name.textContent = client.name
        elements.infosTop.clientInfos.description.textContent = client.description

        if(client.images.length > 0){

            elements.slideContainer.images.self.innerHTML = null;

            client.images.forEach(async (project, index) => {
    
                const projectContainer = document.createElement('div')
                const projectImage = document.createElement('img')

                projectContainer.classList.add('image')
    
                projectImage.src = project.image
    
                projectContainer.appendChild(projectImage)
                elements.slideContainer.images.self.appendChild(projectContainer)
    
            })

            elements.slideContainer.images.childs = elements.slideContainer.images.self.childNodes

            await scrollCarousel(elements.slideContainer.images.childs[0], 'right')
    
        }
    
    })

    elements.slideContainer.actions.childs.forEach((action) => {

        action.addEventListener('click', async () => {
            
            let currentImage = Array.from(elements.slideContainer.images.childs).filter((image) => {
    
                return image.classList.contains('current')
    
            })[0]

            const currentImageIndex = Array.from(elements.slideContainer.images.childs).indexOf(currentImage)
            const direction = action.dataset.direction

            if((currentImageIndex == 0 && direction == 'left') || (currentImageIndex == elements.slideContainer.images.childs.length - 1 && direction == 'right')){

                return

            }
            
            await scrollCarousel(currentImage, action.dataset.direction)

        })

    })

    elements.slideContainer.images.childs.forEach((image, index) => {

        image.addEventListener('click', async () => {
            
            await scrollCarousel(image)

        })

    })

})

async function scrollCarousel(currentImage, direction) {

    elements.slideContainer.images.childs.forEach((image) => {

        image.classList.remove('hide')
        image.classList.remove('current')

    })

    const newCurrentImage = direction ? currentImage[`${direction == 'right' ? 'next' : 'previous'}Sibling`] : currentImage
    
    newCurrentImage.classList.add('current')

    const newcurrentImageIndex = Array.from(elements.slideContainer.images.childs).indexOf(newCurrentImage)
    const offset = (newCurrentImage.clientWidth * -(newcurrentImageIndex - 1)) + 'px'

    for(let i = 0; i < newcurrentImageIndex - 1; i++){

        hideImage(elements.slideContainer.images.childs[i], i)

    }

    for(let i = newcurrentImageIndex + 2; i < elements.slideContainer.images.childs.length; i++){

        hideImage(elements.slideContainer.images.childs[i], (i - newcurrentImageIndex))
        
    }
    
    function hideImage(image, distanceOfZero) {

        if(image){
            
            image.classList.add('hide')
    
        }

    }

    elements.slideContainer.images.self.style.transform = `translateX(${offset})`

}

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