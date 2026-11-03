import React from "react";

import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    slug: "woven-storage-basket",
    name: "Woven Storage Basket",
    price: 44,
    oldPrice: 60,
    rating: 4.8,
    reviews: 12,
    colors: ["#d8c7a4", "#b5b5b5", "#8caa87", "#f2a6a6"],
    sizes: ["Small", "Medium", "Large"],
    images: [
      "/images/basket-1.jpg",
      "/images/basket-2.jpg",
      "/images/basket-3.jpg",
      "/images/basket-4.jpg",
    ],
    description:
      "A beautifully crafted storage basket designed to bring a natural and elegant touch to your home.",
  },
  {
    id: 2,
    slug: "classic-black-sunglasses",
    name: "Classic Black Sunglasses",
    price: 35,
    oldPrice: 48,
    rating: 4.6,
    reviews: 8,
    colors: ["#171717", "#7a7a7a"],
    sizes: ["Standard"],
    images: [
      "/images/sunglasses-1.jpg",
      "/images/sunglasses-2.jpg",
      "/images/sunglasses-3.jpg",
      "/images/sunglasses-4.jpg",
    ],
    description:
      "Classic sunglasses with a modern design for everyday wear.",
  },
];

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [openAccordion, setOpenAccordion] = useState("");
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    review: "",
  });

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Product not found
        </h2>
        <Link to="/" className="mt-4 inline-block underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    setReviews((previous) => [
      ...previous,
      { ...form, id: Date.now() },
    ]);

    setForm({ name: "", email: "", review: "" });
  };

  const addToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      color: product.colors[selectedColor],
      size: selectedSize,
    };

    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, cartItem])
    );

    alert("Product added to cart!");
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">

        {/* Product layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Product images */}
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden bg-[#f5f5f5] ${
                  selectedImage === index
                    ? "ring-1 ring-gray-300"
                    : ""
                }`}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-contain p-3 transition duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>

          {/* Product information */}
          <div className="lg:sticky lg:top-8 lg:self-start">

            <h1 className="text-2xl font-semibold text-black">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-amber-500">
                ★★★★★
              </span>
              <span className="text-gray-500">
                {product.rating} | {product.reviews} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
              <span className="text-lg font-semibold">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="my-5 border-t border-gray-100" />

            {/* Colors */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase">
                Color
              </p>

              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(index)}
                    className={`h-5 w-5 rounded-full border ${
                      selectedColor === index
                        ? "ring-2 ring-black ring-offset-2"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold uppercase">
                Size
              </label>

              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold uppercase">
                Quantity
              </label>

              <div className="flex w-28 items-center justify-between border border-gray-200">
                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="text-sm">{quantity}</span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock status */}
            <div className="my-5 border-t border-gray-100 pt-4">
              <p className="text-xs">
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-gray-500">In stock</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() =>
                  alert("Connect your wishlist functionality here.")
                }
                className="flex-1 border border-gray-300 px-4 py-3 text-xs transition hover:bg-gray-100"
              >
                Add to Wishlist
              </button>

              <button
                onClick={addToCart}
                className="flex-1 bg-black px-4 py-3 text-xs text-white transition hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
              {[
                {
                  title: "Features & Details",
                  content:
                    "Carefully selected materials, quality construction, and a timeless design.",
                },
                {
                  title: "Shipping & Returns",
                  content:
                    "Add your delivery times, shipping charges, return policy, and exchange instructions here.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.title
                          ? ""
                          : item.title
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-xs font-semibold uppercase"
                  >
                    {item.title}
                    <span>
                      {openAccordion === item.title ? "−" : "+"}
                    </span>
                  </button>

                  {openAccordion === item.title && (
                    <p className="pb-4 text-xs leading-6 text-gray-500">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-gray-500">
              {product.description}
            </p>
          </div>
        </div>

        {/* Description and reviews */}
        <div className="mt-16 border-t border-gray-200 pt-8 md:mt-24">

          <div className="flex gap-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-4 text-sm ${
                activeTab === "description"
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 text-sm ${
                activeTab === "reviews"
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Reviews ({product.reviews + reviews.length})
            </button>
          </div>

          {activeTab === "description" && (
            <div className="py-6 text-sm leading-7 text-gray-500">
              {product.description}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="py-6">

              {/* Existing sample review */}
              <div className="border-b border-gray-100 pb-5">
                <div className="flex flex-wrap justify-between gap-2">
                  <p className="text-sm font-semibold">
                    John Smith
                  </p>
                  <span className="text-xs text-gray-400">
                    6 months ago
                  </span>
                </div>

                <p className="mt-2 text-amber-500">★★★★★</p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Great quality and an excellent product.
                  The design is beautiful and works perfectly.
                </p>
              </div>

              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-100 py-5"
                >
                  <p className="text-sm font-semibold">
                    {review.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {review.review}
                  </p>
                </div>
              ))}

              {/* Review form */}
              <form
                onSubmit={handleReviewSubmit}
                className="mt-8 max-w-xl"
              >
                <h2 className="mb-5 text-base font-semibold">
                  Add a Review
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name here"
                      className="w-full border-b border-gray-200 py-2 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="Your email here"
                      className="w-full border-b border-gray-200 py-2 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold">
                      Review
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={form.review}
                      onChange={(e) =>
                        setForm({ ...form, review: e.target.value })
                      }
                      placeholder="Write your review here"
                      className="w-full resize-y border-b border-gray-200 py-2 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-black px-10 py-3 text-xs text-white transition hover:bg-gray-800"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}