if (currentView == "GRID") {
    const binding = ListCatelogyGrid.getBinding("items");
    const filter = new sap.ui.model.Filter({
        filters: [
            new sap.ui.model.Filter("title", "Contains", this.getValue()),
            //new sap.ui.model.Filter("description", "Contains", this.getValue()),
        ],
        and: false,
    });
    binding.filter([filter]);
} else if (currentView == "LIST") {
    const binding = ListDisplay.getBinding("items");
    const filter = new sap.ui.model.Filter({
        filters: [
            new sap.ui.model.Filter("title", "Contains", this.getValue()),
            //new sap.ui.model.Filter("description", "Contains", this.getValue()),
        ],
        and: false,
    });
    binding.filter([filter]);
}
