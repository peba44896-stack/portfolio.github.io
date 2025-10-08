
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


AOS.init({
  duration: 1000,
  once: true
});


const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close-btn");

const projectsData = {
  1: { title: "คำนวณเพชร Honkai Star Rail", img: "สกรีนช็อต 2025-10-07 123211.png", desc: "เว็บเครื่องมือช่วยคำนวณจำนวนเพชรในเกม Honkai Star Rail เพื่อดูโอกาสเปิดตัวละคร เว็บนี้สร้างขึ้นโดยใช้ HTML,css,js", link: "https://peba44896-stack.github.io/honkaispin.github.io/" },
  2: { title: "เว็บประวัติของgojo satoru", img: "สกรีนช็อต 2025-10-07 122933.png", desc: "เว็บไซต์เป็นเว็ปไซต์ที่ผลหัดและลองใช้HTML,CSSเป็นครั้งแรก", link: "https://peba44896-stack.github.io/gojosatoru.github.io/" },
  3: { title: "เกมทายสถานที่จากอนิเมะ", img: "สกรีนช็อต 2025-10-07 122619.png", desc: "เว็บนี้เป็นเว็บที่ผมหัดพื้นฐานของjavascript", link: "https://peba44896-stack.github.io/map.github.io/" },
  4: { title: "เว็บทายตัวละครจากhonkai star rail", img: "สกรีนช็อต 2025-10-07 122438.png", desc: "เว็บนี้เป็นเว็ปที่ผมทำมาเพื่อให้เล่นทายอนิเมะกันสนุกๆ เว็บนี้สร้างขึ้นโดยใช้ HTML,css,js", link: "https://peba44896-stack.github.io/honkai-.github.io/" },
  5: { title: "เว็บฟังเพลง จากเรื่องyour name", img: "สกรีนช็อต 2025-10-07 122729.png", desc: "เว็ปนี้เป็นการให้คนที่ชอบฟังเพลงของyour nameได้เข้ามาฟัง เว็บนี้สร้างขึ้นโดยใช้HTML,css,js", link: "https://peba44896-stack.github.io/music.github.io/" },
  6: { title: "เว็ปสุ่มreliceจากเกม honkai star rail", img: "สกรีนช็อต 2025-10-07 210137.png", desc: "เว็ปนี้สร้างขึ้นเพื่อให้เพื่อนๆของผมได้ของใช้เทสดวงการสุ่มreliceของตัวเอง เว็บนี้สร้างขึ้นโดยใช้HTML,css,js ", link: "https://peba44896-stack.github.io/relice.github.io/" },
  7: { title: "เว็บคำนวณหน่วยกิต", img: "สกรีนช็อต 2025-10-07 130250.png", desc: "เว็บนี้สร้างมาเพื่อคำนวณหน่วยกิตและเกรดเฉลี่ยของแต่ละวิชา เว็บนี้สร้างขึ้นโดยใช้HTML,css,js", link: "https://peba44896-stack.github.io/GPA.github.io/" }
};


document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-project");
    const p = projectsData[id];
    modalTitle.textContent = p.title;
    modalImg.src = p.img;
    modalDesc.textContent = p.desc;
    modalLink.href = p.link;
    modal.style.display = "flex";
  });
});


closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });


