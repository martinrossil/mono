import { Product, ProductInterface } from '@martinrossil/domain';
import ComponentInterface from './ComponentInterface';

/**
 * Component class
 */
export default class Component extends HTMLElement implements ComponentInterface {
    public name: string;
    public product: ProductInterface;
    public constructor() {
        super();
        this.name = 'a-a';
        this.product = new Product('Voksi', 123);
        console.log('a-a');
    }
}
customElements.define('a-a', Component);
