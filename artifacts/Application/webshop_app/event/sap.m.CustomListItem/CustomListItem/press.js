// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();  

// Get Entire Model
const data = context.getObject();

modeldetailsPage.setData(data);
modelModelObjectSelectedItem.setData(data);

//Load reviews
modelListReviews.setData(data.reviews);

oButtonBack.setVisible(true);
NavContainer.to(detailsPage);