

var Quotes =
[   {text:"Be yourself; everyone else is already taken" , author:"--Oscar Wilde"},
    {text:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author:"--Albert Einstein"},
    {text:"A room without books is like a body without a soul.",author:"― Marcus Tullius Cicero"},
    {text:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",author:"― Bernard M. Baruch"},
    {text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams" , author:"― Dr. Seuss"},
    {text:"You only live once, but if you do it right, once is enough." , author:"― Mae West"},
    {text:"Be the change that you wish to see in the world." , author:"― Mahatma Gandhi"},
    {text:"In three words I can sum up everything I've learned about life: it goes on." , author:"― Robert Frost"},
    {text:"If you tell the truth, you don't have to remember anything." , author:"― Mark Twain"},
    {text:"To live is the rarest thing in the world. Most people exist, that is all" , author:"― Oscar Wilde"},

];
var lastIndex = -1; // لحفظ آخر اندكس تم اختياره
function displayQuotes() {
    var randomIndex;

    // اختيار رقم عشوائي مختلف عن السابق
    do {
        randomIndex = Math.floor(Math.random() * Quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    document.getElementById("text").innerHTML = `" ${Quotes[randomIndex].text}"`;
    document.getElementById("author").innerHTML =  Quotes[randomIndex].author;
}