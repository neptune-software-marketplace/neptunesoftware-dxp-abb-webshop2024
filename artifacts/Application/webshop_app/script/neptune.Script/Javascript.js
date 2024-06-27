var currentView = "GRID";
var cartItems = [];
var selectedFilter = "";

// Function to copy URL to clipboard
function copyToClipboard() {
    var url = window.location.href;
    navigator.clipboard
        .writeText(url)
        .then(() => {
            alert("Link copied to clipboard!");
        })
        .catch((err) => {
            console.error("Failed to copy: ", err);
        });
}

// Function to send URL via email
function sendByEmail() {
    var url = encodeURIComponent(window.location.href);
    var email = "user@example.com";
    var subject = "Check out this link!";
    var body = "Hi there,\n\nI thought you might be interested in this link:\n" + url;

    window.open("mailto:" + email + "?subject=" + subject + "&body=" + body);
}

function calculateTotal(){
    const totalCost = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

TextTotal.setText(`€${totalCost.toFixed(2)}`);
modelListDisplayCart.setData(cartItems);
}

function completeOrder(){

    sap.m.MessageToast.show("Order process has been completed!", {
    duration: 3000,                  // default
    width: "15em",                   // default
    my: "center center",             // default
    at: "center center",             // default
    of: document,                    // default
    offset: "0 0",                   // default
    collision: "fit fit",            // default
    onClose: null,                   // default
    autoClose: true,                 // default
    animationTimingFunction: "ease", // default
    animationDuration: 2000          // default
});

//clear cart
cartItems = [];
modelListDisplayCart.setData([]);
modelModelArrayCart.setData([])
ButtonCart.setText("(0)");
DialogCheckOut.close();

}