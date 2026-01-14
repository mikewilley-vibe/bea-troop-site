"use client";

import { useState } from "react";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  description: string;
  allergens: string[];
}

const COOKIE_VARIETIES = [
  {
    name: "Thin Mints",
    price: 6.0,
    description: "Crispy chocolate cookies dipped in a thin layer of chocolate mint icing",
    allergens: ["Soy", "Wheat", "Tree Nuts"]
  },
  {
    name: "Caramel Delites",
    price: 6.0,
    description: "Chocolate cookies topped with caramel and a sprinkle of coconut",
    allergens: ["Soy", "Wheat", "Coconut"]
  },
  {
    name: "Peanut Butter Patties",
    price: 6.0,
    description: "Chocolate cookies with a peanut butter filling",
    allergens: ["Peanuts", "Soy", "Wheat"]
  },
  {
    name: "Girl Scout S'mores",
    price: 6.0,
    description: "Chocolate cookies with marshmallow and graham cracker pieces",
    allergens: ["Wheat", "Soy"]
  },
  {
    name: "Peanut Butter Cookie Crumbs",
    price: 6.0,
    description: "Peanut butter cookies with crispy cookie pieces baked in",
    allergens: ["Peanuts", "Soy", "Wheat"]
  },
  {
    name: "Lemonades",
    price: 6.0,
    description: "Crispy lemon cookies with a delightful citrus flavor",
    allergens: ["Wheat", "Soy"]
  },
];

export default function CookieOrderForm() {
  const [items, setItems] = useState<OrderItem[]>(
    COOKIE_VARIETIES.map((cookie) => ({
      name: cookie.name,
      quantity: 0,
      price: cookie.price,
      description: cookie.description,
      allergens: cookie.allergens,
    }))
  );

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateQuantity = (index: number, quantity: number) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(0, quantity);
    setItems(newItems);
  };

  const totalBoxes = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert("Please fill in all contact information");
      return;
    }
    if (totalBoxes === 0) {
      alert("Please order at least one box of cookies");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div
        className="rounded-lg p-8 text-center shadow-lg"
        style={{ backgroundColor: "#E8F3E8", border: "2px solid #2D5016" }}
      >
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#2D5016" }}>
          ✓ Order Submitted!
        </h2>
        <p className="text-slate-700">
          Thank you for your order, {customerInfo.name}! We'll be in touch
          soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl">
      {/* Customer Info Section */}
      <div
        className="rounded-lg p-6 mb-8 shadow-md"
        style={{ backgroundColor: "#E8F3E8", borderLeft: "4px solid #2D5016" }}
      >
        <h2 className="text-xl font-bold mb-4" style={{ color: "#2D5016" }}>
          Your Information
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={customerInfo.name}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, name: e.target.value })
            }
            required
            className="w-full rounded p-3 border-2 focus:outline-none transition-colors"
            style={{ borderColor: "#2D5016" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={customerInfo.email}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, email: e.target.value })
            }
            required
            className="w-full rounded p-3 border-2 focus:outline-none transition-colors"
            style={{ borderColor: "#2D5016" }}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={customerInfo.phone}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, phone: e.target.value })
            }
            required
            className="w-full rounded p-3 border-2 focus:outline-none transition-colors"
            style={{ borderColor: "#2D5016" }}
          />
        </div>
      </div>

      {/* Cookie Selection */}
      <div
        className="rounded-lg p-6 mb-8 shadow-md"
        style={{ backgroundColor: "#E8F3E8", borderLeft: "4px solid #2D5016" }}
      >
        <h2 className="text-xl font-bold mb-6" style={{ color: "#2D5016" }}>
          Select Cookies
        </h2>
        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded bg-white p-4"
              style={{ borderLeft: "3px solid #3D7B2F" }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-600 mt-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    <span className="font-semibold">Allergens:</span> {item.allergens.join(", ")}
                  </p>
                </div>
                <div className="text-right ml-4 flex-shrink-0">
                  <p className="font-semibold text-slate-800">${item.price.toFixed(2)}</p>
                  <p className="text-xs text-slate-500">per box</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  className="h-8 w-8 rounded text-white font-semibold hover:opacity-80"
                  style={{ backgroundColor: "#2D5016" }}
                >
                  −
                </button>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(index, parseInt(e.target.value) || 0)
                  }
                  className="h-8 w-12 rounded border text-center"
                  style={{ borderColor: "#2D5016" }}
                />
                <button
                  type="button"
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  className="h-8 w-8 rounded text-white font-semibold hover:opacity-80"
                  style={{ backgroundColor: "#2D5016" }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div
        className="rounded-lg p-6 mb-8 shadow-md"
        style={{ backgroundColor: "#F5FAF5", border: "2px solid #2D5016" }}
      >
        <div className="space-y-3">
          <div className="flex justify-between text-lg">
            <span className="font-semibold" style={{ color: "#2D5016" }}>
              Total Boxes:
            </span>
            <span className="font-bold text-xl">{totalBoxes}</span>
          </div>
          <div className="flex justify-between text-lg border-t pt-3" style={{ borderColor: "#2D5016" }}>
            <span className="font-semibold" style={{ color: "#2D5016" }}>
              Total Price:
            </span>
            <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* About Girl Scout Cookies */}
      <div
        className="rounded-lg p-6 mb-8 shadow"
        style={{
          backgroundColor: "#FFF8DC",
          borderLeft: "4px solid #2D5016",
        }}
      >
        <p className="font-semibold" style={{ color: "#2D5016" }}>
          🍪 About Girl Scout Cookies
        </p>
        <p className="text-slate-700 text-sm mt-2">
          All Girl Scout cookies are baked with pride and sold to support our troop's activities, badges, trips, and community service projects. Every box purchased helps build confidence, courage, and character in young women!
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded py-3 text-white font-bold text-lg hover:opacity-90 transition shadow-md"
        style={{ backgroundColor: "#2D5016" }}
      >
        Place Order
      </button>
    </form>
  );
}
