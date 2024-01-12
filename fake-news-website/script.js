let news = [
    {
        headline: "watch hesh landing on the moon",
        summary: "He landed with his super jet",
    },
    {
        headline: "lorem ipsum",
        summary: "sapien. Ut at mi sed eros auctor eleifend. Al",
    },
    {
        headline: "Donec tincidunt urna in placerat elementum. ",
        summary: "Nunc malesuada massa et lacus rutrum consequat. Cras ac lectus cursus, tempor quam ut, vulputate sapien.",
    },
];


function createNews(){

    let newsArticle = ""

    const allNews = (news.length);
    console.log(allNews);

    for(let i = 0; i < allNews; i++) {
        newsArticle += `
    <div class="container">
        <h2>${news[i].headline}</h2>
        <p>${news[i].summary}</p>
    </div>
    `
    }
    return newsArticle
}

let newsContainer = document.querySelector(".container");

newsContainer.innerHTML = createNews(news);

createNews()