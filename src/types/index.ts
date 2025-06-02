export interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  distance: string;
  deliveryTime: string;
  deliveryFee: string;
  minimumOrder: string;
  hasCoupon: boolean;
  menuUrl: string;
  couponDetails?: string;
  discountValue?: string;
  discountType?: 'percentage' | 'fixed' | 'freeDelivery' | 'combo';
  discountAmount?: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profilePicture?: string;
}