let race = document.getElementById('race-btn');
let drag = document.getElementById('drag-btn');
let drift = document.getElementById('drift-btn');
let rally = document.getElementById('rally-btn');
let submitBtn = document.getElementById('submit-btn');

race.onclick = () => {
    document.getElementById('race').checked = true;
    race.style.color = "white";
    drag.style.color = "";
    drift.style.color = "";
    rally.style.color = "";

    race.style.opacity = 1;
    drag.style.opacity = 0.5;
    drift.style.opacity = 0.5;
    rally.style.opacity = 0.5;

    race.style.transition = "opacity 1s";
    drag.style.transition = "opacity 1s";
    drift.style.transition = "opacity 1s";
    rally.style.transition = "opacity 1s";

    submitBtn.style.border = "2px solid rgb(90, 194, 171)";
    submitBtn.style.color = "rgb(62, 131, 116)";
    submitBtn.style.boxShadow = "0px 0px 10px rgb(90, 194, 171), inset 0px 0px 10px rgb(90, 194, 171)";
}
drag.onclick = () => {
    document.getElementById('drag').checked = true;
    race.style.color = "";
    drag.style.color = "white";
    drift.style.color = "";
    rally.style.color = "";

    race.style.opacity = 0.5;
    drag.style.opacity = 1;
    drift.style.opacity = 0.5;
    rally.style.opacity = 0.5;

    race.style.transition = "opacity 1s";
    drag.style.transition = "opacity 1s";
    drift.style.transition = "opacity 1s";
    rally.style.transition = "opacity 1s";

    submitBtn.style.border = "2px solid rgb(253, 176, 76)";
    submitBtn.style.color = "rgb(170, 120, 53)";
    submitBtn.style.boxShadow = "0px 0px 10px rgb(253, 176, 76), inset 0px 0px 10px rgb(253, 176, 76)";
}
drift.onclick = () => {
    document.getElementById('drift').checked = true;
    race.style.color = "";
    drag.style.color = "";
    drift.style.color = "white";
    rally.style.color = "";

    race.style.opacity = 0.5;
    drag.style.opacity = 0.5;
    drift.style.opacity = 1;
    rally.style.opacity = 0.5;

    race.style.transition = "opacity 1s";
    drag.style.transition = "opacity 1s";
    drift.style.transition = "opacity 1s";
    rally.style.transition = "opacity 1s";

    submitBtn.style.border = "2px solid rgb(255, 255, 255)";
    submitBtn.style.color = "rgb(200, 200, 200)";
    submitBtn.style.boxShadow = "0px 0px 10px rgb(255, 255, 255), inset 0px 0px 10px rgb(255, 255, 255)";
}
rally.onclick = () => {
    document.getElementById('rally').checked = true;
    race.style.color = "";
    drag.style.color = "";
    drift.style.color = "";
    rally.style.color = "white";

    race.style.opacity = 0.5;
    drag.style.opacity = 0.5;
    drift.style.opacity = 0.5;
    rally.style.opacity = 1;

    race.style.transition = "opacity 1s";
    drag.style.transition = "opacity 1s";
    drift.style.transition = "opacity 1s";
    rally.style.transition = "opacity 1s";
}

submitBtn.onclick = () => {
    

    if(document.getElementById('race').checked) {
        calcRace();
    }
    else if(document.getElementById('drag').checked) {
        calcDrag();
    }
    else if(document.getElementById('drift').checked) {
        calcDrift();
    }
    else if(document.getElementById('rally').checked) {
        calcRally();
    }
    else {
        // return some form of error
    }
}
const calcRace = () => {
    //for some reason only works if initialized in function
    let frontPercent = Number(document.getElementById('frontPercent').value);
    let minDamping = Number(document.getElementById('min-damping').value);
    let maxDamping = Number(document.getElementById('max-damping').value);
    let minSprings = Number(document.getElementById('min-springs').value);
    let maxSprings = Number(document.getElementById('max-springs').value);
    let minAntiroll = Number(document.getElementById('min-antiroll-bars').value);
    let maxAntiroll = Number(document.getElementById('max-antiroll-bars').value);

    /* formula: (max - min) * frontPercent + min */
    document.getElementById('f-aero').innerHTML = 'MAX RIGHT';
    document.getElementById('r-aero').innerHTML = 'MAX RIGHT';

    document.getElementById('f-damping').innerHTML = ((maxDamping - minDamping) * frontPercent + minDamping).toFixed(2);
    document.getElementById('r-damping').innerHTML = ((maxDamping - minDamping) * (1 - frontPercent) + minDamping).toFixed(2);

    document.getElementById('f-bump').innerHTML = (.6 * (((maxDamping - minDamping) * frontPercent + minDamping))).toFixed(2);
    document.getElementById('r-bump').innerHTML = (.6 * (((maxDamping - minDamping) * (1 - frontPercent) + minDamping))).toFixed(2);

    document.getElementById('f-springs').innerHTML = ((maxSprings - minSprings) * frontPercent + minSprings).toFixed(2);
    document.getElementById('r-springs').innerHTML = ((maxSprings - minSprings) * (1 - frontPercent) + minSprings).toFixed(2);

    document.getElementById('f-antiroll-bars').innerHTML = ((maxAntiroll - minAntiroll) * frontPercent + minAntiroll).toFixed(2);
    document.getElementById('r-antiroll-bars').innerHTML = ((maxAntiroll - minAntiroll) * (1 - frontPercent) + minAntiroll).toFixed(2);
}
const calcDrag = () => {
    //for some reason only works if initialized in function
    let frontPercent = Number(document.getElementById('frontPercent').value);
    let minDamping = Number(document.getElementById('min-damping').value);
    let maxDamping = Number(document.getElementById('max-damping').value);
    let minSprings = Number(document.getElementById('min-springs').value);
    let maxSprings = Number(document.getElementById('max-springs').value);
    let minAntiroll = Number(document.getElementById('min-antiroll-bars').value);
    let maxAntiroll = Number(document.getElementById('max-antiroll-bars').value);
}
const calcDrift = () => {
    //for some reason only works if initialized in function
    let frontPercent = Number(document.getElementById('frontPercent').value);
    let minDamping = Number(document.getElementById('min-damping').value);
    let maxDamping = Number(document.getElementById('max-damping').value);
    let minSprings = Number(document.getElementById('min-springs').value);
    let maxSprings = Number(document.getElementById('max-springs').value);
    let minAntiroll = Number(document.getElementById('min-antiroll-bars').value);
    let maxAntiroll = Number(document.getElementById('max-antiroll-bars').value);
}
const calcRally = () => {
    //for some reason only works if initialized in function
    let frontPercent = Number(document.getElementById('frontPercent').value);
    let minDamping = Number(document.getElementById('min-damping').value);
    let maxDamping = Number(document.getElementById('max-damping').value);
    let minSprings = Number(document.getElementById('min-springs').value);
    let maxSprings = Number(document.getElementById('max-springs').value);
    let minAntiroll = Number(document.getElementById('min-antiroll-bars').value);
    let maxAntiroll = Number(document.getElementById('max-antiroll-bars').value);
}
