class productManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }

    if (
      //validar que ingresaron todos los datos necesarios
      product.title == undefined ||
      product.description == undefined ||
      product.price == undefined ||
      product.code == undefined ||
      product.stock == undefined ||
      product.thumbnail == undefined
    ) {
      //si un dato no es ingresado mostrar que faltan datos
      return console.log("Faltan Datos");
    }

    if (product.id == 1) {
      this.products.push(product);
      console.log("Producto agregado correctamente");
    } else if (product.id > 1) {
      const getCode = product.code;

      const code = this.products.some((code) => code.code === getCode);

      if (code) {
        //si se repite el code mostrar que está duplicado
        return console.log("Codigo Duplicado");
      } else {
        this.products.push(product);
        //mostrar que el producto se agregó
        console.log("Producto agregado correctamente");
      }
    }
  }
  getProductById(idProducto) {
    const getById = this.products.find((getById) => getById.id === idProducto);

    if (getById) {
      return this.products.find((n) => n.id === idProducto);
    } else {
      return console.log("Id Not Found");
    }
  }
}

class product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

const productoNuevo = new productManager();

console.log("agregando un producto");
productoNuevo.addProduct(
  new product("Mouse", "Mouse Gaming", "$200", "mouse.png", "AA1", 10)
);

console.log("agregando otro producto");
productoNuevo.addProduct(
  new product("Teclado", "Teclado Gaming", "$200", "teclado.png", "AA2", 15)
);

console.log("agregando otro producto");
productoNuevo.addProduct(
  new product("Teclado", "Teclado Gaming", "$200", "teclado.png", "AA2", 15)
);

console.log("agregando otro producto");
productoNuevo.addProduct(
  new product("Monitor", "Monitor 144hz", "$2000", "monitor.png", "AA3", 5)
);

console.log("agregando otro producto");
productoNuevo.addProduct(
  new product("Monitor", "Monitor", "monitor.png", "AA3", 7)
);
console.log("agregando otro producto");
productoNuevo.addProduct(
  new product("Fuente de poder", "Fuente 700w", "$2500", "fuente.png", "AA4", 3)
);

console.log(productoNuevo.getProducts());

console.log("Buscando producto por el Id");
console.log(productoNuevo.getProductById(2));

console.log("Buscando otro producto por el Id");
console.log(productoNuevo.getProductById(3));
