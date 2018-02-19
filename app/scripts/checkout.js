var checkout_module = checkout_module || {};

checkout_module.checkoutFormElement = document.querySelector('#checkout-form');
checkout_module.checkoutFormSubmitButton = document.querySelector('#checkout-submit-button');
checkout_module.checkoutErrorMessage = document.querySelector('#checkout-error-message');

checkout_module.checkValidityAndShowMessage = function() {
	var inputArray = checkout_module.checkoutFormElement.querySelectorAll('input'),
		countrySelect = checkout_module.checkoutFormElement.querySelector('select'),
		errorMessage = "",
		invalidFieldsCounter = 0;

	inputArray.forEach(function(node){
		if(!node.validity.valid) {
			errorMessage += node.name + ", ";
			invalidFieldsCounter++;
		}
	});

	if(!countrySelect.validity.valid) {
		errorMessage += countrySelect.name + ", ";
		invalidFieldsCounter++;
	}

	if(invalidFieldsCounter > 0) {
		errorMessage = errorMessage.substring(0, errorMessage.length - 2);
		invalidFieldsCounter > 1 ? errorMessage += " are invalid. Please correct these fields." : errorMessage += " is invalid. Please correct this field.";
		checkout_module.checkoutErrorMessage.innerHTML = errorMessage;
	} else {
		checkout_module.checkoutErrorMessage.innerHTML = "";
	}
}

checkout_module.bindEvents = function() {
  checkout_module.checkoutFormSubmitButton.addEventListener("click", checkout_module.checkValidityAndShowMessage);
}

checkout_module.init = function() {
  checkout_module.bindEvents();
}();