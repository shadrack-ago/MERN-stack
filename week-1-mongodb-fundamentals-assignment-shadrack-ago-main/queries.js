// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" })
// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" })