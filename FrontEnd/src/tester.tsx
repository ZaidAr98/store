// import { ReactNode, createContext, useContext, useEffect, useState } from "react";
// import { ILoading } from "../../global/types/loading";
// import { useMutation } from "react-query";
// import { mutationProcessor } from "../Helpers/mutationProcessor";
// import { PropValue, Color, Product, Products, ProductSelection } from "./product";
// import { fetchCategoryProductsRequest, fetchOneProductRequest, fetchStoreProductsRequest } from "./product.request";
// import { utils } from "../../global/utils";

// type ProductContextType = {
//   //  Data
//   product: Product | null;
//   setProduct: (value: Product) => void;
//   products: Products | null;
//   categoryProducts: Products | null;
//   categoryProductsCount: number;
//   storeProducts: Products | null;
//   storeProductsCount: number;
//   setProducts: (value: Products) => void;
//   allowBuyButton: boolean;
//   productSelection: ProductSelection | null;
//   setProductSelection: (value: object) => void;
//   // Loadings
//   productLoading: ILoading;
//   setProductLoading: (value: ILoading) => void;
//   // controllers
//   // fetchProductsController: (req: { body: object }) => void;
//   fetchCategoryProductsController: (req: { param: string; body: object }) => void;
//   fetchOneProductController: (req: { param: string }) => void;
//   fetchStoreProductsController: (req: { param: string; body: object }) => void;
// };
// interface Props {
//   children?: ReactNode;
//   // any props that come into the component
// }
// export const ProductContext = createContext<ProductContextType>({
//   product: null,
//   setProduct: (value: Product) => {},
//   allowBuyButton: false,
//   products: null,
//   categoryProducts: null,
//   categoryProductsCount: 0,
//   storeProducts: null,
//   storeProductsCount: 0,
//   setProducts: (value: Products) => {},
//   productSelection: null,
//   setProductSelection: (value: ProductSelection) => {},
//   // Loadings
//   productLoading: {},
//   setProductLoading: (value: ILoading) => {},
//   // controllers
//   // fetchProductsController: (req: { body: object }) => {},
//   fetchCategoryProductsController: (req: { body: object }) => {},
//   fetchOneProductController: (req: { param: string }) => {},
//   fetchStoreProductsController: (req: { param: string; body: object }) => {},
// });

// export const ProductContextProvider = ({ children }: Props) => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [products, setProducts] = useState<Products | null>(null);
//   const [categoryProducts, setCategoryProducts] = useState<Products | null>(null);
//   const [storeProducts, setStoreProducts] = useState<Products | null>(null);
//   const [storeProductsCount, setStoreProductsCount] = useState<number>(0);
//   const [productLoading, setProductLoading] = useState<ILoading>({});
//   const [categoryProductsCount, setCategoryProductsCount] = useState<number>(0);
//   const [productSelection, setProductSelection] = useState<ProductSelection | null>(null);
//   const [allowBuyButton, setAllowBuyButton] = useState<boolean>(false);
//   // Muttations
//   /* const fetcProductMutation = useMutation({
//     mutationFn: fetchProductsRequest,
//   });*/

//   const fetchCategoryProducts = useMutation({
//     mutationFn: fetchCategoryProductsRequest,
//   });

//   const fetchOneProductMutation = useMutation({
//     mutationFn: fetchOneProductRequest,
//   });
//   const fetchStoreProductsMutation = useMutation({
//     mutationFn: fetchStoreProductsRequest,
//   });

//   // Controllers
//   /* const fetchProductsController = async (req: { body: object }) => {
//     const { mutateAsync } = fetcProductMutation;
//     setProductLoading({ ...productLoading, all: true });
//     const { data, error } = await mutationProcessor(mutateAsync, req.body, null);
//     data ? setProducts(utils.pricesToInt(data as Products)) : setProducts(null);
//     setProductLoading({ ...productLoading, all: false, one: false });
//   };*/



  








































































