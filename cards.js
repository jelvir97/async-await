const BASEURL = 'https://deckofcardsapi.com/api/deck/'
const $drawBtn = $('#draw-btn')
const $container = $('#card-container')
const $count = $('#count')
const $newDeck = $('#new-deck')

class Deck{
    async init(){
        let {data} = await axios.get(`${BASEURL}${this.deck_id}`)
        this.deck_id = data.deck_id
        console.log(this.deck_id)
        await this.shuffle()

    }

    async shuffle(){
        let {data} = await axios.get(`${BASEURL}${this.deck_id}/shuffle`)
        console.log(data)
    }

    async drawCard(){
        console.log(this)
        let {data} = await axios.get(`${BASEURL}${this.deck_id}/draw/?count=1`)
        this.showCard(data.cards[0].image)
        this.updateCount(data.remaining)
    }

    showCard(img){
        $container.append(`<img src="${img}" style="position:absolute; top:15px; rotate:${Math.floor(Math.random()*360)}deg">`)
    }

    updateCount(count){
        $count.text(count)
        this.count = count
    }

    deck_id = 'new';

    count = 52;


}

const deck = new Deck()

$newDeck.on('click', () =>{
                deck.init()
                $newDeck.hide()
                console.log(deck.deck_id)
})

$drawBtn.on('click', () => {deck.drawCard()})