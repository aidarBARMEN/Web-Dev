export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string[];
    rating: number;
    link: string;
    likes: number; // ✅ Добавили поле likes
}
