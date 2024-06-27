    //   Dialog.open();
    // Create the alert element
    var alertElement = document.createElement('div');
    alertElement.className = 'alert alert-info alert-dismissible fade show';
    alertElement.role = 'alert';
    alertElement.innerHTML = `
        Feature not implemented. Create your own action or navigate to a different screen.
        
    `;

    // Insert the alert element into the alert container
    var alertContainer = document.querySelector('.alert-container');
    alertContainer.appendChild(alertElement);

  

    // Automatically remove the alert after a certain time (optional)
    setTimeout(function() {
        alertElement.classList.remove('show');
        alertElement.classList.add('fade');
        setTimeout(function() {
            alertElement.remove();
        }, 150);
          //Dialog.close();
    }, 5000);



