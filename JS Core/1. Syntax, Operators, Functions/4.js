function solve(steps, footPrint, speed) {
 
    let distanceCoveredInMeters = steps * footPrint;
 
    const metersPerSecond = 0.277778 * speed;
 
    minutesToAdd = distanceCoveredInMeters/500;
 
    let time = distanceCoveredInMeters / metersPerSecond;
 
    var hrs = Math.floor(time / 3600);
    var min = Math.floor((time - (hrs * 3600)) / 60);
    var seconds = time - (hrs * 3600) - (min * 60);
    seconds = Math.round(Math.round(seconds * 100) / 100);
 
    finalMinutes = Math.floor(min+minutesToAdd);
 
    var result = (hrs < 10 ? "0" + hrs : hrs);
    result += ":" + (finalMinutes < 10 ? "0" + finalMinutes : finalMinutes);
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
}