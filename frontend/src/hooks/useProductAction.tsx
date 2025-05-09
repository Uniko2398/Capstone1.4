import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Product } from "../context/CartContext";

export const useProductActions = (product: Product) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const isInWishlist = wishlist.includes(product.id);

  const toggleWishlist = () => {
    const updated = isInWishlist
      ? wishlist.filter((id) => id !== product.id)
      : [...wishlist, product.id];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const handleAddToCart = () => {
    addToCart({ ...product });
  };

  const handleNavigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return {
    isInWishlist,
    toggleWishlist,
    handleAddToCart,
    handleNavigateToProduct,
  };
};
