import { getProductList } from "@/action/productAction";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/organism/product/ProductCard";
import { productClassName, sectionHead } from "@/lib/classNames";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

interface pageProps {
  params: { brandName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function page({
  params: { brandName },
  searchParams,
}: pageProps) {
  const categories = searchParams.categories;
  brandName = decodeURI(brandName).replace("_", "/");
  const filtering = { ...searchParams, brands: [brandName] };
  const products = (await getProductList(filtering)) || [];

  return (
    <main className="w-full">
      <h2 className={cn(sectionHead.h2, "px-[24px]")}>
        <span className={sectionHead.title}>
          All Product
          <span className="font-[500]">
            {categories ? `- ${categories}` : ""}
          </span>
        </span>
      </h2>
      {/* {searchParams.categories && <div className="px-[24px]">{`${searchParams.categories} 관련 상품입니다.`}</div>} */}
      <div className={productClassName.list}>
        {products.length > 0 ? (
          products.map((product) => (
            <Suspense
              key={product.productUuid}
              fallback={<ProductCardSkeleton />}
            >
              <ProductCard product={product} />
            </Suspense>
          ))
        ) : (
          <div
            className={cn(
              "w-full h-[100px]",
              "flex justify-center items-center",
            )}
          >
            관련 상품이 없습니다.
          </div>
        )}
      </div>
    </main>
  );
}
