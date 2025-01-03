'use strict';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layouts/Layout';

const fonts = Be_Vietnam_Pro({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata = {
	title: 'TIKI - The Easiest Way To Shop Online',
	description: 'The Easiest Way To Shop Online',
};

export default function RootLayout({ children, Component, pageProps }) {
	return (
		<html lang="en">
			<body className={`${fonts.className} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