//   const fetchCategoryProductsController = async (req: { param: string; body: object }) => {
//     const { mutateAsync } = fetchCategoryProducts;
//     setProductLoading({ ...productLoading, all: true });
//     const { data, error } = await mutationProcessor(mutateAsync, req.body, req.param);
//     data ? (setCategoryProducts(utils.pricesToInt(data.categoryProducts as Products)), setCategoryProductsCount(data.categoryProductsCount)) : setCategoryProducts(null);
//     setProductLoading({ ...productLoading, all: false });
//   };

//   const fetchOneProductController = async (req: { param: string }) => {
//     const { mutateAsync } = fetchOneProductMutation;
//     setProductLoading({ ...productLoading, one: true });
//     const { data, error } = await mutationProcessor(mutateAsync, null, req.param);
//     data ? setProduct(data as Product) : setProduct(null);
//     setProductLoading({ ...productLoading, one: false });
//   };

//   const fetchStoreProductsController = async (req: { param: string; body: object }) => {
//     const { mutateAsync } = fetchStoreProductsMutation;
//     setProductLoading({ ...productLoading, all: true });
//     const { data, error } = await mutationProcessor(mutateAsync, req.body, req.param);
//     data ? ( console.log(data), setStoreProducts(utils.pricesToInt(data.products as Products)), setStoreProductsCount(data.totalCount)) : (setStoreProducts(null), setStoreProductsCount(0));
//     setProductLoading({...productLoading, all: false });
//   };

//   useEffect(() => {
//     if (product) {
//       setProductSelection({ product, color: null, propValue: null });
//       if (product.productAttributes[0].colorId) {
//         setProductSelection({ product, color: product.productAttributes[0].color, propValue: null });
//       }
//     }
//   }, [product]);

//   useEffect(() => {
//     if (product) {
//       if (product.productAttributes[0].propValueId && product.productAttributes[0].colorId) {
//         if (productSelection.propValue && productSelection.color) {
//           if (product.productAttributes.find((attr) => attr.propValueId === productSelection.propValue.id).inventory.quantity > 0) {
//             setAllowBuyButton(true);
//           } else {
//             setAllowBuyButton(false);
//           }
//         } else {
//           setAllowBuyButton(false);
//         }
//       }
//       if (product.productAttributes[0].color && !product.productAttributes[0].propValueId) {
//         if (productSelection.color) {
//           if (product.productAttributes.find((attr) => attr.colorId === productSelection.color.id).inventory.quantity > 0) {
//             setAllowBuyButton(true);
//           } else {
//             setAllowBuyButton(false);
//           }
//         } else {
//           setAllowBuyButton(false);
//         }
//       }
//       if (product.productAttributes[0].propValueId && !product.productAttributes[0].colorId) {
//         if (productSelection.propValue) {
//           if (product.productAttributes.find((attr) => attr.propValueId === productSelection.propValue.id).inventory.quantity > 0) {
//             setAllowBuyButton(true);
//           } else {
//             setAllowBuyButton(false);
//           }
//         } else {
//           setAllowBuyButton(false);
//         }
//       }
//       if (!product.productAttributes[0].propValueId && !product.productAttributes[0].colorId) {
//         if (product.productAttributes[0].inventory.quantity > 0) {
//           setAllowBuyButton(true);
//         }
//       }
//     }
//   }, [productSelection]);

//   return (
//     <ProductContext.Provider
//       value={{
//         // data
//         product,
//         products,
//         allowBuyButton,
//         categoryProducts,
//         categoryProductsCount,
//         storeProducts,
//         storeProductsCount,
//         setProduct,
//         setProducts,
//         productSelection,
//         setProductSelection,
//         // loadings
//         productLoading,
//         setProductLoading,
//         // controllers
//         // fetchProductsController,
//         fetchCategoryProductsController,
//         fetchOneProductController,
//         fetchStoreProductsController
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProduct = () => useContext(ProductContext);











































































