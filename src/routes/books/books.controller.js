const getFictionBooks = (req, res) => {
  res.render('books/fiction', { title: 'Fiction', booksPage: true });
};

const getMysteryBooks = (req, res) => {
  res.render('books/mystery', { title: 'Mystery/Thriller', booksPage: true });
};

const getRomanceBooks = (req, res) => {
  res.render('books/romance', { title: 'Romance', booksPage: true });
};

const getScienceBooks = (req, res) => {
  res.render('books/science', { title: 'Science Fiction', booksPage: true });
};

const getFantasyBooks = (req, res) => {
  res.render('books/fantasy', { title: 'Fantasy', booksPage: true });
};

const getHistoricalBooks = (req, res) => {
  res.render('books/historical-fiction', {
    title: 'Historical Fiction',
    booksPage: true,
  });
};

const getYoungAdultBooks = (req, res) => {
  res.render('books/young-adult', { title: 'Young Adult', booksPage: true });
};

const getNonFictionBooks = (req, res) => {
  res.render('books/non-fiction', { title: 'Non-Fiction', booksPage: true });
};

const getBiographyBooks = (req, res) => {
  res.render('books/biography', { title: 'Biography/Memoir', booksPage: true });
};

const getSelfHelpBooks = (req, res) => {
  res.render('books/self-help', { title: 'Self-Help', booksPage: true });
};

const getBusinessBooks = (req, res) => {
  res.render('books/business', { title: 'Business', booksPage: true });
};

const getPsychologyBooks = (req, res) => {
  res.render('books/psychology', { title: 'Psychology', booksPage: true });
};

const getPhilosophyBooks = (req, res) => {
  res.render('books/philosophy', { title: 'Philosophy', booksPage: true });
};

const getIndianAuthorBooks = (req, res) => {
  res.render('books/indian-authors', {
    title: 'Indian Authors',
    booksPage: true,
  });
};

export {
  getFictionBooks,
  getMysteryBooks,
  getRomanceBooks,
  getScienceBooks,
  getFantasyBooks,
  getHistoricalBooks,
  getYoungAdultBooks,
  getNonFictionBooks,
  getBiographyBooks,
  getSelfHelpBooks,
  getBusinessBooks,
  getPsychologyBooks,
  getPhilosophyBooks,
  getIndianAuthorBooks,
};
