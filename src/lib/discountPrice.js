export default function discountPrice(price, discount) {
  if (discount === null || discount === undefined) {
    return price; // No discount, return original price
  }
  const discountAmount = (price - (price * discount) / 100).toFixed(2); // Apply discount and format to 2 decimal places
  return discountAmount;
}
