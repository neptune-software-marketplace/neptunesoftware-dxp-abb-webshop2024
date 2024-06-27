
const context = oEvent.oSource.getBindingContext();  

const currentItem = context.getObject();

currentItem.totalPrice = currentItem.price * this.getValue();

calculateTotal();
