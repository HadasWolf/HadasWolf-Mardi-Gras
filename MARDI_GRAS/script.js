const PAGES = {
  HOME: "home-page",
  ABOUT: "about-page",
  MEDIA: "media-page",
  FAQ: "faq-page",
  CONTACT: "contact-page",
};

//-----------------

const HOME_PAGE = document.getElementById("home-page");
const ABOUT_PAGE = document.getElementById("about-page");
const MEDIA_PAGE = document.getElementById("media-page");
const FAQ_PAGE = document.getElementById("faq-page");
const CONTACT_PAGE = document.getElementById("contact-page");

const HOME_PAGE_LINK = document.getElementById("home-page-link");
const ABOUT_PAGE_LINK = document.getElementById("about-page-link");
const MEDIA_PAGE_LINK = document.getElementById("media-page-link");
const FAQ_PAGE_LINK = document.getElementById("faq-page-link");
const CONTACT_PAGE_LINK = document.getElementById("contact-page-link");

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
MEDIA_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.MEDIA));
FAQ_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.FAQ));
CONTACT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.CONTACT));

//--------------

const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  MEDIA_PAGE.className = "d-none";
  FAQ_PAGE.className = "d-none";
  CONTACT_PAGE.className = "d-none";

  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.MEDIA) return (MEDIA_PAGE.className = "d-block");
  if (page === PAGES.FAQ) return (FAQ_PAGE.className = "d-block");
  if (page === PAGES.CONTACT) return (CONTACT_PAGE.className = "d-block");
};

//-----------------------------
