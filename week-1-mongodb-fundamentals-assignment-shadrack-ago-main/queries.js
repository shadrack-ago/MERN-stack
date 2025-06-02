// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" })
// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
)

// 5. Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })


// Task 3: Advanced Queries

// 1. Find books in stock AND published after 2010
db.books.find({ 
  in_stock: true,
  published_year: { $gt: 2010 }
})

// 2. Projection (only title, author, price)
db.books.find(
  { genre: "Fantasy" },
  { title: 1, author: 1, price: 1, _id: 0 }
)

// 3. Sorting
// Ascending by price
db.books.find().sort({ price: 1 })
// Descending by price
db.books.find().sort({ price: -1 })

// 4. Pagination (5 books per page, 2nd page)
db.books.find()
  .skip(5)  // Skips first 5 (page 1)
  .limit(5) // Shows next 5 (page 2)