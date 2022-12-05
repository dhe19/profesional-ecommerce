

interface Icart {
    name:string;
    image:string;
    price:number;
    slug:string;
    quantity:number;
}

interface IProduct{
    name:string;
    slug:string;
    category:string;
    image:string;
    price:number;
    brand:string;
    rating:number;
    numReviews:number;
    countInStock:number;
    description:string;
}

interface IDatabaseModel {
    products:IProduct[];
}