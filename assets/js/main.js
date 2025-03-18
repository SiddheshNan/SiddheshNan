const skills = [
  {
    name: "Languages",
    row1: ["Python", "JavaScript", "Java"],
    row2: [ "TypeScript", "Go Lang",],
  },

  {
    name: "Web Development",
    row1: ["React JS", "React Native", "Next JS"],
    row2: ["Flask/FastAPI", "Django", "Node JS"],
  },

  {
    name: "Databases",
    row1: ["MySQL", "Redis"],
    row2: ["MongoDB", "InfluxDB"],
  },

  {
    name: "Frontend Frameworks",
    row1: ["Tailwind CSS", "Material UI", "Bootstrap"],
    row2: ["Chakra UI", "Ant Design", "Styled Components"],
  },



 

  // {
  //   name: "Embedded Systems",
  //   row1: ["PIC/AVR", "Espressif boards"],
  //   row2: ["RaspberryPi/Jetson Nano", "Firmware Development"],
  // },

  // {
  //   name: "Artificial Intelligence",
  //   row1: ["GenAI / LLMs", "LangChain / LangGraph", "Llama Index"],
  //   row2: ["LLM Agents", "Tensorflow", "Scikit"],
  // },

  {
    name: "DevOps & Cloud",
    row1: ["CI / CD", "Git , Linux", "AWS & Azure"],
    row2: ["Docker", "Kubernates", "Serverless"],
  },

  {
    name: "Non-Technical Skills",
    row1: [
      "Strategic Problem-Solving",
      "Proactive and Continuous Learner",
      //"Decision Making"
    ],
    row2: [
      "Data-Driven Decision Making",
      "Effective Communication and Active Listening",
    ],
  },
];

//---

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 48,
  },
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link", "fade-in");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link", "fade-in");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  selectedTheme === "light" && (themeButton.checked = true);
} else {
  // no localstorage found
  themeButton.checked = true;
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  renderRecaptchaCallback();
});

var renderRecaptchaCallback = function () {
  const recaptcha_parent = document.getElementById("recaptcha_parent");
  recaptcha_parent.innerHTML = "";

  const recaptcha_element = document.createElement("div");
  recaptcha_element.setAttribute("class", "g-recaptcha");
  recaptcha_element.setAttribute("id", "recaptcha");
  recaptcha_parent.appendChild(recaptcha_element);

  grecaptcha.render(document.getElementById("recaptcha"), {
    sitekey: "6LcobDsfAAAAAJ5SkZfzeqgRB6SufTNWDmJyojTK",
    callback: console.log,
    theme: localStorage.getItem("selected-theme") == "dark" ? "light" : "dark",
  });
};

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const dataToPost = {
    name: formData.get("name"),
    email: formData.get("email"),
    msg: formData.get("msg"),
    gRecaptchaResponse: formData.get("g-recaptcha-response"),
  };

  if (!dataToPost.gRecaptchaResponse)
    return alert("Please tick the recaptcha checkbox!");

  try {
    const contactReq = await fetch("https://siddhesh.me/api/contact", {
      body: JSON.stringify(dataToPost),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const resp = await contactReq.json();

    grecaptcha.reset();
    e.target.reset();

    if (resp?.error) {
      console.log(resp);
      return alert("Oh No! Somthing went wrong.. Please try again later.");
    }

    alert("Thanks! I'll reach out to you as soon as possible!");
  } catch (error) {
    console.log(error);
    alert("Oh No! Somthing went wrong! Please try again later.");
  }
});

const showPage = () => {
  document.body.style.zoom = "102%";

  document.getElementById("loader-container").style.display = "none";

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400,
    // reset: true
  });

  sr.reveal(`.home__data`);
  sr.reveal(`.home__handle`, { delay: 700 });
  sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });

  AOS.init();

  new Typewriter(document.getElementById("introSubtitle"), {
    loop: true,
    delay: 75,
  })
    .pauseFor(25)
    .typeString(
      "<img style='height: 1.6rem; width:1.6rem;  vertical-align: text-bottom;' src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-technologist_1f468-200d-1f4bb.png' alt='man technologist' /> Full Stack Developer ✨"
    )
    .pauseFor(2222)
    .deleteAll(25)
    // .typeString("Aspiring Data Engineer 🎯 ")
    // .pauseFor(2222)
    // .deleteAll(25)

    // .typeString(
    //   `<img style='height: 1.6rem; width:1.6rem;  vertical-align: text-bottom;' src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-student_1f468-200d-1f393.png' alt='Student' /> IT'2023 Graduate from Sipna COET, Amravati 🏫`
    // )
    // .pauseFor(2222)
    // .deleteAll(25)

    .start();
};

