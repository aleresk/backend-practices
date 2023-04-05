class ProductManager{

    constructor(){
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
      const product = {title, description, price, thumbnail, code, stock};
        

        if(this.products.length === 0){
           product.id = 1;
        }else{
            product.id = this.products[this.products.length - 1].id + 1;
        };

        this.products.push(product);        
        

    }

    getProduct = () => {
        return this.products;
    }

    getProductById(){

    }
}