// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();  

// Get Entire Model
const data = context.getObject();

modeldetailsPage.setData(data);
App.to(detailsPage);