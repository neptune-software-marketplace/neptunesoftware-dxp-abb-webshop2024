console.log("I got here")
const context = oEvent.oSource.getBindingContext();  

const currentItem = context.getObject();

currentItem.totalPrice = currentItem.price * this.getValue();
console.log(currentItem.price )
calculateTotal();
