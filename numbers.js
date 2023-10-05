const favNum = 6;
const $body = $('body')

async function getMathFact(){
    let {data: fact} = await axios.get(`http://numbersapi.com/${favNum}/trivia?json`)
    console.log(fact.text)
}

// getMathFact()
// .then(res =>console.log(res))
// .catch(err =>console.log(err))

async function getTenMathFacts(){
    let {data} = await axios.get(`http://numbersapi.com/1..10/trivia?json`)
    for(num in data){
        console.log(data[num])
        $body.append(`<h2>${data[num]}</h2>`)
    }

}

async function fourFacts(){
    let facts = await Promise.all([
        axios.get(`http://numbersapi.com/${favNum}/trivia?json`),
        axios.get(`http://numbersapi.com/${favNum}/trivia?json`),
        axios.get(`http://numbersapi.com/${favNum}/trivia?json`),
        axios.get(`http://numbersapi.com/${favNum}/trivia?json`)]);
    
    for(let num in facts){
        console.log(facts[num].data.text)
        $body.append(`<h2>${facts[num].data.text}</h2>`)
    }
    
}

// getTenMathFacts()
// .then(res => {
//     const $body = $('body')
//     for(fact in res.data){
//         $body.append(`<h2>${res.data[fact]}</h2>`)
//     }

// })
// .catch(err => console.log(err))

// function getFourFacts(){
//     const arr =[]
//     for(let x = 0; x<4;x++){
//         arr.push(getMathFact())
//     }
//     return arr;
// }

// let fourFacts = getFourFacts()
// Promise.all(fourFacts)
// .then(res => {
//     const $body = $('body')
//     console.log(res)
//     for(fact in res){
//         console.log(res[fact].data.text)
//         $body.append(`<h2>${res[fact].data.text}</h2>`)
//     }
// })
// .catch(err => console.log(err))