const getFictionBooks = (req, res) => {
  res.render('books/fiction', { title: 'Fiction' });
};

const getMysteryBooks = (req, res) => {
  res.render('books/mystery', { title: 'Mystery/Thriller' });
};

const getRomanceBooks = (req, res) => {
  res.render('books/romance', { title: 'Romance' });
};

const getScienceBooks = (req, res) => {
  res.render('books/science', { title: 'Science Fiction' });
};

const getFantasyBooks = (req, res) => {
  res.render('books/fantasy', { title: 'Fantasy' });
};

const getHistoricalBooks = (req, res) => {
  res.render('books/historical-fiction', { title: 'Historical Fiction' });
};

const getYoungAdultBooks = (req, res) => {
  res.render('books/young-adult', { title: 'Young Adult' });
};

const getNonFictionBooks = (req, res) => {
  res.render('books/non-fiction', { title: 'Non-Fiction' });
};

const getBiographyBooks = (req, res) => {
  res.render('books/biography', { title: 'Biography/Memoir' });
};

const getSelfHelpBooks = (req, res) => {
  res.render('books/self-help', { title: 'Self-Help' });
};

const getBusinessBooks = (req, res) => {
  res.render('books/business', { title: 'Business' });
};

const getPsychologyBooks = (req, res) => {
  res.render('books/psychology', { title: 'Psychology' });
};

const getPhilosophyBooks = (req, res) => {
  res.render('books/philosophy', { title: 'Philosophy' });
};

const getIndianAuthorBooks = (req, res) => {
  res.render('books/indian-authors', { title: 'Indian Authors' });
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
