import React from "react";

const ProductListingLayout = ({ children, productList }) => {
  return (
    <div>
      <main>{children}</main>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {productList &&
                productList.map((product) => (
                  product.node &&
                    <div key={product.node.id} className="group relative">
                      <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 md:mt-4 lg:h-72 xl:h-80">
                        <img
                          src={product.node.images.edges[0].node.originalSrc}
                          //alt={product.topProduct.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {product.node.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.node.description}</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">${Math.floor(product.node.priceRange.minVariantPrice.amount)}</p>
                    </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductListingLayout;