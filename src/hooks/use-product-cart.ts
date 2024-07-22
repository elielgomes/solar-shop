import { ProductCartProps, useCartStore } from "@/stores/cart-store";

export const useProductCart = (data: ProductCartProps) => {
  const cartStore = useCartStore();

  const handleAddProductToCart = () => {
    cartStore.addProduct(data);
  };

  const handleRemoveProduct = () => {
    cartStore.removeProduct(data.id);
  };

  const handleDeleteProduct = () => {
    cartStore.deleteProductFromCart(data.id);
  };

  return {
    handleAddProductToCart,
    handleRemoveProduct,
    handleDeleteProduct,
  };
};
