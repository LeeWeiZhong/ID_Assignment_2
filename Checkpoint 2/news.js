
fetch('https://newsapi.org/v2/everything?q=covid%20cases&apiKey=3f80ba6280ee449ebbd22ab1a68dfd3f')
.then(response => response.json())
.then(function (data) 
{
    articles = data.articles;
    for (let a = 0; a < articles.length; a++)
    {

        const main = document.createElement("article");

        date = articles[a].publishedAt.substr(0,10)
        date2 = new Date(date)
            
        main.innerHTML = 
        `
        <a style = "color: #FFFFFF; text-decoration: none;"}" href = ${articles[a].url}>
            <h3> ${articles[a].title} </h3>
            <table>
                <tr>
                    <td>
                        ${date2.getDate() + ' ' +
                        ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"][date2.getMonth()] + ' ' +
                        date2.getFullYear()}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>


                    <td>
                        ${articles[a].source.name}
                    <td>
                </tr>

                <tr>
                    ${articles[a].content}
                </tr>
            </table>
        </a>
        <br> <br> <br>
        `
        document.body.appendChild(main);

    }
})

// "articles": [
//     {
//         "source": {
//             "id": "bbc-news",
//             "name": "BBC News"
//         },
//         "author": "https://www.facebook.com/bbcnews",
//         "title": "Covid: Hong Kong's hospitals overwhelmed amid spike in cases",
//         "description": "Infected patients are treated outside crowded facilities as daily cases reach a new record.",
//         "url": "https://www.bbc.co.uk/news/world-asia-china-60339746",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13B39/production/_123279608_gettyimages-1238519530.jpg",
//         "publishedAt": "2022-02-16T13:33:42Z",
//         "content": "Image source, Getty Images\r\nImage caption, Patients are being treated in makeshift open-air spaces outside overcrowded hospitals\r\nHong Kong's healthcare system has been overwhelmed by a huge surge in… [+1946 chars]"
//     },