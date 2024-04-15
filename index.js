const start = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resume = document.getElementById('resume');
const resetButton = document.getElementById('reset');
const percentage = document.getElementById('percentage');

pauseButton.style.display = 'none';
resume.style.display = 'none';
resetButton.style.display = 'none';

const insideBar = document.getElementById('bar-fill');
insideBar.style.width = '0%';
var complete = parseInt(insideBar.style.width);
               
function startAndResume() {
    if (complete < 100) {
        var time = document.getElementById('Time').value * 10;
        progress = setInterval(
            function () {
                complete += 1;
                insideBar.style.width = complete + '%';
                percentage.innerHTML = complete + ' %';
                if (complete == 100) {
                    clearInterval(progress);
                    start.style.display = 'none';
                    pauseButton.style.display = 'none';
                    resume.style.display = 'none';
                }
            }, 
        time);
        start.style.display = 'none';
        pauseButton.style.display = 'block';
        resume.style.display = 'none';
        resetButton.style.display = 'block';
    }
}

function reset() {
    clearInterval(progress);
    complete = 0;
    insideBar.style.width = complete + '%';
    percentage.innerHTML = complete + ' %';
    start.style.display = 'block';
    pauseButton.style.display = 'none';
    resume.style.display = 'none';
    resetButton.style.display = 'none';
}   
                    
function pause() {
    clearInterval(progress);
    resume.style.display = 'block';
    pauseButton.style.display = 'none';
}