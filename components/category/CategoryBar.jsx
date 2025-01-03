import React from 'react'
import CategoryBarItem from './CategoryBarItem';

function CategoryBar() {
   const categories = [
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp',
         id: 1,
         name: 'Nhà Cửa - Đời Sống',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp',
         id: 2,
         name: 'Điện Thoại - Máy Tính Bảng',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp',
         id: 3,
         name: 'Điện Tử - Điện Lạnh',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/78e428fdd90408587181005f5cc3de32.png.webp',
         id: 4,
         name: 'Phụ Kiện - Thiết Bị Số',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp',
         id: 5,
         name: 'Laptop - Thiết bị IT',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png.webp',
         id: 6,
         name: 'Máy Ảnh - Quay Phim',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp',
         id: 7,
         name: 'Điện Gia Dụng',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp',
         id: 8,
         name: 'Nhà Bếp',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png.webp',
         id: 9,
         name: 'Phòng Ăn',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp',
         id: 10,
         name: 'Sức Khỏe - Làm Đẹp',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp',
         id: 11,
         name: 'Thể Thao - Dã Ngoại',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png.webp',
         id: 12,
         name: 'Xe Máy - Ô tô - Xe Đạp',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp',
         id: 13,
         name: 'Hàng Quốc Tế',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/2d/7c/45/e4976f3fa4061ab310c11d2a1b759e5b.png.webp',
         id: 14,
         name: 'Sách - VPP - Quà Tặng',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/ca/53/64/49c6189a0e1c1bf7cb91b01ff6d3fe43.png.webp',
         id: 15,
         name: 'Voucher - Dịch Vụ',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp',
         id: 16,
         name: 'Thời trang - Phụ kiện',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp',
         id: 17,
         name: 'Thời trang nữ',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png.webp',
         id: 18,
         name: 'Thời trang nam',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/product/a2/74/8e/30a26a9372f650e4d47b1ebd52151d2c.png.webp',
         id: 19,
         name: 'Thời trang trẻ em',
      },
      {
         icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp',
         id: 20,
         name: 'Thời trang bé trai',
      },
   ];


   return (
      <div className='flex items-start justify-start flex-col bg-white p-4 rounded-lg'>
         {/* Category */}
         <h3 className="text-sm font-semibold">Danh mục</h3>
         {categories.map((category) => (
            <CategoryBarItem key={category.id} category={category} />
         ))}
      </div>
   )
}

export default CategoryBar
