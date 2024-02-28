// header gifts event listener 
const home = document.querySelectorAll("#ppp")
for (const hh of home) {
    hh.addEventListener("mouseenter", () => {
        hh.style.textDecoration = "underline"
        hh.style.color = "black solid 2px "
    })
    hh.addEventListener("mouseleave", () => {
        hh.style.textDecoration = "none"
        hh.style.color = "black solid 2px"
    })
}

// womens collection
const video = document.querySelector("#shop")
video.addEventListener("mouseenter", () => {
    video.style.backgroundColor = "black"
    video.style.color = "white"
})
video.addEventListener("mouseleave", () => {
    video.style.backgroundColor = "transparent"
    video.style.color = 'black'
})


// mens collection
const mens = document.querySelector("#hop")
mens.addEventListener("mouseenter", () => {
    mens.style.backgroundColor = "white"
    mens.style.color = "black"
})
mens.addEventListener("mouseleave", () => {
    mens.style.backgroundColor = "transparent"
    mens.style.color = 'white'
})


// first two cards function
const cardone = [{
    imgUrl: "https://www.prada.com/content/dam/pradanux/home_page/2024/02/SS24_Woman/mosaic_iconic_2/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp",
    hh: "Prada Buckle",
    shop: "SHOP"
}
]

function createCard(prada) {
    const bigDiv = document.createElement("div")
    bigDiv.classList.add("bigdiv")

    const littleDiv = document.createElement("div")
    littleDiv.classList.add("littleDiv")

    const image = document.createElement("img")
    image.src = prada.imgUrl
    littleDiv.appendChild(image)

    const pDiv = document.createElement("div")
    pDiv.classList.add("ddiv")

    const hopper = document.createElement("h2")
    hopper.textContent = prada.hh

    const jop = document.createElement("p")
    jop.classList.add("shop-cards")
    jop.textContent = prada.shop

    pDiv.appendChild(hopper)
    pDiv.appendChild(jop)

    bigDiv.appendChild(littleDiv)
    bigDiv.appendChild(pDiv)
    return bigDiv
}
let container = document.querySelector(".cardd")
for (let card of cardone) {
    let cat = createCard(card)
    container.appendChild(cat)
}

// second cart function
const cardtwo = [
    {
        imgUrl: "https://www.prada.com/content/dam/pradanux/home_page/2024/02/SS24_Woman/mosaic_iconic_2/Card_2_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp",
        text: "Prada Re-Edition 1978",
        sweet: "SHOP"
    }
]

function createCardtwo(shop) {
    const bigdiv = document.createElement("div")
    bigdiv.classList.add("bigdiv")

    const littlediv = document.createElement("div")
    littlediv.classList.add("littleDiv")

    const image = document.createElement("img")
    image.src = shop.imgUrl
    littlediv.appendChild(image)

    const pDi = document.createElement("div")
    pDi.classList.add("ediv")

    const hoppe = document.createElement("h2")
    hoppe.textContent = shop.text

    const jo = document.createElement("p")
    jo.textContent = shop.sweet

    pDi.appendChild(hoppe)
    pDi.appendChild(jo)

    bigdiv.appendChild(littlediv)
    bigdiv.appendChild(pDi)
    return bigdiv
}
let cont = document.querySelector(".cardtwo")
for (let two of cardtwo) {
    let car = createCardtwo(two)
    cont.appendChild(car)
}

// event listener first card
const firstImage = document.querySelector(".shop-cards")
firstImage.addEventListener("mouseenter", () => {
    firstImage.style.backgroundColor = "white"
    firstImage.style.color = "black"
})
firstImage.addEventListener("mouseleave", () => {
    firstImage.style.backgroundColor = "transparent"
    firstImage.style.color = 'white'
})

// event listener second card
const secImage = document.querySelector(".ediv p")
secImage.addEventListener("mouseenter", () => {
    secImage.style.backgroundColor = "white"
    secImage.style.color = "black"
})
secImage.addEventListener("mouseleave", () => {
    secImage.style.backgroundColor = "transparent"
    secImage.style.color = 'white'
})


// event listener third video
const third = document.querySelector("#beau")
third.addEventListener("mouseenter", () => {
    third.style.backgroundColor = "white"
    third.style.color = "black"
})
third.addEventListener("mouseleave", () => {
    third.style.backgroundColor = "transparent"
    third.style.color = 'white'
})



// third  and fourth card witr fetch api
const womenbags = [
    //     {
    //      imgUrl:"img/womenbag.avif",
    //      text:"Women's Bags",
    //      shop:"SHOP"
    //    },
    //     {
    //         imgUrl:"img/mensbag.jpg_large",
    //         text:"Men's Bags",
    //         shop:"SHOP"
    //     }

]

// console.log(JSON.stringify(womenbags)) //js ке айналдырып аламыз

function thirdCard(three) {
    const div = document.createElement("div")
    div.classList.add("third_card")

    const lDi = document.createElement("div")
    lDi.classList.add("imgdiv")

    const bigDiv = document.createElement("div")
    bigDiv.classList.add("bigger")

    const imgg = document.createElement("img")
    imgg.src = three.imgUrl

    const htext = document.createElement("h2")
    htext.textContent = three.text
    bigDiv.appendChild(htext)

    const ptext = document.createElement("p")
    ptext.textContent = three.shop
    bigDiv.appendChild(ptext)

    div.appendChild(bigDiv)
    lDi.appendChild(imgg)
    div.appendChild(lDi)

    return div
}



let care = document.querySelector(".three")
womenbags.forEach((product) => {
    care.appendChild(thirdCard(product));
});


const urll = "https://65d750ee27d9a3bc1d7aba23.mockapi.io/cards"
fetch(urll)
    .then((response) => response.json())
    // .then((data)=>data.results)
    .then((data) => {
        data.forEach((product) => {
            care.appendChild(thirdCard(product));
        });

        const thcards = document.querySelectorAll(".bigger p")

        for (const thcard of thcards) {
            thcard.addEventListener("mouseenter", () => {
                thcard.style.backgroundColor = "black"
                thcard.style.color = "white"
            })
            thcard.addEventListener("mouseleave", () => {
                thcard.style.backgroundColor = "transparent"
                thcard.style.color = "black"
            })
        }
    })

// .catch((error)=>{
//     const cards=document.querySelector(".cards")
//     cards.innerHTML=<p>Error occured.Error:${error}</p>
// })




// last video event listener
const collec = document.querySelector("#loop")
collec.addEventListener("mouseenter", () => {
    collec.style.backgroundColor = "white"
    collec.style.color = "black"
})
collec.addEventListener("mouseleave", () => {
    collec.style.backgroundColor = "transparent"
    collec.style.color = 'white'
})

const collecs = document.querySelector("#loops")
collecs.addEventListener("mouseenter", () => {
    collecs.style.backgroundColor = "white"
    collecs.style.color = "black"
})
collecs.addEventListener("mouseleave", () => {
    collecs.style.backgroundColor = "transparent"
    collecs.style.color = 'white'
})


// add event listener to img right
// const image=document.querySelector(".innp")
// image.addEventListener("mouseenter",()=>{
//     image.textContent="You have registered!"
// })
// image.addEventListener("mouseleave",()=>{
// })

// add event listener
const ppp=document.querySelector("footer p")
ppp.addEventListener("mouseenter", () => {
    ppp.style.backgroundColor = "white"
    ppp.style.color = "black"
})
ppp.addEventListener("mouseleave", () => {
    ppp.style.backgroundColor = "transparent"
    ppp.style.color = 'white'
})

