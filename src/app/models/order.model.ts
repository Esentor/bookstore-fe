export interface Order {
    id: number;
    orderNumber: string;
    customerId: number;
    books: number[]; // Array of book IDs
    totalPrice: number;
    orderDate: Date;
}