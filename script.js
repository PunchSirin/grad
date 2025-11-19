
// ข้อมูลหลักสูตร
const courses = [
    { id: 1, title: "Graphic Design", category: "22 - 23 Nov", count: 78, desc: "หลักสูตรครอบคลุมทักษะการออกแบบกราฟิกพื้นฐานถึงมืออาชีพ", img: "https://via.placeholder.com/300x120/f77f52/fff?text=Graphic+Design" },
    { id: 2, title: "Digital Photography", category: "26 Nov", count: 64, desc: "เรียนรู้เทคนิคการถ่ายภาพดิจิทัล การจัดแสง และการแต่งภาพ", img: "https://via.placeholder.com/300x120/72b8d0/fff?text=Photography" },
   // { id: 3, title: "UI/UX Design", category: "Design", count: 92, desc: "การออกแบบส่วนต่อประสานผู้ใช้และประสบการณ์ผู้ใช้สำหรับเว็บไซต์และแอปพลิเคชัน", img: "https://via.placeholder.com/300x120/a83e60/fff?text=UI/UX" },
   // { id: 4, title: "Illustration", category: "Design", count: 56, desc: "สร้างภาพประกอบดิจิทัลและแอนะล็อกด้วยเครื่องมือหลากหลาย", img: "https://via.placeholder.com/300x120/38a3a5/fff?text=Illustration" },
    //{ id: 5, title: "Motion Graphics", category: "Design", count: 48, desc: "สร้างกราฟิกเคลื่อนไหวและวิดีโอสั้นสำหรับสื่อโซเชียล", img: "https://via.placeholder.com/300x120/ffc300/333?text=Motion" },
    //{ id: 6, title: "3D Modeling", category: "Technology", count: 42, desc: "พื้นฐานการสร้างแบบจำลอง 3 มิติสำหรับเกมและงานสถาปัตยกรรม", img: "https://via.placeholder.com/300x120/583d72/fff?text=3D+Modeling" },
    //{ id: 7, title: "Fiction Writing", category: "Writing", count: 37, desc: "เรียนรู้โครงสร้างการเขียนเรื่องสั้นและนวนิยายที่น่าสนใจ", img: "https://via.placeholder.com/300x120/3d5875/fff?text=Writing" },
    //{ id: 8, title: "Marketing Strategy", category: "Marketing", count: 55, desc: "การวางแผนกลยุทธ์การตลาดดิจิทัลและแบรนด์", img: "https://via.placeholder.com/300x120/f94144/fff?text=Marketing" },
];

const featuredImages = [

    "./IMG_0001.jpg",
    "./IMG_9955.jpg",
    "./IMG_9957.jpg",
    "./IMG_9958.jpg",
    "./IMG_9959.jpg",
    "./IMG_9967.jpg",
    "./IMG_9977.jpg",
];

// ELEMENTS
const gallery = document.getElementById('course-gallery');
const popup = document.getElementById('popup');
const featuredGallery = document.getElementById('featured-gallery');
const categoryFilterContainer = document.getElementById('category-filter-container');

// POPUP ELEMENTS
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupCount = document.getElementById('popup-count');

// ฟังก์ชันสร้าง Card หลักสูตร
function renderCourses(courseList) {
    gallery.innerHTML = ''; // ล้างเนื้อหาเดิม
    
    courseList.forEach(course => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${course.img}" alt="${course.title}" />
            <div class="content">
                <h3>${course.title}</h3>
                <p>${course.count} courses</p>
            </div>
        `;
        
        // เพิ่ม Event Listener สำหรับเปิด Popup
        card.addEventListener('click', () => {
            openPopup(course);
        });
        
        gallery.appendChild(card);
    });
}

// ฟังก์ชันสร้างรูปภาพ Featured (ปรับปรุง)
function renderFeatured() {
    featuredGallery.innerHTML = '';
    featuredImages.forEach((imgSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = `Featured Image ${index + 1}`;
        // **ลบ imgElement.style** ออก เนื่องจากย้ายไปอยู่ใน CSS แล้ว
        featuredGallery.appendChild(imgElement);
    });
    // เมื่อเรนเดอร์เสร็จ ให้เริ่มการเลื่อนอัตโนมัติ
    startAutoplay();
}

// **ฟังก์ชันใหม่: สำหรับเลื่อนอัตโนมัติ**
function startAutoplay() {
    let currentImageIndex = 0;
    const images = featuredGallery.querySelectorAll('img');
    const totalImages = images.length;

    if (totalImages === 0) return; // ไม่ต้องทำอะไรถ้าไม่มีรูป

    // ฟังก์ชันเลื่อนไปยังรูปภาพถัดไป
    const slideNext = () => {
        // เพิ่ม Index และวนกลับไป 0 ถ้าถึงรูปสุดท้าย
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        
        // คำนวณตำแหน่งที่ต้องเลื่อน (Scroll Position)
        // ตำแหน่งคือ: (index * (ความกว้างของรูปภาพ + ช่องว่าง (gap)))
        
        // ดึงความกว้างของรูปภาพ
        const imageWidth = images[0].offsetWidth; 
        
        // ใช้ 10px เป็นค่า gap (ตามที่กำหนดใน CSS)
        const gap = 10; 
        
        const scrollPosition = currentImageIndex * (imageWidth + gap);

        featuredGallery.scrollTo({
            left: scrollPosition,
            behavior: 'smooth' // ทำให้เลื่อนอย่างนุ่มนวล
        });
    };

    // ตั้งค่า Interval ให้เลื่อนทุก 3000 มิลลิวินาที (3 วินาที)
    setInterval(slideNext, 3000);
}

// ฟังก์ชันสร้างปุ่ม Category
function renderCategoryFilters() {
    categoryFilterContainer.innerHTML = '';
    
    const categories = ["All Categories", ...new Set(courses.map(c => c.category))];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category;
        button.className = category === "All Categories" ? "active" : "";

        button.addEventListener('click', () => {
            // ลบ active จากปุ่มทั้งหมด
            document.querySelectorAll('#category-filter-container button').forEach(btn => {
                btn.classList.remove('active');
            });
            // เพิ่ม active ให้ปุ่มที่ถูกคลิก
            button.classList.add('active');

            // กรองข้อมูลและแสดงผลใหม่
            const filteredCourses = category === "All Categories" 
                ? courses 
                : courses.filter(c => c.category === category);
            renderCourses(filteredCourses);
        });
        
        categoryFilterContainer.appendChild(button);
    });
}

// ฟังก์ชันจัดการ Popup
function openPopup(course) {
    popupImg.src = course.img;
    popupTitle.innerText = course.title;
    popupDesc.innerText = course.desc;
    popupCount.innerText = course.count;
    
    popup.classList.add('open');
    popup.style.display = 'flex';
}

// Event Listener สำหรับปิด Popup
document.getElementById('closePopup').addEventListener('click', () => {
    closePopup();
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

function closePopup() {
    popup.classList.remove('open');
    setTimeout(() => { popup.style.display = 'none'; }, 300);
}

// เริ่มต้นแสดงผลทั้งหมด
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderCategoryFilters();
    renderCourses(courses);
    // คุณสามารถเพิ่มฟังก์ชัน renderPagination() ที่นี่ได้
});