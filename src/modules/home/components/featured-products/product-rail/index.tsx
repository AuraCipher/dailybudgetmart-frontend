import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-16">
      <div className="flex flex-col small:flex-row justify-between items-start small:items-center mb-8 gap-4">
        <h2 className="text-3xl small:text-4xl font-bold text-foreground">{collection.title}</h2>
        <InteractiveLink href={`/collections/${collection.handle}`} className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 group">
          View all 
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </InteractiveLink>
      </div>
      {/* Horizontal scrolling row with better styling */}
      <div className="relative -mx-6 px-6 small:mx-0 small:px-0">
        <ul className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {pricedProducts &&
            pricedProducts.map((product) => (
              <li key={product.id} className="flex-none w-[280px] small:w-[320px] snap-start">
                <ProductPreview product={product} region={region} isFeatured />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
