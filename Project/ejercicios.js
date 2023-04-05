class ProductManager{

    constructor(){
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
      const product = {title, description, price, thumbnail, code, stock};
        

        if(this.products.length === 0){
           product.id = 1;
        }else{
            product.id = this.products[this.products.length - 1];
        };

        this.product.push(products);        
        

    }

    getProduct = () => {
        return this.products;
    }

    getProductById(){

    }
}