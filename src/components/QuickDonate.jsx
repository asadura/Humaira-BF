// src/components/QuickDonate.jsx
import React, { useState, useCallback } from "react";
import { Heart } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// read env
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function QuickDonate({ showInline = false, user = null }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(10);
  const [creating, setCreating] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const createCheckoutSession = useCallback(async () => {
    setCreating(true);
    setStatusMessage("");

    if (!BACKEND_URL) {
      toast.error("Backend URL not configured (VITE_BACKEND_URL).");
      setStatusMessage("Backend URL not configured.");
      setCreating(false);
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/donate/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          name: user?.displayName || "Anonymous Donor",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("createCheckoutSession failed:", res.status, data);
        toast.error(data?.message || "Failed to start payment.");
        setStatusMessage(data?.message || "Failed to start payment.");
        setCreating(false);
        return;
      }

      if (data?.url) {
        // redirect browser to Stripe Checkout
        window.location.href = data.url;
      } else {
        toast.error("Checkout URL not returned by server.");
        setStatusMessage("Checkout URL not returned by server.");
      }
    } catch (err) {
      console.error("createCheckoutSession error:", err);
      toast.error("Failed to start checkout. Try again.");
      setStatusMessage("Failed to start checkout. Try again.");
    } finally {
      setCreating(false);
    }
  }, [amount, user]);

  const handleIncrement = () => setAmount((p) => p + 1);
  const handleDecrement = () => setAmount((p) => (p > 1 ? p - 1 : p));

  const DonateBox = (
    <div className="relative bg-white/30 backdrop-blur-xl border border-gray-200 p-6 md:p-8 rounded-2xl shadow-2xl w-[90vw] max-w-sm md:max-w-md">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-center text-gray-100">
        💖 Support Our Mission
      </h2>
      <p className="text-center text-blue-300 mb-4">
        Thanks for Regarding: <span className="font-bold">{user?.displayName || ""}</span>
      </p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {["10", "50", "100", "200", "500", "1000"].map((amt) => (
          <button
            key={amt}
            type="button"
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
        <button type="button" onClick={handleDecrement} className="px-4 py-2 bg-gray-100 rounded-l-lg border border-gray-300 hover:bg-gray-200 text-gray-700">
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
        <button type="button" onClick={handleIncrement} className="px-4 py-2 bg-gray-100 rounded-r-lg border border-gray-300 hover:bg-gray-200 text-gray-700">
          +
        </button>
      </div>

      {statusMessage && <p className="text-center text-sm text-white/90 mb-3">{statusMessage}</p>}

      <div className="space-y-3">
        <button
          onClick={createCheckoutSession}
          disabled={creating || !BACKEND_URL}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg disabled:opacity-50"
        >
          {creating ? "Redirecting…" : `Donate Now $${amount}`}
        </button>

        <p className="text-center text-xs text-white/80">You will be redirected to a secure Stripe page to complete the donation.</p>
      </div>
    </div>
  );

  return (
    <>
      <Toaster position="top-right" />
      {showInline ? (
        DonateBox
      ) : (
        <>
          <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50">
            <Heart className="w-5 h-5 text-red-300" />
            <span className="font-bold hidden md:block text-sm">Donate</span>
          </button>

          {open && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-end md:items-center z-40 p-4">
              <div className="relative">
                {DonateBox}
                <button
                  onClick={() => {
                    setOpen(false);
                    setStatusMessage("");
                  }}
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
