import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Heart } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const stripePromise = loadStripe("pk_live_51SD1ur2EWKIu3ZR72dnpMfice3NLzCoWVk3iGntU9YGBbz7gtBU2n3cjZmyqXPCQQROcYDuaG2GBRXxfT6R91GPW00Nt1BFcww");

export default function QuickDonate({ showInline = false, user = null }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(10);

  const handleCheckout = async () => {
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    const stripe = await stripePromise;

    try {
      const loadingToast = toast.loading("Redirecting to payment...");

      const { data } = await axios.post("http://localhost:5000/api/donate", {
        amount,
        name: user?.displayName || "Anonymous Donor",
        email: user?.email || "anonymous@example.com",
      });

      toast.success("Success! Redirecting to Stripe...", {
        id: loadingToast,
        duration: 3000,
      });

      const result = await stripe.redirectToCheckout({ sessionId: data.id });
      if (result.error) toast.error(result.error.message);
    } catch (err) {
      console.error(err);
      toast.error("Payment failed, try again.");
    }
  };

  const handleIncrement = () => setAmount((prev) => prev + 1);
  const handleDecrement = () => setAmount((prev) => (prev > 1 ? prev - 1 : prev));

  const DonateBox = (
    <div className="relative bg-white/30 backdrop-blur-xl border border-gray-200 p-6 md:p-8 rounded-2xl shadow-2xl w-[90vw] max-w-sm md:max-w-md">
      <h2 className="text-xl  md:text-2xl font-bold mb-5 text-center text-gray-100">
        💖 Support Our Mission
      </h2>

      <p className="text-center text-blue-300 mb-4 text-blue-200">
        Thanks for Regarding : <span className="font-bold">{user?.displayName || ""}</span>
      </p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {["10", "50", "100", "200", "500", "1000"].map((amt) => (
          <button
            key={amt}
            onClick={() => setAmount(Number(amt))}
            className={`py-2 rounded-lg font-semibold text-sm ${
              amount === Number(amt)
                ? "bg-green-600 text-white scale-105"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            ${amt}
          </button>
        ))}
      </div>

      <div className="flex w-full mb-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-gray-100 rounded-l-lg border border-gray-300 hover:bg-gray-200 text-gray-700"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val >= 1) setAmount(val);
          }}
          className="w-full border-t border-b border-gray-300 text-center text-gray-900 bg-white px-4 py-2 text-lg font-semibold"
        />
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-gray-100 rounded-r-lg border border-gray-300 hover:bg-gray-200 text-gray-700"
        >
          +
        </button>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg"
      >
        Donate Now
      </button>
    </div>
  );

  return (
    <>
      <Toaster position="top-right" />
      {showInline ? (
        DonateBox
      ) : (
        <>
          <button
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
          >
            <Heart className="w-5 h-5 text-red-300" />
            <span className="font-bold hidden md:block text-sm">Donate</span>
          </button>

          {open && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-end md:items-center z-40 p-4">
              <div className="relative">
                {DonateBox}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
