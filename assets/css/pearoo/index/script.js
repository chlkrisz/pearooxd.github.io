const subs = document.querySelector(".footer-subs");
const bar = document.querySelector(".bar-accent");
const subsbar = document.querySelector(".subs-bar");

const milestones = [10, 50, 100, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 600000, 700000, 800000, 900000, 1000000, 1500000, 2000000]
// Egy ideig jó lesz ez a lista szerintem..

function getNearestMilestone(count) {
    let n = null;
    for (let i = 0; i < milestones.length; i++) {
        if (milestones[i] > count) {
            n = milestones[i];
            break;
        }
    }
    return n;
}

(async () => {
    const api = await fetch("https://api.socialcounts.org/youtube-live-subscriber-count/UCsBw4YIB40Zpiw4yVIqxtbg");
    const data = await api.json();
    const goal = getNearestMilestone(data['API_sub']);
    subs.innerText = `${data['API_sub']}/${goal}`;
    const barW = (data['API_sub'] * 100) / goal + "%";
    bar.style.width = barW;
})();
