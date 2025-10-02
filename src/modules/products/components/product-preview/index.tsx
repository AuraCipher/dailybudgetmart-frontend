import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="bg-white rounded-xl border-2 border-black overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.05] hover:-translate-y-1">
        <div className="relative overflow-hidden bg-grey-5">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
        <div className="p-4 space-y-2">
          <Text className="text-primary font-semibold line-clamp-2 group-hover:text-primary/80 transition-colors" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center justify-between">
            {cheapestPrice && (
              <div className="text-lg font-bold text-primary">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full border border-black/10">
              In Stock
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
