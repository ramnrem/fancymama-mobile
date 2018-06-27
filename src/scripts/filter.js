import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


$('.nouislider').each((i)=>{
	noUiSlider.create($('.nouislider')[i], {
		start: [ 500, 4000 ],
		connect: true,
		range: {
			'min': [ 0 ],
			'max': [ 10000 ]
		}
	});
	$('.nouislider')[i].noUiSlider.on('update', function( values, handle ) {

		let value = values[handle];

		if ( handle ) {
			$('.to')[i].value = Math.round(value);
		} else {
			$('.from')[i].value = Math.round(value);
		}
	});


});


$('.price-to').change(function(){
	$('.nouislider')[0].noUiSlider.set([this.value, null]);
});

$('.price-from').change(function(){
	$('.nouislider')[0].noUiSlider.set([null, this.value]);
});

$('.weight-to').change(function(){
	$('.nouislider')[1].noUiSlider.set([this.value, null]);
});

$('.weight-from').change(function(){
	$('.nouislider')[1].noUiSlider.set([null, this.value]);
});

$('.age-to').change(function(){
	$('.nouislider')[2].noUiSlider.set([this.value, null]);
});

$('.age-from').change(function(){
	$('.nouislider')[2].noUiSlider.set([null, this.value]);
});

$('.size-to').change(function(){
	$('.nouislider')[3].noUiSlider.set([this.value, null]);
});

$('.size-from').change(function(){
	$('.nouislider')[3].noUiSlider.set([null, this.value]);
});


