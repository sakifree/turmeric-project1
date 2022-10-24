const apiKey = "cbbe225fe86c4eba95cd423d1daae222"

const baseURL = "https://newsapi.org/v2/everything?language=en"

const keyWordSearch = (keyword) => {
    const url = `${baseURL}&q=${keyword}&apiKey=${apiKey}`
    console.log(url)

    $.ajax(url)
    .then((data) => {
        console.log(data)

        const $main =$("main")
        data.articles.forEach((element,index) => {
            const div = $("<div>")
            div.html(`<h1>${element.title}</h1>`)
            $main.append(div)
        })
         
    })
}

console.log(keyWordSearch("steelers"))

const categorySearch = (category) => {

}

const sourceSearch = (source) => {

}

const dateSearch = (date1, date2) => {

}