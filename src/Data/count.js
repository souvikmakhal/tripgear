export const updateCounts = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
 
  const totalCart = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const wishCount = wishlist.length;
 
  return { cartCount: totalCart, wishCount };
};