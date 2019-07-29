function roadRadar(arr) {
    let speedingLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let speed = arr[0];
    let area = arr[1];

    if(speed - speedingLimits[area] <= 0) {
        console.log('')
    }
    else if(speed - speedingLimits[area] <= 20) {
        console.log('speeding')
    }
    else if(speed - speedingLimits[area] <= 40) {
        console.log('excessive speeding')
    }
    else {
        console.log('reckless driving')
    }
}
roadRadar([40, 'city'])
roadRadar([21, 'residential'])
roadRadar([120, 'interstate'])
roadRadar([200, 'motorway'])