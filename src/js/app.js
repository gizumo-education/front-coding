import $ from 'jquery';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

const slider = new KeenSlider('.p-new-recruitment__list', {
	loop: true,
	breakpoints: {
		'(max-width: 767px)': {
			slides: {
				perView: 1,
			},
		},
	},
	slides: {
		perView: 4,
		spacing: 20,
	},
	optionsChanged: () => {
		console.log(window.innerWidth);
	},
});

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
arrowLeft.addEventListener('click', () => slider.prev());
arrowRight.addEventListener('click', () => slider.next());

//ハンバーガーメニュー
function hamburger() {
	document.getElementById('line1').classList.toggle('line_1');
	document.getElementById('line2').classList.toggle('line_2');
	document.getElementById('line3').classList.toggle('line_3');
	document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click', function () {
	hamburger();
});

// ページ内スクロール
$('a[href^="#"]').click(function () {
	const speed = 600;
	let href = $(this).attr('href');
	let target = $(href == '#' || href == '' ? 'html' : href);
	let headerHeight = $('.l-header').outerHeight();
	let position = target.offset().top - headerHeight;
	$('body,html').animate({ scrollTop: position }, speed, 'swing');
	return false;
});

// ページ内スクロール後 メニューが閉じる
$('#nav a[href]').on('click', function (event) {
	$('#hamburger').trigger('click');
});
