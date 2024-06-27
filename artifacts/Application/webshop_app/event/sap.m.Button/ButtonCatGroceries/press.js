//Sort by Groceries Category
const binding = ListCatelogyGrid.getBinding("items");
const filter = new sap.ui.model.Filter("category", "EQ", "Groceries");
binding.filter([filter]);

if (ListDisplay.getVisible()) {
    const binding = ListDisplay.getBinding("items");
    const filter = new sap.ui.model.Filter("category", "EQ", "Groceries");
    binding.filter([filter]);
}

//highlighting the selected filter button 
ButtonCatBeauty.setType("Default")
ButtonCatFragrances.setType("Default")
ButtonCatFurniture.setType("Default")
ButtonCatGroceries.setType("Emphasized")

ButtonClear.setVisible(true);