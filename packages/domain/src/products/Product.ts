import ProductInterface from './ProductInterface';

export default class Product implements ProductInterface {
    public name: string;
    public sku: number;
    public constructor(name: string, sku: number) {
        this.name = name;
        this.sku = sku;
    }
}
