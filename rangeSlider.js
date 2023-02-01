export function getRange(){

    const rangeSliders = document.querySelectorAll('input[type=range]')

    rangeSliders.forEach((item) => {
        var min = item.min,
            max = item.max,
            val = item.value;
            item.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    
        item.addEventListener('input', function(e){
            var min = e.target.min,
            max = e.target.max,
            val = e.target.value;
            e.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        })
    })
}




