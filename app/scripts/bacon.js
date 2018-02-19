var bacon_module = bacon_module || {};

bacon_module.addMoreBaconButton = document.querySelector('#add-more-bacon');
bacon_module.baconImagesWrapper = document.querySelector('#bacon-images-wrapper');
bacon_module.baconImage = document.querySelector('.bacon-image');

bacon_module.addMoreBaconAction = function() {
  var newBaconImage = new Image();
  newBaconImage.src = bacon_module.baconImage.src;
  newBaconImage.alt = bacon_module.baconImage.alt;
  newBaconImage.className = bacon_module.baconImage.className;
  bacon_module.baconImagesWrapper.appendChild(newBaconImage);
}

bacon_module.bindEvents = function() {
  bacon_module.addMoreBaconButton.addEventListener("click", bacon_module.addMoreBaconAction);
}

bacon_module.init = function() {
  bacon_module.bindEvents();
}();