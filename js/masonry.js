//masonry.pkgd.js

var elem = document.querySelector('.icon-grid');

var msnry = new Masonry( elem, {
  // options
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});
