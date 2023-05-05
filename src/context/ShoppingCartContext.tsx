import { ReactNode, createContext, useContext, useState } from 'react';
const ShoppingCartContext = createContext({} as ShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
type cartItem = {
  id: number;
  quantity: number;
};

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        removeFromCart,
        decreaseCartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
