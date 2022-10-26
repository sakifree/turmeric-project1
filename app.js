const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}
}

let questions = []

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")

//console.log($p2score, $p1score)


const url = "https://cdn.contentful.com/spaces/a4hnhuvqvorr/environments/master/entries?access_token=n3cBtKhISxqyF1VjoO77y3bIZEDvc7UUKuVgcz6d9dg&content_type=triviaQ"
        $.ajax(url)
        .then((data) => {
            questions = data.items.map((q) => {
                return q.fields
            })
            console.log(data)
            console.log(questions)

        })
