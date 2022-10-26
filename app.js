const url = "https://cdn.contentful.com/spaces/a4hnhuvqvorr/environments/master/entries?access_token=n3cBtKhISxqyF1VjoO77y3bIZEDvc7UUKuVgcz6d9dg&content_type=triviaQ"
        $.ajax(url)
        .then((data) => {
            console.log(data)
        })