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
      <div data-testid="product-wrapper" className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 h-full flex flex-col">
        <div className="relative overflow-hidden bg-muted aspect-square">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5 space-y-3 flex-1 flex flex-col">
          <Text className="text-foreground font-semibold line-clamp-2 group-hover:text-primary transition-colors text-base" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center justify-between mt-auto">
            {cheapestPrice && (
              <div className="text-xl font-bold text-primary">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Available
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
