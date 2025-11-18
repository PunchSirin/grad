export class PhotoService {

    // 1. ข้อมูลรูปภาพ (Mock Data)
    getImagesData() {
        return [
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            }
            // สามารถเพิ่มรูปภาพอื่น ๆ ได้ตามต้องการ
        ];
    }

    // 2. เมธอดหลักสำหรับดึงข้อมูล (จำลองการทำงานแบบ Asynchronous)
    getImages() {
        // ในโปรเจกต์จริง เมธอดนี้จะใช้ fetch() หรือ axios
        // แต่ในตัวอย่างจำลองนี้ เราจะใช้ Promise เพื่อให้ทำงานเหมือนการเรียก API จริง
        return new Promise((resolve) => {
            // จำลองการหน่วงเวลา 100ms
            setTimeout(() => {
                resolve(this.getImagesData());
            }, 100); 
        });
    }
}