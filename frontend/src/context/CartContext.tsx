// src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

export type Product = {
  id: string;
  title: string;
  item: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  badges?: string[];
  specs?: { [key: string]: string };
  quantity?: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  totalPrice: number;
  totalItems: number;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQty = (productId: string) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      )
    );
  };

  const decreaseQty = (productId: string) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === productId
          ? { ...p, quantity: Math.max((p.quantity || 1) - 1, 1) }
          : p
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
