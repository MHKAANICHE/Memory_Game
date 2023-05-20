const cardArray =[
    {
        name:'one',
        img:'img/1.png'
    },
    {
        name:'two',
        img:'img/2.png'
    },
    {
        name:'three',
        img:'img/3.png'
    },
    {
        name:'four',
        img:'img/4.png'
    },
    {
        name:'five',
        img:'img/5.png'
    },
    {
        name:'six',
        img:'img/6.png'
    },
    {
        name:'one',
        img:'img/1.png'
    },
    {
        name:'two',
        img:'img/2.png'
    },
    {
        name:'three',
        img:'img/3.png'
    },
    {
        name:'four',
        img:'img/4.png'
    },
    {
        name:'five',
        img:'img/5.png'
    },
    {
        name:'six',
        img:'img/6.png'
    }
]

let chosenArray =[]
let chosenArrayId =[]
const cardWon =[]
const shuffleCard = cardArray.sort(() => 0.5 - Math.random()) // shuffle an array randomly 
console.log(shuffleCard)
const grid = document.querySelector('#grid')

function creatBoard () {
    for (let i=0; i<(cardArray.length); i++){
        const card = document.createElement('img')
        card.setAttribute('src','img/7.png')
        card.setAttribute('data_id',i)
        card.setAttribute('id','img')
        card.addEventListener('click', flipCard) // attention - not invoquing the function
        grid.appendChild(card)
    }
}
creatBoard ()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const result = document.querySelector('#result')

    const optionOneId = chosenArrayId[0]
    const optionTwoId = chosenArrayId[1]

    if ( optionOneId == optionTwoId){
        alert('you clicked the same image - Try again ! ')
        cards[optionOneId].setAttribute('src','img/7.png')
    }else{    
        if(chosenArray[0]==chosenArray[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','img/X.png')
            cards[optionTwoId].setAttribute('src','img/X.png')
            cards[optionOneId].removeEventListener('click', flipCard) // Stop listening 
            cards[optionTwoId].removeEventListener('click', flipCard) // Stop listening 
            cardWon.push(chosenArray)
        } else {
            alert('Try again !')
            cards[optionOneId].setAttribute('src','img/7.png')
            cards[optionTwoId].setAttribute('src','img/7.png')
            
        }
    }
    result.textContent = cardWon.length
    chosenArray =[]
    chosenArrayId =[]

    if (cardWon.length == cardArray.length/2)
    {
        result.textContent='Congratulation you found them all !'
    }


}

function flipCard() {
    const cardId = this.getAttribute('data_id')
    chosenArray.push(shuffleCard[cardId].name)
    chosenArrayId.push(cardId)
    this.setAttribute('src', shuffleCard[cardId].img)
    if (chosenArray.length === 2 ){
        setTimeout(checkMatch, 500)
    }
    
    console.log('clicked !',chosenArray)
}
