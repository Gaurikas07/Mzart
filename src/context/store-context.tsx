"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { allProducts } from "@/lib/products";
import { CartItem, Product } from "@/lib/types";

interface StoreContextValue {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  cartProducts: Array<Product & { quantity: number }>;
  wishlistProducts: Product[];
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

const CART_KEY = "momzart-cart";
const WISHLIST_KEY = "momzart-wishlist";

export function StoreProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    const storedWishlist = localStorage.getItem(WISHLIST_KEY);
    if (storedCart) setCart(JSON.parse(storedCart) as CartItem[]);
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist) as string[]);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.productId === productId ? { ...item, quantity } : item))
    );
  };

  const addToWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const clearCart = () => setCart([]);

  const cartProducts = useMemo(
    () =>
      cart
        .map((item) => {
          const product = allProducts.find((entry) => entry.id === item.productId);
          return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter((entry): entry is Product & { quantity: number } => entry !== null),
    [cart]
  );

  const wishlistProducts = useMemo(
    () => allProducts.filter((product) => wishlist.includes(product.id)),
    [wishlist]
  );

  const cartTotal = useMemo(
    () => cartProducts.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartProducts]
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const value: StoreContextValue = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    clearCart,
    cartTotal,
    cartCount,
    cartProducts,
    wishlistProducts
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};