function parseMarkdown(markdownText) {
  const textAttr =
    'style="margin-bottom: 0.75rem; text-align: center" data-aos="zoom-in-up"';

  const htmlText = markdownText
    .replace(/^###### (.*$)/gim, `<p ${textAttr}>$1</p>`)
    .replace(/^##### (.*$)/gim, `<p ${textAttr}>$1</p>`)
    .replace(/^#### (.*$)/gim, `<p ${textAttr}>$1</p>`)
    .replace(/^### (.*$)/gim, `<h6 ${textAttr}>$1</h6>`)
    .replace(/^## (.*$)/gim, `<h5 ${textAttr}>$1</h5>`)
    .replace(/^# (.*$)/gim, `<h3 ${textAttr}>$1</h3>`)
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(
      /\[(.*?)\]\((.*?)\)/gim,
      "<a style='color: var(--first-color)' href='$2'>$1</a>"
    );
  // .replace(/\n$/gim, "<br />");

  return htmlText.trim();
}

const introDescription = document.getElementById("intro-description");

// const getUserInfo = async () => {
//   try {
//     const req = await fetch("https://api.github.com/users/siddheshnan");
//     const data = await req.json();
//     // subTitle.innerHTML = data.bio.replace(/\r\n/g, "<br />");
//   } catch (error) {
//     console.error(error);
//   }
// };

const getAboutInfo = async () => {
  try {
    const req = await fetch("/README.md");
    const data = await req.text();
    const introData = data.split("<!-- INTRO_END -->")[0];
    const introHtml = parseMarkdown(introData)
      .replace('style="height:30px;width:30px;display:block;"', "")
      .replace('width="30px"', 'width="22px"')
      .replace('height="30px"', 'height="22px"');
    introDescription.innerHTML = introHtml;
  } catch (error) {
    console.error(error);
  }
};

const getBlogItemsApi = async () => {
  try {
    const req = await fetch("https://blog.siddhesh.me/index.json");
    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const skillItem = (_skillName) => `
  <div class="skills__data">
    <i class="bx bxs-badge-check"></i>
    <div>
      <h3 class="skills__name">${_skillName}</h3>
    </div>
  </div>`;

const blogItem = (item) => {
  // item.image is a picture component html string, find a src component in it

  let pictureSrc = item.image.match(/src="([^"]*)"/)[1];

  if (pictureSrc.startsWith("/")) {
    pictureSrc = `https://blog.siddhesh.me${pictureSrc}`;
  }

  console.log(pictureSrc);

  return `<div class="work__card mix web">
          <a href="${
            item.permalink
          }" target="_blank" style="color: var( --text-color)">
            <h3 class="work__title">${item.title}</h3>
            <h6 class="work__date">${item.date}</h6>
            <img src="${pictureSrc}" alt="${item.title}" class="work__img" />
            <h5 class="work__subtitle">${String(item.contents).slice(
              0,
              200
            )}...</h5>
            </a>
            <a href="${item.permalink}" target="_blank" class="work__button">
              Read More <i class="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>`;
};

const skillBox = (_skillitem) => `
    <div class="skills_content" data-aos="zoom-in-up">
      <h3 class="skills__title">${_skillitem.name}</h3>
      <div class="skills__box">
        <div class="skills__group">
          ${_skillitem.row1.map((_item) => skillItem(_item)).join("")}
        </div>
        <div class="skills__group">
          ${_skillitem.row2.map((_item) => skillItem(_item)).join("")}
        </div>
      </div>
    </div>
`;

window.onload = () => {
  document.getElementById("skillsContainer").innerHTML = skills
    .map((_skillblock) => skillBox(_skillblock))
    .join("");

  // getBlogItemsApi()
  //   .then((data) => {
  //     document.getElementById("blogContainer").innerHTML = data
  //       .map((_blogItem) => blogItem(_blogItem))
  //       .join("");
  //   })
  //   .catch(console.error);

  // Promise.all([getUserInfo(), getAboutInfo()])
  //   .then(showPage)
  //   .catch(console.error);

  getAboutInfo().then(showPage).catch(console.error);
};