// import { Category } from "../category/category"
// import { Review } from "../reviews/review"
// import { SubCategory } from "../sub-category/sub-category"
// import { ProductImages } from "./product-images"

// export type Product = {
//     id: Number | undefined
//     nameEn?: string | null
//     nameAr?: string | null
//     descriptionAr?: string | null
//     descriptionEn?: string | null
//     price: Number
//     slug?: string | null
//     sku?: string
//     createdAt?: Date | string
//     updatedAt?: Date | string
//     isDeleted?: boolean
//     brand?: Brand;
//     categories?: Categories[]
//     categoryId: Number
//     review : Review[]
//     productAttributes: productAttribute[],
//     productTags?: []
//     cartItems?: []
//     orderItems?: []
//     userFav?: []
//     mainImages:string
//     compareToPrice?:number
//     productStatus:ProductStatus[]
// }

// export type ProductStatus = {
//     status: string
// }

// type Categories = {
//     category : Category
// }

// export type Brand = {
//     nameEn : string;
//     nameAr : string;
//     image: string;
//     createdAt?: Date | string
//     updatedAt?: Date | string
//     merchant: Merchant;
// }

// export type Merchant = {
//     id: number
//     nameEn: string;
//     nameAr: string;
//     storeReviews: Review[];
//     storeNameEn: string;
//     storeNameAr: string;
// }

// export type productAttribute = {
//     id: number;
//     colorId?: number;
//     inventoryId: number;
//     productId: number;
//     propValueId?: number;
//     color?: Color;
//     inventory: ProductInventory;
//     images: Image[]
//     propValue?: PropValue;
//     product?: Product;
// }

// export type ProductInventory = {
//     id: number;
//     quantity: number;
// }

// export type Image = {
//     id: number;
//     imageUrl: string;
// }


// export type Color = {
//     id: number;
//     value: string;
//     nameEn: string;
//     nameAr: string;
// }

// export type PropValue = {
//     id: number;
//     value: string;
//     productPropName: ProductPropName;
// }

// export type ProductPropName = {
//     id: number;
//     nameEn: string;
//     nameAr: string;
//     unitEn?: string;
//     unitAr?: string;
// }
// export type Products = Product[]

// export type ProductSelection = {
//     product: Product;
//     color : Color | null ;
//     propValue: PropValue | null;
// }










// import AxiosClient from "../axios/index.axios";

// // list
// /*export const fetchProductsRequest = async (req: { param: string; body: object | null }) =>
//   AxiosClient.post("/product/fetch", {
//     ...req.body,
//   })
//     .then((res) => res.data)
//     .catch((err) => err?.response?.data ?? err);*/






// export const fetchCategoryProductsRequest = async (req: { param: string; body: object | null }) =>
//   AxiosClient.post(/product/categoryProducts/${req.param}, { ...req.body })
//     .then((res) => res.data)
//     .catch((err) => err?.response?.data ?? err);

// export const fetchOneProductRequest = async (req: { param: string }) =>
//   AxiosClient.get(/product/${req.param})
//     .then((res) => res.data)
//     .catch((err) => err?.response?.data ?? err);

// export const fetchStoreProductsRequest = async (req: { param: string; body: object }) => AxiosClient.post(/product/storeProducts/${req.param}, { ...req.body }).then((res) => res.data);

















// type MutateProcessorReturn = {
//   data: any | null;
//   error: string | null;
// };
// export const mutationProcessor = async (mutateFunction, body, param): Promise<MutateProcessorReturn> => {
//   const res = await mutateFunction({ param, body });

//   return res.result ? { data: res.result, error: null } : { data: null, error: res.message };
// };































// import AxiosClient from "../axios/index.axios";
// import { fetchCollectionType } from "./collections";

// export const fetchCollectionRequest = (req: { body: fetchCollectionType }) =>
//   AxiosClient.post("/product/collection", { ...req.body })
//     .then((res) => res.data)
//     .catch((err) => err?.response?.data ?? err);