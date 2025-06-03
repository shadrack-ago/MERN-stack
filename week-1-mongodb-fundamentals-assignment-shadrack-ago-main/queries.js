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

// Aggregation Pipeline

  // 1. Average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      avgPrice: { $avg: "$price" }
    }
  }
])

// 2. Author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// 3. Books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// Task 5: Indexing
// 1. Single index on title
db.books.createIndex({ title: 1 })

// 2. Compound index
db.books.createIndex({ author: 1, published_year: 1 })
// 3. Performance comparison
// Without index
db.books.find({ title: "1984" }).explain("executionStats")
// With index
db.books.find({ title: "1984" }).hint({ title: 1 }).explain("executionStats")