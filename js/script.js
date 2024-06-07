///////////////////////////////////////////////////////////

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 765) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Navigate to local HTML file
    if (href !== "#" && href.endsWith(".html")) {
      window.location.href = href;
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Functions related to login, logout, and session management
function checkLoginAndRedirect(bookUrl) {
  console.log("checkLoginAndRedirect() called with URL:", bookUrl);
  if (isLoggedIn()) {
    window.location.href = bookUrl;
  } else {
    sessionStorage.setItem("redirectUrl", window.location.href);
    window.location.href = "login.html";
  }
}

function isLoggedIn() {
  return sessionStorage.getItem("user-creds") !== null;
}

function toggleSignOutButton() {
  const signOutButton = document.getElementById("signoutbutton");
  const loginButton = document.querySelector(".nav-feedback");

  if (isLoggedIn()) {
    signOutButton.style.display = "block";
    loginButton.style.display = "none";
  } else {
    signOutButton.style.display = "none";
    loginButton.style.display = "block";
  }
}

document.getElementById("signoutbutton").addEventListener("click", function () {
  // Clear user credentials and favorites from session storage
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");

  // Clear wishlist from local storage
  localStorage.removeItem("wishlist");

  // Refresh the page
  window.location.reload();
});

///////////////////////////////////////////////////////////
// Function to toggle favorite button state
function toggleFavoriteButton(bookId) {
  const bookElement = document.getElementById(bookId);

  // Check if the book element exists
  if (bookElement) {
    const favoriteButton = bookElement.querySelector(".btn--favorite");
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isBookInWishlist = wishlist.some((item) => item.id === bookId);

    if (isBookInWishlist) {
      favoriteButton.classList.add("active");
    } else {
      favoriteButton.classList.remove("active");
    }
  }
}

///////////////////////////////////////////////////////////
// Event listener to update favorite button state on page load
window.addEventListener("load", function () {
  document.querySelectorAll(".book").forEach(function (bookElement) {
    const bookId = bookElement.id;
    toggleFavoriteButton(bookId);
  });
});

toggleSignOutButton();

function isBookInWishlist(bookId, wishlist) {
  return wishlist.some((item) => item.id === bookId);
}

///////////////////////////////////////////////////////////
// Function to add a book to the wishlist
function addToWishlist(bookId) {
  if (isLoggedIn()) {
    const bookElement = document.getElementById(bookId);
    const genre = bookElement.querySelector(".tag").innerText;
    const title = bookElement.querySelector(".book-title").innerText;
    const author = bookElement.querySelector(".author-text").innerText;
    const pages = bookElement.querySelector(
      ".book-attributes li:nth-child(2) span"
    ).innerText;
    const imageSrc = bookElement.querySelector(".book-img").src;

    const imageName = imageSrc.substring(imageSrc.lastIndexOf("/") + 1);

    const readUrl = bookElement
      .querySelector(".btn--read")
      .getAttribute("onclick")
      .replace("checkLoginAndRedirect('", "")
      .replace("')", "");

    const wishlistItem = {
      id: bookId,
      genre: genre,
      title: title,
      author: author,
      pages: pages,
      image: imageName,
      readUrl: readUrl,
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!isBookInWishlist(bookId, wishlist)) {
      wishlist.push(wishlistItem);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Book added to favorites!");
    } else {
      alert("Book already in favorites!");
    }
  } else {
    alert("Please log in to add books to your favorites.");
    sessionStorage.setItem("redirectUrl", window.location.href);
    window.location.href = "login.html";
  }
}
