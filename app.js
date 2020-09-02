(function(){

    const quotes = [
        {
            quote:"A room without books is like a body without a soul. ",
            writer:"Marcus Tullius Cicero"
        },
        {
            quote:"If you tell the truth, you don't have to remember anything.",
            writer:"Mark Twain"
        },
        {
            quote:"A friend is someone who knows all about you and still loves you. ",
            writer:"Elbert Hubbard"
        },
        {
            quote:"Always forgive your enemies; nothing annoys them so much. ",
            writer:"Oscar Wilde"
        },
        {
            quote:"To the well-organized mind, death is but the next great adventure ",
            writer:"J.K. Rowling,"
        },
        {
            quote:"I'm not afraid of death; I just don't want to be there when it happens. ",
            writer:"Woody Allen"
        },
        {
            quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",
            writer:"Mark Twain"
        },
        {
            quote:"Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read. ",
            writer:"Groucho Marx"
        },

    ]


    const btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
        let random = Math.floor(Math.random() * quotes.length);
        console.log(Math.random() * quotes.length);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.getElementById("author").textContent = quotes[random].writer;
    })

})();