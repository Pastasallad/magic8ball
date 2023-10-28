const predictions = [
    ["It is certain",2],
    ["It is decidedly so",2],
    ["Without a doubt",2],
    ["Yes definitely",2],
    ["You may rely on it",2],
    ["As I see it, yes",2],
    ["Most likely",2],
    ["Outlook good",2],
    ["Yes",2],
    ["Signs point to yes",2],
    ["Reply hazy, try again",1],
    ["Ask again later",1],
    ["Better not tell you now",1],
    ["Cannot predict now",1],
    ["Concentrate and ask again",1],
    ["Don't count on it",0],
    ["My reply is no",0],
    ["My sources say no",0],
    ["Outlook not so good",0],
    ["Very doubtful",0]
];

function getPrediction() {
    const i = Math.floor(Math.random()*predictions.length);
    let style;
    switch (predictions[i][1]) {
        case 0:
            style = 'ball-red';
            break;
        case 1:
            style = 'ball-amber';
            break;
        case 2:
            style = 'ball-green';
            break;
    }
    document.getElementById('ball').classList = style;
    return '<p>' + predictions[i][0] + '</p>';
}