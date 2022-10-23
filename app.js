const apiKey = "cbbe225fe86c4eba95cd423d1daae222"

const baseURL = "https://newsapi.org/v2/everything?language=en"

const keyWordSearch = (keyword) => {
    const url = `${baseURL}&q=${keyword}&apiKey=${apiKey}`
    console.log(url)

    $.ajax(url)
    .then((articles) => {
        console.log(articles)

        const $main = $("main")
        $main.empty()

    })
}

console.log(keyWordSearch("black panther"))

const categorySearch = (category) => {

}

const sourceSearch = (source) => {

}

const dateSearch = (date1, date2) => {

}