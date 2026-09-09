import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Edit3, CreditCard, CheckCircle2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function CheckoutScreen() {
  const navigate = useNavigate();
  const { getCartTotal, clearCart, setOrderPlaced, cart } = useStore();
  const [selectedAddress, setSelectedAddress] = useState<'hostel' | 'lecture'>('hostel');
  const [selectedPayment, setSelectedPayment] = useState<'momo' | 'card'>('momo');
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = getCartTotal();
  const deliveryCharge = 0;
  const total = subtotal + deliveryCharge;

  useEffect(() => {
    if (cart.length === 0 && !showSuccess) {
      navigate('/cart');
    }
  }, [cart.length, showSuccess, navigate]);

  const handlePlaceOrder = () => {
    setShowSuccess(true);
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-5">
        <div className="animate-scale-in flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle2 size={56} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-text text-center">Order Placed Successfully!</h1>
          <p className="text-sm text-text-secondary mt-3 text-center">
            Your Ghanaian feast is being prepared. Delivery to KNUST campus soon! 🇬🇭
          </p>
          <div className="bg-surface rounded-2xl p-4 w-full mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-text-secondary">Order Total</span>
              <span className="text-lg font-bold text-primary">GH₵{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Delivery</span>
              <span className="text-sm text-text">To {selectedAddress === 'hostel' ? 'Hostel' : 'Lecture Hall'}</span>
            </div>
          </div>
          <button
            onClick={() => {
              setShowSuccess(false);
              setOrderPlaced(false);
              navigate('/');
            }}
            className="mt-8 w-full py-4 bg-primary rounded-2xl text-base font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg pb-28">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm px-5 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center"
          >
            <ArrowLeft size={20} className="text-text" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-text">Checkout</h1>
            <p className="text-xs text-text-secondary mt-0.5">Order Will Be Delivered To</p>
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 space-y-5">
        {/* Delivery Address */}
        <div>
          <h2 className="text-base font-semibold text-text mb-3">Delivery Address</h2>
          <div className="space-y-3">
            {/* Hostel */}
            <div
              onClick={() => setSelectedAddress('hostel')}
              className={`bg-surface rounded-2xl p-4 cursor-pointer transition-all active:bg-elevated ${
                selectedAddress === 'hostel' ? 'ring-1 ring-primary' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    selectedAddress === 'hostel' ? 'bg-primary/10' : 'bg-elevated'
                  }`}>
                    <MapPin size={18} className={selectedAddress === 'hostel' ? 'text-primary' : 'text-text-muted'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-text">Hostel</span>
                      <span className="text-[10px] text-text-muted">+233 24 123 4567</span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">
                      Africa Hall, Room 204, KNUST Campus, Kumasi
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-lg bg-elevated flex items-center justify-center">
                    <Edit3 size={12} className="text-text-muted" />
                  </button>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAddress === 'hostel' ? 'border-primary' : 'border-text-muted'
                  }`}>
                    {selectedAddress === 'hostel' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Lecture Hall */}
            <div
              onClick={() => setSelectedAddress('lecture')}
              className={`bg-surface rounded-2xl p-4 cursor-pointer transition-all active:bg-elevated ${
                selectedAddress === 'lecture' ? 'ring-1 ring-primary' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    selectedAddress === 'lecture' ? 'bg-primary/10' : 'bg-elevated'
                  }`}>
                    <MapPin size={18} className={selectedAddress === 'lecture' ? 'text-primary' : 'text-text-muted'} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-text">Lecture Hall</span>
                      <span className="text-[10px] text-text-muted">+233 24 123 4567</span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">
                      Engineering Faculty, LT3, KNUST Campus, Kumasi
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-lg bg-elevated flex items-center justify-center">
                    <Edit3 size={12} className="text-text-muted" />
                  </button>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAddress === 'lecture' ? 'border-primary' : 'border-text-muted'
                  }`}>
                    {selectedAddress === 'lecture' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="text-base font-semibold text-text mb-3">Payment Method</h2>
          <div className="space-y-3">
            <div
              onClick={() => setSelectedPayment('momo')}
              className={`bg-surface rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all active:bg-elevated ${
                selectedPayment === 'momo' ? 'ring-1 ring-primary' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                selectedPayment === 'momo' ? 'bg-primary/10' : 'bg-elevated'
              }`}>
                <span className="text-xl">📱</span>
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-text">Mobile Money (MoMo)</span>
                <p className="text-[11px] text-text-muted mt-0.5">MTN, Vodafone, AirtelTigo</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPayment === 'momo' ? 'border-primary' : 'border-text-muted'
              }`}>
                {selectedPayment === 'momo' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
            </div>

            <div
              onClick={() => setSelectedPayment('card')}
              className={`bg-surface rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all active:bg-elevated ${
                selectedPayment === 'card' ? 'ring-1 ring-primary' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                selectedPayment === 'card' ? 'bg-primary/10' : 'bg-elevated'
              }`}>
                <CreditCard size={18} className={selectedPayment === 'card' ? 'text-primary' : 'text-text-muted'} />
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-text">Credit/Debit Card</span>
                <p className="text-[11px] text-text-muted mt-0.5">Visa, Mastercard</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedPayment === 'card' ? 'border-primary' : 'border-text-muted'
              }`}>
                {selectedPayment === 'card' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div>
          <h2 className="text-base font-semibold text-text mb-3">Order Summary</h2>
          <div className="bg-surface rounded-2xl p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Delivery Charge</span>
              <span className="text-sm text-text font-medium">GH₵{deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Subtotal</span>
              <span className="text-sm text-text font-medium">GH₵{subtotal.toFixed(2)}</span>
            </div>
            <div className="border-t border-divider pt-3 flex justify-between">
              <span className="text-sm font-semibold text-text">Total</span>
              <span className="text-lg font-bold text-primary">GH₵{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg/95 backdrop-blur-sm border-t border-divider px-5 py-4">
        <button
          onClick={handlePlaceOrder}
          className="w-full py-4 bg-primary rounded-2xl text-base font-semibold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          Place Order — GH₵{total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
