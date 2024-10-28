// function for changing the temperature manually using the thermostat in the top right corner of the app 
const crankThermostat = (event) => {
    event.preventDefault() // preventDefault() is for preventing the page from refreshing 
    document.getElementById('temperature').innerHTML = document.getElementById('thermostat').value + '°F'
    if(document.getElementById('thermostat').value === ''){
        document.getElementById('temperature').innerHTML = `0°F`
    }
}

// functions for populating location search and fetching api with previous searches
function historySearch1(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-1').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch2(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-2').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch3(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-3').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch4(event){
    event.preventDefault()
    console.log('searching from history')
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-4').innerHTML
        updateWeather()
        weatherFacts()
    }
}
function historySearch5(event){
    event.preventDefault()
    if(document.getElementById('location-input')){
        document.getElementById('location-input').value = document.getElementById('history-span-5').innerHTML
        updateWeather()
        weatherFacts()
    }
}