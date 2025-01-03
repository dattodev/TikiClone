'use client';
import HomeBanner from '@/components/banner/HomeBanner';
import BenefitBar from '@/components/benefit/BenefitBar';
import CategoryBar from '@/components/category/CategoryBar';
import Collection from '@/components/collections/Collection';
import HomeCollection from '@/components/collections/HomeCollection';

export default function Home() {
	const banners = [
		[
			{
				id: 1,
				title: 'Mua sắm trực tuyến',
				link: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/29/9f/b4/0bcd706db4024fe83c5c90faddfc3872.jpg.webp',
			},

			{
				id: 2,
				title: 'Mua sắm trực tuyến',
				link: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/e9/00/d4/80a7b83a61eedfa95e1243157678e818.png.webp',
			},
		],

		[
			{
				id: 3,
				title: 'Mua sắm trực tuyến',
				link: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/da/df/e6/be5863bedab42c5fa28d073d9a9c8dc3.png.webp',
			},

			{
				id: 4,
				title: 'Mua sắm trực tuyến',
				link: 'https://salt.tikicdn.com/cache/w750/ts/tikimsp/e8/47/52/d71192cc4cee1a717b9bcd49464ca82c.jpg.webp',
			},
		],
	];

	const collections = [
		{
			id: 1,
			icon: 'https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png',
			title: 'TOP DEAL',
			link: '/collections/top-deal',
		},
		{
			id: 2,
			icon: 'https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png',
			title: 'Tiki Trading',
			link: '/collections/tiki-trading',
		},
		{
			id: 3,
			icon: 'https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png',
			title: 'Coupon siêu hot',
			link: '/collections/coupon-sieu-hot',
		},
		{
			id: 4,
			icon: 'https://salt.tikicdn.com/ts/upload/a5/d8/06/cb6ff520f12973013c81a8b14ad5e5b3.png',
			title: 'Xả kho giảm nửa giá',
			link: '/collections/xa-kho-giam-nua-gia',
		},
		{
			id: 5,
			icon: 'https://salt.tikicdn.com/ts/upload/cf/46/d1/e474a9eb803909a59927600ee64ddd4f.png',
			title: 'Hàng ngoại giá hot',
			link: '/collections/hang-ngoai-gia-hot',
		},
		{
			id: 6,
			icon: 'https://salt.tikicdn.com/cache/750x750/ts/upload/d7/b9/cf/185c3ea4d118574d7927f3d191575445.jpg.webp',
			title: 'Cùng mẹ chăm bé',
			link: '/collections/cung-me-cham-be',
		},
		{
			id: 7,
			icon: 'https://salt.tikicdn.com/cache/750x750/ts/upload/28/52/b2/e77e55676a38e02c5ac7242cc43f46dc.jpg.webp',
			title: 'Mọt sách Tiki',
			link: '/collections/mot-sach-tiki',
		},
		{
			id: 8,
			icon: 'https://salt.tikicdn.com/cache/750x750/ts/upload/25/a7/1f/5538b19e95600da86e1241082fb631bf.jpg.webp',
			title: 'Thế giới công nghệ',
			link: '/collections/the-gioi-cong-nghe',
		},
		{
			id: 9,
			icon: 'https://salt.tikicdn.com/cache/750x750/ts/upload/03/f9/44/343e3b73c1e600e3c16b97843dc04bb1.jpg.webp',
			title: 'Yêu bếp nghiện nhà',
			link: '/collections/yeu-bep-nghien-nha',
		},
		{
			id: 10,
			icon: 'https://salt.tikicdn.com/cache/750x750/ts/upload/ea/d3/81/a4ed0166b6abb19c3cfa3a48fadafd02.jpg.webp',
			title: 'Khỏe đẹp toàn diện',
			link: '/collections/khoe-dep-toan-dien',
		},
	];

	const sectionCollections = [
		{
			id: 1,
			title: 'Điện thoại - Máy tính bảng',
			link: '/collections/dien thoai-may-tinh-bang',
			products: [
				{
					id: 1,
					title: 'Điện thoại iPhone 13 Pro Max 256GB',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/fa/1d/33/98a0ed962d4b27b6526a93fac7aab192.png.webp',
					price: 33990000,
					discount: 0,
					brand: 'Apple',
					description: 'Điện thoại iPhone 13 Pro Max 256GB',
				},
				{
					id: 2,
					title: 'Điện thoại Samsung Galaxy Z Fold3 5G 256GB',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/8e/df/28/ec782f73bff18cae3557178562269da0.png.webp',
					price: 33990000,
					discount: 0,
					brand: 'Samsung',
					description: 'Điện thoại Samsung Galaxy Z Fold3 5G 256GB',
				},
				{
					id: 3,
					title: 'Máy tính bảng Samsung Galaxy Tab S7 FE 5G 128GB',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/67/10/29/ac56377124137b8d45e559af534eee5b.png.webp',
					price: 33990000,
					discount: 0,
					brand: 'Samsung',
					description:
						'Máy tính bảng Samsung Galaxy Tab S7 FE 5G 128GB',
				},
			],
		},
		{
			id: 2,
			title: 'Điện tử - Điện lạnh',
			link: '/collections/dien-tu-dien-lanh',
			products: [
				{
					id: 4,
					title: 'Smart Tivi Samsung 4K 55 inch UA55AU7000KXXV',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/73/6d/08/3f94537f53eaeaa741340ff5bb286ef0.jpg.webp',
					price: 33990000,
					discount: 0,
					brand: 'Samsung',
					description: 'Smart Tivi Samsung 4K 55 inch UA55AU7000KXXV',
				},
				{
					id: 5,
					title: 'Máy giặt Toshiba Inverter 7.5 kg AW-J800AUP WB',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/61/e1/1f/cff30650b77b75223d5f141c47d7aab1.png.webp',
					price: 33990000,
					discount: 0,
					brand: 'Toshiba',
					description:
						'Máy giặt Toshiba Inverter 7.5 kg AW-J800AUP WB',
				},
				{
					id: 6,
					title: 'Tủ lạnh Panasonic Inverter 234 lít NR-BL267PSVN',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/84/81/0b/a045c53c7fc704a27dffa9eb5f99e6ef.jpg.webp',
					price: 33990000,
					discount: 0,
					brand: 'Panasonic',
					description:
						'Tủ lạnh Panasonic Inverter 234 lít NR-BL267PSVN',
				},
			],
		},
		{
			id: 3,
			title: 'Mẹ & Bé',
			link: '/collections/me-be',
			products: [
				{
					id: 7,
					title: 'Bỉm Merries cho bé sơ sinh 0-5kg 90 miếng',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/49/9e/a8/b69b92c5f9179ebb7178decfbf825464.jpg.webp',
					price: 33990000,
					discount: 0,
					brand: 'Merries',
					description: 'Bỉm Merries cho bé sơ sinh 0-5kg 90 miếng',
				},
				{
					id: 8,
					title: 'Sữa bột Ensure Gold 850g hương vani',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/21/96/c3/e02b62401992d50405feb0a3baba4139.jpg.webp',
					price: 33990000,
					discount: 0,
					brand: 'Ensure',
					description: 'Sữa bột Ensure Gold 850g hương vani',
				},
				{
					id: 9,
					title: 'Ghế tập ngồi',
					image: 'https://salt.tikicdn.com/cache/750x750/ts/product/54/49/48/3babeaa83772961f291cf8364ce74f74.jpg.webp',
					price: 33990000,
					discount: 20,
					brand: 'Tiki',
					description: 'Ghế tập ngồi',
				},
			],
		},
	];

	return (
		<div className="w-full h-full px-[80px] gap-4 bg-[var(--background)] py-4 flex items-start justify-start">
			{/* Category bar */}
			<div className="w-[240px] min-h-[100vh] rounded-lg flex flex-col gap-4">
				<CategoryBar />
				<BenefitBar />
			</div>
			{/* Product sections */}
			<div className="flex-1 overflow-hidden min-h-[100vh] rounded-lg">
				<div className="bg-white p-4 rounded-lg">
					<HomeBanner banners={banners} />
				</div>
				<div className="bg-white p-4 rounded-lg mt-4">
					<HomeCollection collections={collections} />
				</div>
				<div className="mt-4 flex flex-col gap-4">
					{sectionCollections.map((section) => (
						<Collection
							key={section.id}
							collectionName={section.title}
							collectionId={section.id}
							collectionProducts={section.products}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
