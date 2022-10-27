const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {},
    which: true
}

let questions = []

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")
const $playerTurn = $("#turn")

//console.log($p2score, $p1score)

const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer){
        console.log("correct")
        if(state.which){
            state.player1++
            state.which = !state.which
        } else {
            state.player2++
            state.which = !state.which
        }
        setBoard(questions)
    } else {
        console.log("incorrect")
        //setBoard(questions)
        state.which = !state.which
    }
} 

const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    $question.text(randomQuestion.ques)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    $p1score.text(state.player1)
    $p2score.text(state.player2) 

    $("li").off()
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    })
}


const url = "https://cdn.contentful.com/spaces/a4hnhuvqvorr/environments/master/entries?access_token=n3cBtKhISxqyF1VjoO77y3bIZEDvc7UUKuVgcz6d9dg&content_type=triviaQ"
        $.ajax(url)
        .then((data) => {
            questions = data.items.map((q) => {
                return q.fields
            })
            console.log(data)
            console.log(questions)

            setBoard(questions)

        })
