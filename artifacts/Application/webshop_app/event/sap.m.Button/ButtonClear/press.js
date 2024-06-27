//Sort by Groceries Category
const binding = ListCatelogyGrid.getBinding("items");
binding.filter([]);

if (ListDisplay.getVisible()) {
    const binding = ListDisplay.getBinding("items");
    binding.filter([]);
}

ButtonClear.setVisible(false);

ButtonCatBeauty.setType("Default")
ButtonCatFragrances.setType("Default")
ButtonCatFurniture.setType("Default")
ButtonCatGroceries.setType("Default")
