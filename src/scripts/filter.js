import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

let slider = document.getElementById('slider');


noUiSlider.create(slider, {
    start: [ 500, 4000 ],
    connect: true,
    range: {
        'min': [ 0 ],
        '10%': [ 500, 500 ],
        '50%': [ 4000, 1000 ],
        'max': [ 10000 ]
    }
});