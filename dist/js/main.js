(function () {
	$('#create').click(function () {
		$('#create_account').toggleClass('active_modal');
		$('.overlay').toggleClass('active_overlay');
		$('body').toggleClass('modal-open');
	});
	$('#login').click(function (e) {
		e.preventDefault();
		$('#login_account').toggleClass('active_modal');
		$('.overlay').toggleClass('active_overlay');
		$('body').toggleClass('modal-open');
	});
	$('.overlay, #close').click(function () {
		$('#login_account').removeClass('active_modal');
		$('#create_account').removeClass('active_modal');
		$('.overlay').removeClass('active_overlay');
		$('body').removeClass('modal-open');
	});
	$('#login_btn').on('mouseenter', function () {
		$('.login_btn_ico').html('<i class="fa fa-unlock-alt"></i>');
	});
	$('#login_btn').on('mouseleave', function () {
		$('.login_btn_ico').html('<i class="fa fa-lock"></i>');
	});
	$(document).on('click', '.copyToClip', function () {
		var btn = this;
		var range = document.createRange();
		range.selectNode(document.getElementById('convert'));
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand('copy');
		window.getSelection().removeAllRanges(); // to deselect
		btn.innerHTML = '<i class="fa fa-check"></i> Copied';
		btn.classList.add('copyed');
		setTimeout(() => {
			btn.innerHTML = 'Copy';
			btn.classList.remove('copyed');
		}, 3000);
	});
})();
