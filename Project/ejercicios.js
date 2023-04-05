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

        if(this.products.find(code)){
            this.products.push(product);        
        }else{
            console.log("el codigo ya existe");
        }

    }

    getProduct = () => {
        return this.products;
    }

    getProductById(){

    }
};

const gestionProductos = new ProductManager();
gestionProductos.addProduct("Celular", "SmartPhone marca Samsung", 900, "//ruta/foto", 543, 43);
gestionProductos.addProduct("Laptop", "Portatil marca Lenovo", 2900, "//ruta/foto", 234, 12);
gestionProductos.addProduct("Tablet", "Tableta marca Apple", 1800, "//ruta/foto", 433, 25);
gestionProductos.addProduct("Desktop", "PC de escritorio marca DELL", 2700, "//ruta/foto", 213, 32);
console.log(gestionProductos.getProduct());
