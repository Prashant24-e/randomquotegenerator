const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Whatever you are be a good one", author: "Abraham Lincoln" },
        { text: "Life is really simple but we insist on making it complicated", author: "Confucius" },
        { text: "Happiness depends upon ourselves", author: "Aristotle" },
        { text: "Success is not final failure is not fatal it is the courage to continue that counts", author: "Winston Churchill" },
        { text: "The only true wisdom is in knowing you know nothing", author: "Socrates" },
        { text: "Do not go where the path may lead go instead where there is no path and leave a trail", author: "Ralph Waldo Emerson" },
        { text: "Turn your wounds into wisdom", author: "Oprah Winfrey" },
        { text: "What we think we become", author: "Buddha" },
        { text: "You miss 100 percent of the shots you do not take", author: "Wayne Gretzky" },
        { text: "Injustice anywhere is a threat to justice everywhere", author: "Martin Luther King Jr." },
        { text: "Life is short and it is up to you to make it sweet", author: "Sarah Louise Delany" },
        { text: "Peace begins with a smile", author: "Mother Teresa" },
        { text: "A room without books is like a body without a soul", author: "Marcus Tullius Cicero" },
        { text: "Be yourself everyone else is already taken", author: "Oscar Wilde" },
        { text: "The journey of a thousand miles begins with one step", author: "Lao Tzu" },
        { text: "To live is the rarest thing in the world most people exist that is all", author: "Oscar Wilde" },
        { text: "It is never too late to be what you might have been", author: "George Eliot" },
        { text: "If opportunity does not knock build a door", author: "Milton Berle" },
        { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us", author: "Ralph Waldo Emerson" },
        { text: "Simplicity is the ultimate sophistication", author: "Leonardo da Vinci" },
        { text: "Act as if what you do makes a difference it does", author: "William James" },
        { text: "You only live once but if you do it right once is enough", author: "Mae West" },
        { text: "Everything you can imagine is real", author: "Pablo Picasso" },
        { text: "The future belongs to those who believe in the beauty of their dreams", author: "Eleanor Roosevelt" },
        { text: "Do what you can with what you have where you are", author: "Theodore Roosevelt" },
        { text: "Every moment is a fresh beginning", author: "T S Eliot" },
        { text: "I have not failed I have just found 10000 ways that will not work", author: "Thomas Edison" },
        { text: "To handle yourself use your head to handle others use your heart", author: "Eleanor Roosevelt" },
        { text: "Courage is grace under pressure", author: "Ernest Hemingway" },
        { text: "All limitations are self imposed", author: "Oliver Wendell Holmes" },
        { text: "A goal without a plan is just a wish", author: "Antoine de Saint Exupéry" },
        { text: "If you want to fly give up everything that weighs you down", author: "Toni Morrison" },
        { text: "The mind is everything what you think you become", author: "Buddha" },
        { text: "You are enough just as you are", author: "Meghan Markle" },
        { text: "Live for each second without hesitation", author: "Elton John" },
        { text: "Life is the flower for which love is the honey", author: "Victor Hugo" },
        { text: "Believe you can and you are halfway there", author: "Theodore Roosevelt" },
        { text: "What you do today can improve all your tomorrows", author: "Ralph Marston" },
        { text: "Everything has beauty but not everyone sees it", author: "Confucius" },
        { text: "Light tomorrow with today", author: "Elizabeth Barrett Browning" },
        { text: "Time you enjoy wasting is not wasted time", author: "Marthe Troly-Curtin" },
        { text: "He who opens a school door closes a prison", author: "Victor Hugo" },
        { text: "I never dreamed about success I worked for it", author: "Estée Lauder" },
        { text: "If you tell the truth you do not have to remember anything", author: "Mark Twain" },
        { text: "The best way out is always through", author: "Robert Frost" },
        { text: "Do not let yesterday take up too much of today", author: "Will Rogers" },
        { text: "To love and be loved is to feel the sun from both sides", author: "David Viscott" },
        { text: "If you are going through hell keep going", author: "Winston Churchill" },
        { text: "Make each day your masterpiece", author: "John Wooden" },
        { text: "Dream big and dare to fail", author: "Norman Vaughan" }
      
      
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerText = quote.text;
    document.getElementById('author').innerText = `— ${quote.author}`;
}

document.getElementById('generate').addEventListener('click', generateQuote);