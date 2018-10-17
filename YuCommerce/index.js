class Commerce {
    constructor(name) {
        this.name = name
        this.merchants = []
        this.buyers = []
    }

    registerMerchant(merchant) {
        let id = Math.round(Math.random() * (7000 - 5001) + 5001)
        merchant.id = id
        this.merchants.push(merchant)
    }

   
}

class Buyer {
    constructor(name, email, orders) {
        this.id
        this.name = name
        this.email = email
        this.orders = orders
    }
}

class orderItem {
    constructor(idProduct, nameProduct, qty, price, total) {
        this.id = 0
        this.idProduct = idProduct
        this.nameProduct = nameProduct
        this.qty = qty
        this.price = price
        this.total = total
    }
}

class Merchant {
    constructor(merchant_name, email, membership) {
        this.id = 0
        this. merchant_name = merchant_name
        this.email = email
        this.products = []
        this.products_limit 
        this.revenue
        this.membership = membership
    }

    addProduct(product) {
        if (this.products.length > this.products_limit) {
            console.log('kelebihan product')
        } else {
            let id = Math.round(Math.random() * (7000 - 5001) + 5001)
            product.id = id
            this.products.push(product)
        }
        console.log(this.products)
    }
   
}



class Platinum extends Merchant{
    constructor(merchant_name, email, membership) {
        super(merchant_name, email, membership)
        this.products_limit = 15
        this.fee_registration = 2000000
    }
}

class Gold extends Merchant{
    constructor(merchant_name, email, membership) {
        super(merchant_name, email, membership)
        this.products_limit = 10
        this.fee_registration = 1500000
    }
}

class Silver extends Merchant {
    constructor(merchant_name, email, membership) {
        super(merchant_name, email, membership)
        this.products_limit = 5
        this.fee_registration = 5000000
    }
}

class Product {
    constructor(name, category, price, stock, discount) {
        this.id =  0
        this.name = name
        this.category = category
        this.price = price
        this.stock = stock
        this.discount = discount
        this.date = new Date()
    }
}
let yuco = new Commerce()
let dimaPros = new Platinum("Dima Pros ","dimapros@hotmail.com","platinum") 

let kosasihKempet = new Buyer('kosasih', 'kosasih@mail.com')

yuco.registerMerchant(dimaPros)

dimaPros.addProduct(new Product('shampo', 'alat mandi', 10000, 20, 10))