
const books = [
    { title: "The Midnight Library", genre: "Fantasy", publish: 2020, edition: "1st" },
    { title: "Educated", genre: "Biography", publish: 2018, edition: "2nd" },
    { title: "Project Hail Mary", genre: "Sci-Fi", publish: 2021, edition: "1st" },
    { title: "Where the Crawdads Sing", genre: "Mystery", publish: 2018, edition: "Reprint" },
    { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: "3rd" },
    { title: "Dune", genre: "Sci-Fi", publish: 1965, edition: "Deluxe" },
    { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: "1st" },
    { title: "Thinking, Fast and Slow", genre: "Psychology", publish: 2011, edition: "International" },
    { title: "Sapiens", genre: "History", publish: 2011, edition: "Revised" },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: "Student" },
    { title: "Normal People", genre: "Romance", publish: 2018, edition: "1st" },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: "Illustrated" },
    { title: "Bad Blood", genre: "True Crime", publish: 2018, edition: "1st" },
    { title: "Neuromancer", genre: "Sci-Fi", publish: 1984, edition: "Anniversary" },
    { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: "25th Anniversary" },
    { title: "Gone Girl", genre: "Thriller", publish: 2012, edition: "1st" },
    { title: "The Catcher in the Rye", genre: "Classic", publish: 1951, edition: "Standard" },
    { title: "Klara and the Sun", genre: "Sci-Fi", publish: 2021, edition: "1st" },
    { title: "The Power of Habit", genre: "Self-Help", publish: 2012, edition: "2nd" },
    { title: "A Game of Thrones", genre: "Fantasy", publish: 1996, edition: "Leather-bound" },
    { title: "Steve Jobs", genre: "Biography", publish: 2011, edition: "1st" },
    { title: "The Girl with the Dragon Tattoo", genre: "Mystery", publish: 2005, edition: "US Edition" },
    { title: "Man's Search for Meaning", genre: "Psychology", publish: 1946, edition: "Pocket" },
    { title: "The Da Vinci Code", genre: "Thriller", publish: 2003, edition: "Special Illustrated" },
    { title: "Foundation", genre: "Sci-Fi", publish: 1951, edition: "1st" },
    { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960, edition: "50th Anniversary" },
    { title: "Brave New World", genre: "Dystopian", publish: 1932, edition: "Harper Perennial" },
    { title: "1984", genre: "Dystopian", publish: 1949, edition: "Signet Classics" },
    { title: "The Book Thief", genre: "Historical Fiction", publish: 2005, edition: "1st" },
    { title: "Pride and Prejudice", genre: "Classic", publish: 1813, edition: "Penguin Classics" },
    { title: "The Hunger Games", genre: "YA Dystopian", publish: 2008, edition: "Collector's" },
    { title: "The Fellowship of the Ring", genre: "Fantasy", publish: 1954, edition: "2nd" },
    { title: "Good to Great", genre: "Business", publish: 2001, edition: "Hardcover" },
    { title: "Zero to One", genre: "Business", publish: 2014, edition: "1st" },
    { title: "Shoe Dog", genre: "Biography", publish: 2016, edition: "1st" },
    { title: "The Subtitle Art of Not Giving a F*", genre: "Self-Help", publish: 2016, edition: "1st" },
    { title: "Guns, Germs, and Steel", genre: "History", publish: 1997, edition: "Revised" },
    { title: "The Psychopath Test", genre: "Psychology", publish: 2011, edition: "1st" },
    { title: "Snow Crash", genre: "Sci-Fi", publish: 1992, edition: "20th Anniversary" },
    { title: "The Goldfinch", genre: "Fiction", publish: 2013, edition: "1st" },
    { title: "American Gods", genre: "Fantasy", publish: 2001, edition: "Author's Preferred" },
    { title: "The Road", genre: "Post-Apocalyptic", publish: 2006, edition: "1st" },
    { title: "Shutter Island", genre: "Thriller", publish: 2003, edition: "Media Tie-In" },
    { title: "Big Little Lies", genre: "Mystery", publish: 2014, edition: "1st" },
    { title: "The Immortal Life of Henrietta Lacks", genre: "Science", publish: 2010, edition: "1st" },
    { title: "Brief Answers to the Big Questions", genre: "Science", publish: 2018, edition: "1st" },
    { title: "The Martian", genre: "Sci-Fi", publish: 2011, edition: "Classroom" },
    { title: "Deep Work", genre: "Self-Help", publish: 2016, edition: "1st" },
    { title: "The Overstory", genre: "Fiction", publish: 2018, edition: "1st" },
    { title: "Circe", genre: "Fantasy", publish: 2018, edition: "1st" }
];


let userBooks = books.filter((bk) => bk.genre === "Classic")
//  console.log(userBooks);

userBooks = books.filter( (bk) => {

    return bk.publish >= 2000 && bk.genre === "Fiction" })
    
console.log(userBooks);
