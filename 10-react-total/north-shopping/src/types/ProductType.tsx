export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface cartProduct extends Product {
  quantity: number;
}

export interface User {
  email: string;
  username: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface CartStore {
  items: cartProduct[];
  cartItems: cartProduct[];
  cartCount: number;
  totalPrice: number;
  currentUser: string | null;

  fetchItems: () => void;
  getItemCategory: (category: string) => cartProduct[];

  addCart: (product: cartProduct) => void;
  removeCart: (id: number) => void;

  increaseQuantity: (id: number) => void;
  descreaseQuantity: (id: number) => void;

  memberUser: (user: User, navigate?: (path: string) => void) => void;
  login: (user: LoginUser, navigate?: (path: string) => void) => void;
  logout: () => void;
}
