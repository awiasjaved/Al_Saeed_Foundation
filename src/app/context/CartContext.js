'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef
} from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';                // ✅ needed for <Link>
import { FaWhatsapp } from 'react-icons/fa'; // ✅ WhatsApp icon

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const prevLength = useRef(0);
  const pathname = usePathname();

  // Load cart once on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(stored);
    prevLength.current = stored.length;
  }, []);

  // Persist cart & reopen when emptied
  useEffect(() => {
    if (prevLength.current > 0 && cartItems.length === 0) {
      setIsOpen(true);
    }
    prevLength.current = cartItems.length;
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Close popup on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const toggleCart = () => setIsOpen(o => !o);
  const closeCart  = () => setIsOpen(false);

  return (
    <div
      id="three-pic"
      className="min-h-screen bg-cover bg-center bg-no-repeat scroll-smooth relative"
      style={{ backgroundImage: "url('/back.png')" }}  // ✅ /public/back.png
    >
      <CartContext.Provider
        value={{
          cartItems,
          isOpen,
          addToCart,
          removeFromCart,
          increaseQty,
          decreaseQty,
          toggleCart,
          closeCart
        }}
      >
        {children}
      </CartContext.Provider>

      {/* ✅ WhatsApp Floating Button */}
      <div className="fixed bottom-3 left-2  z-50">
        <Link
href="https://wa.me/923014005270?text=Assalamualaikum%20Al%20Saeed%20School%20Foundation!%20I%20am%20interested%20in%20supporting%20your%20mission%20through%20donations%20and%20would%20like%20more%20information."
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-white/20 bg-[#51cb60] text-white shadow-lg hover:bg-[#128C7E] transition"
          aria-label="Chat on WhatsApp"
          target="_blank"
        >
          <FaWhatsapp size={30} />
        </Link>
      </div>
    </div>
  );
};

export const useCart = () => useContext(CartContext);
