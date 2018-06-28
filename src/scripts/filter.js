import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


let params = [
	{
		min: 500,
		max: 20000
	},
	{
		min: 1,
		max: 15
	},
	{
		min: 1,
		max: 14
	},
	{
		min: 20,
		max: 100
	}
]


$('.nouislider').each((i)=>{
	noUiSlider.create($('.nouislider')[i], {
		start: [ params[i].min, params[i].max ],
		connect: true,
		range: {
			'min': params[i].min,
			'max': params[i].max 
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


//не знаю как оптимизировать этот код, т.к $('.test')[идентификатор].change не работает
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


