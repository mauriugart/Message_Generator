const randomParts = [
    "chicken cross the road? To get to the other side!",
    "scarecrow win an award? Because he was outstanding in his field!",
    "tomato turn red? Because it saw the salad dressing!",
    "math book look sad? Because it had too many problems.",
    "golfer bring an extra pair of pants? In case he got a hole in one!",
    "bicycle fall over? Because it was two-tired!",
    "computer go to the doctor? Because it had a virus!",
    "cookie go to the hospital? Because it felt crummy!",
    "crayon quit? Because it was tired of being pushed around!",
    "stadium get hot after the game? Because all the fans left!",
    "music teacher go to jail? Because she got caught with a set of keys!",
    "calendar go on vacation? Because it needed to relax after a busy year!",
    "orange stop? Because it ran out of juice!",
    "photo go to jail? Because it was framed!",
    "tree go to the dentist? Because it needed a root canal!"
];

function randomMessageGenerator () {
    let randomIndex = Math.floor(Math.random()*(randomParts.length-1));
    return '"Why did the ' + randomParts[randomIndex];
}

console.log(randomMessageGenerator());