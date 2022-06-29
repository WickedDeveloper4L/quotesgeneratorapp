 function generate() {
        let quotes = {
            "- Benjamin franklin" : '"Without continual growth and progress, such words as improvement, achievement, and success have no meaning."',
            "- Bill Gates" : '"Success is a lousy teacher. It seduces smart people into thinking they cant lose."',
            "- Doug Larson" : '"A true friend is one who overlooks your failures and tolerates your success."',
            "- Bill Bradley" : '"Ambition is the path to success. Persistence is the vehicle you arrive in."',
            "- Pele" : '"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do."',
            "- Bobby Unser" : '"Success is where preparation and opportunity meet."',
            "- Franklin D. Roosevelt" : '"Happiness lies in the joy of achievement and the thrill of creative effort."',
            "- Colin Powell" : '"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence."',
            "- Henry Ford" : '"Coming together is a beginning; keeping together is progress; working together is success."',
            "- Patricia Cornwell" : '"Survival was my only hope, success my only revenge."',
        }

        let authors = Object.keys(quotes);
        let author = authors[Math.floor(Math.random() * authors.length)];

        let quote = quotes[author];

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;
}