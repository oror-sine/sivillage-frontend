import Footer from "@/components/template/layout/Footer";
import BrandProductHeader from "@/components/template/layout/header/BrandProductHeader";
import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";
import BrandProductTopNavBar from "@/components/template/layout/navbar/BrandPoructTopNavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: React.ReactNode;
  params: { brandName: string };
}

export default function RootLayout({
  children,
  params: { brandName },
}: LayoutProps) {
  brandName = decodeURI(brandName).replace("_", "/");

  // const categories = path.map((i) => decodeURI(i));
  // const filtering = { ...searchParams, categories };

  return (
    <>
      <BrandProductHeader>{brandName}</BrandProductHeader>
      <BrandProductTopNavBar {...{ brandName }} />
      {children}
      <BottomNavigationBar />
      <Footer />
    </>
  );
}
