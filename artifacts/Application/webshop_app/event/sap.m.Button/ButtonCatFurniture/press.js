//Sort by Furniture Category
const binding = ListCatelogyGrid.getBinding("items");
const filter = new sap.ui.model.Filter("category", "EQ", "Furniture");
binding.filter([filter]);

if (ListDisplay.getVisible()) {
    const binding = ListDisplay.getBinding("items");
    const filter = new sap.ui.model.Filter("category", "EQ", "Furniture");
    binding.filter([filter]);
}

//highlighting the selected filter button 
ButtonCatBeauty.setType("Default")
ButtonCatFragrances.setType("Default")
ButtonCatFurniture.setType("Emphasized")
ButtonCatGroceries.setType("Default")

ButtonClear.setVisible(true);