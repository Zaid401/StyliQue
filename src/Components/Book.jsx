import { useState } from "react";

// Razorpay script load helper
const loadRazorpay = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "Classic Hair Cut",
    price: "99",
  });

  const timeSlots = [
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "01:45 PM",
    "02:30 PM",
    "04:00 PM",
    "05:00 PM",
    "07:00 PM",
  ];

  // Service - Price mapping
  const services = {
    "Haircut & Styling": "99",
    "Beard Grooming": "100",
    "Facial & Skincare": "250",
    "Keratin": "500",
    "Massage": "299",
    "Hair Color" : "399"
  };

  // Handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "service") {
      setFormData({ ...formData, service: value, price: services[value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Payment handler (frontend only)
  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return;
    }

    const options = {
      key: "rzp_test_RQ8FvRj9jIXqU9", 
      amount: formData.price * 100, 
      currency: "INR",
      name: "Salon Booking",
      description: `${formData.service} Booking`,
      handler: function (response) {
        alert("✅ Payment successful!\nPayment ID: " + response.razorpay_payment_id);
        console.log("Payment Details:", response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#10B981",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Please select a time slot before booking!");
      return;
    }
    handlePayment();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-black text-white p-6 rounded-lg space-y-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Book Your Seat</h2>

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Phone & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Time Slots */}
        <div>
          <label className="block mb-2 text-gray-300">Choose a time slot</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {timeSlots.map((slot, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setFormData({ ...formData, time: slot })}
                className={`p-2 rounded-md border ${
                  formData.time === slot
                    ? "bg-green-600 border-green-600"
                    : "bg-gray-900 border-gray-700"
                } hover:bg-green-700`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block mb-2 text-gray-300">Choose your service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {Object.keys(services).map((srv, idx) => (
              <option key={idx} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 text-gray-300">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            readOnly
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition"
        >
          Book & Pay Now
        </button>
      </form>
    </div>
  );
}
