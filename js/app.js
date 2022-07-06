/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
    //console.log('callback - particles.js config loaded');
});


/* CHART JS */
var xValues = ["Django", "Data Science", "Scraping"];
var yValues = [50, 40, 10];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
  /* "#e8c3b9",
  "#1e7145" */
];
myCharts("doughnut", "python_skill", xValues, yValues, barColors, true)

// Database
var xValues = ["MySQL", "PostgreSQL", "MongoDB"];
var yValues = [50, 40, 10];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
];
myCharts("doughnut", "database_skill", xValues, yValues, barColors, true)

// Web
var xValues = ["React", "JavaScript", "CSS / HTML"];
var yValues = [60, 20, 20];
var barColors = [
  "#00aba9",
  "#2b5797",
  "#e8c3b9"
];
myCharts("doughnut", "web_skill", xValues, yValues, barColors, true)

// Data Science
var xValues = ["Pandas", "Visual (Matplotlib/seaborn)", "NumPy", "ML (sci-kit)"];
var yValues = [50, 30, 20, 10];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"];
myCharts("bar", "ds_skill", xValues, yValues, barColors, false)


function myCharts(chartType, chartName, xValues, yValues, barColors, displayLeg) {
    return new Chart(chartName, {
    type: chartType,
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        title: {
            display: false,
            text: ""
        },
        legend: {
            display: displayLeg,
         },
    }
    });
}
/* END CHART JS */


/* THEME SWITCH */
let toggle = document.querySelector('#togTheme')

toggle.addEventListener('click', function() {
    document.body.classList.toggle('darkTheme')
    if (document.body.classList.contains('darkTheme')) {
        localStorage.setItem('site_theme', 'darkTheme')
        toggle.innerText = "🌚"
    } else {
        localStorage.setItem('site_theme', 'default')
        toggle.innerText = "🌞"
    }
})

function get_theme() {
    var theme = localStorage.getItem('site_theme')
    if (theme != null) {
        document.body.classList.remove('default', 'darkTheme')
        document.body.classList.add(theme)
    }
    theme == 'default' ? toggle.innerText = "🌞" : toggle.innerText = "🌚"

}

get_theme()

window.addEventListener('storage', function() {
    get_theme()
}, false)
/* END THEME SWITCH */



/* TIMELINE FADE IN */
var items = document.querySelectorAll('.timeline li')

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}

window.addEventListener('load', callbackFunc)
window.addEventListener('scroll', callbackFunc)
/* END TIMELINE FADE IN */


/* GET FOOTER YEAR */
const getFullYear = (startYear) => {
    const theDate = new Date()
    let year = theDate.getFullYear()
    document.getElementById('curYear').innerHTML = startYear < year ? `${startYear} - ${year}` : year
}
// Pass your start year
getFullYear(2022)
/* END GET FOOTER YEAR */


/* BACK TO TOP */
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
let topBtn = document.getElementById('topBtn')
window.onscroll = function() {scrollFunction()}

topBtn.addEventListener('click', function() {topFunction()})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = 'block'
    } else {
        topBtn.style.display = 'none'
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* END BACK TO TOP */