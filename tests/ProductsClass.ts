class ProductsClass {
   readonly name : string;
   protected price : number;
   private pId : number;
   prodID: number = 0;
   public inCart : boolean = false;

   constructor(name: string, price : number, pId : number) {
    this.name = name;
    this.price = price;
    this.pId = pId;
   }

    addToCart() : void {
    this.inCart = true;
   }

   // Setter
   set PId(val: number)
   {
    this.prodID = this.pId
   } 

   //Gettter
   get PId() : number {
    return this.pId = this.pId;
   }

   buyProduct(){
    if (this.inCart){
        return `${this.name} is ordred price is ${this.price}`
    }
    else return `cart is empty`
   }
    
}

class PremiumProdcutsClass extends ProductsClass{
    private membershipID : number;
    private discount : number = 0;

    constructor(membershipID : number){
        super("Moto G84", 20000, 123 );
        this. membershipID = membershipID
    }

    disccount() : string {
        if (prod.PId === 123)
            return `received 20% discount, new price : ${this.price*0.80}`
        else 
            return `Discount not available`
    }
}


let prod = new ProductsClass('Moto G84', 20000, 123);
prod.addToCart();
let buyStatus = prod.buyProduct();
   console.log(prod)
   console.log(buyStatus);
let prod2 = new PremiumProdcutsClass(1123)
prod2.addToCart()
   console.log(prod2.disccount())