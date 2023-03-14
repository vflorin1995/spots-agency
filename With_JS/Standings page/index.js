const doc = document.querySelector(".ranking");
const header = ['#', 'Team', 'MP', 'G', 'PTS'];
const data = [{rank: 1, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 2, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 3, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 4, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 5, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 6, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 7, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 8, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 9, name: 'PSV Eindhoven', mp:36, g:28, pts:89 },
            {rank: 10, name: 'PSV Eindhoven', mp:36, g:28, pts:89}];


let headerContainer = document.createElement('div');
headerContainer.classList="flex justify-between ranking-header";

header.forEach((item) => {
    let headerItem = document.createElement('p');
    headerItem.innerText = item;
    headerContainer.append(headerItem);
});

doc.append(headerContainer);

data.forEach((item) => {
    let container = document.createElement('div');
    container.classList = 'flex justify-between team-item';

    let rank = document.createElement('p');
    let span = document.createElement('span');
    span.innerText = item.rank;
    span.className = 'blue-background';
    rank.append(span);

    let teamName = document.createElement('p');
    teamName.innerText = item.name;

    let matchPlayed = document.createElement('p');
    matchPlayed.innerText = item.mp;

    let goals = document.createElement('p');
    goals.innerText = item.g;

    let points = document.createElement('p');
    points.innerText = item.pts;

    container.append(rank, teamName, matchPlayed, goals, points);

    doc.append(container);
});

let firstNav = Array.from(document.querySelector('.option-submenu').getElementsByTagName('li'));
let secondNav = Array.from(document.querySelector('.stadium-submenu').getElementsByTagName('li'));
let thirdNav = Array.from(document.querySelector('.time-submenu').getElementsByTagName('li'));

const clearSelectedButton = (arr) => {
    arr.forEach((element) => {
        element.className = '';
    });
}

firstNav.forEach((button) => {
    button.addEventListener('click', () => {
        let index = firstNav.indexOf(button);
        clearSelectedButton(firstNav);
        firstNav[index].className = 'option-submenu-selected';
    });
});

secondNav.forEach((button) => {
    button.addEventListener('click', () => {
        let index = secondNav.indexOf(button);
        clearSelectedButton(secondNav);
        secondNav[index].className = 'stadium-submenu-selected';
    });
});

thirdNav.forEach((button) => {
    button.addEventListener('click', () => {
        let index = thirdNav.indexOf(button);
        clearSelectedButton(thirdNav);
        thirdNav[index].className = 'time-submenu-selected';
    });
});