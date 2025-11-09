import { useEffect, useState, useContext } from "react";
import PaystackPop from "@paystack/inline-js";
import emailjs from "emailjs-com";
import { CartContext } from "./CartContext";

const STORAGE_KEY = "checkout_address_v1";

export default function CheckoutAndPay() {
  const { totalPrice, cart } = useContext(CartContext);

  // Payment identity
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState(totalPrice);

  // Delivery details
  const [address, setAddress] = useState({
    receiverName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    lga: "",
    postalCode: "",
    country: "NG",
    instructions: "",
  });

  // Load saved address from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setAddress(JSON.parse(saved));
    } catch {}
  }, []);

  // Save every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(address));
    } catch {}
  }, [address]);

  const updateAddress = (k, v) => setAddress((a) => ({ ...a, [k]: v }));

  const validate = () => {
    if (!email || !firstName || !lastName) return "Enter your name and email";
    if (!amount || isNaN(amount) || amount <= 0) return "Enter a valid amount";
    if (!address.receiverName) return "Enter receiver’s name";
    if (!/^\d{10,15}$/.test(address.phone))
      return "Enter a valid phone (10–15 digits)";
    if (!address.street || !address.city || !address.state)
      return "Complete address (street, city, state)";
    return null;
  };

  const payNow = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return alert(err);

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      amount: Math.round(Number(amount) * 100), // kobo
      email,
      first_name: firstName,
      last_name: lastName,
      metadata: {
        delivery_snapshot: { ...address },
      },
      onSuccess: async (tx) => {
        alert(`Payment Complete! Ref: ${tx.reference}`);

        // -------- Build EmailJS payload to match your template --------
        // Items for the {{#orders}} loop
        const orders = cart.map((i) => {
          const priceNum = Number(i.price) || 0;
          const qtyNum = Number(i.quantity) || 0;
          return {
            name: i.name,
            units: qtyNum,                         // template uses {{units}}
            price: priceNum.toFixed(2),            // template shows ${{price}}
            line_total: (priceNum * qtyNum).toFixed(2), // in case you add it to template
          };
        });

        const subtotal = orders.reduce(
          (sum, it) => sum + parseFloat(it.line_total),
          0
        );

        // Set these to your real values if needed
        const shippingNum = 0;
        const taxNum = 0;

        const templateParams = {
          email: email.trim(),            // {{email}} (To Email)
          order_id: tx.reference,         // {{order_id}}
          orders,                         // {{#orders}}...{{/orders}}
          cost: {                         // {{cost.shipping}} {{cost.tax}} {{cost.total}}
            shipping: shippingNum.toFixed(2),
            tax: taxNum.toFixed(2),
            total: (subtotal + shippingNum + taxNum).toFixed(2),
          },
          // Optional extras if you want to use them in the template:
          first_name: firstName,
          last_name: lastName,
        };
        // --------------------------------------------------------------

        try {
          await emailjs.send(
            "service_96ia6og",
            "template_jl59s0c",
            templateParams,
            "CPWn3sVcyaB-X58Ze"
          );
          alert("Order details sent to email successfully!");
        } catch (err) {
          console.error("EmailJS error:", err);
          alert("Payment successful, but failed to send email.");
        }

        // Optional: clear cart here if you want
      },
      onCancel: () => alert("Transaction cancelled"),
    });
  };

  return (
    <div className="pt-32 max-w-3xl mx-auto w-full border p-5 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 w-full bg-blue-500 text-center text-white py-3">
        Checkout
      </h2>

      {/* Contact & amount */}
      <div className="grid gap-3 mb-6">
        <Input label="Email" type="email" value={email} onChange={setEmail} />
        <div className="grid grid-cols-2 gap-3">
          <Input label="First name" value={firstName} onChange={setFirstName} />
          <Input label="Last name" value={lastName} onChange={setLastName} />
        </div>
        <Input
          label="Amount"
          type="number"
          value={amount}
          onChange={(v) => setAmount(v)}
          min="0"
        />
      </div>

      {/* Delivery details */}
      <h3 className="text-2xl font-bold mb-4 w-full bg-blue-500 text-center text-white py-3">
        Delivery details
      </h3>
      <div className="grid gap-3 mb-6">
        <Input
          label="Receiver name"
          value={address.receiverName}
          onChange={(v) => updateAddress("receiverName", v)}
        />
        <Input
          label="Phone"
          type="tel"
          value={address.phone}
          onChange={(v) => updateAddress("phone", v)}
        />
        <Input
          label="Street"
          value={address.street}
          onChange={(v) => updateAddress("street", v)}
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="City"
            value={address.city}
            onChange={(v) => updateAddress("city", v)}
          />
          <Input
            label="State"
            value={address.state}
            onChange={(v) => updateAddress("state", v)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="LGA (optional)"
            value={address.lga}
            onChange={(v) => updateAddress("lga", v)}
          />
          <Input
            label="Postal code (optional)"
            value={address.postalCode}
            onChange={(v) => updateAddress("postalCode", v)}
          />
        </div>
        <Input
          label="Country"
          value={address.country}
          onChange={(v) => updateAddress("country", v)}
        />
        <Textarea
          label="Delivery instructions (optional)"
          value={address.instructions}
          onChange={(v) => updateAddress("instructions", v)}
        />
      </div>

      <button
        onClick={payNow}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
      >
        Pay with Paystack
      </button>
    </div>
  );
}

// Tiny input helpers
function Input({ label, value, onChange, type = "text", ...rest }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-medium">{label}</span>
      <input
        className="border rounded px-3 h-10"
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </label>
  );
}

function Textarea({ label, value, onChange, ...rest }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-medium">{label}</span>
      <textarea
        className="border rounded px-3 py-2 min-h-[90px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </label>
  );
}
