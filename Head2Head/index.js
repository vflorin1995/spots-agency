const data = {
  team1src: './8456.png',
  team1alt: 'team logo',
  team2src: './8456.png',
  team2alt: 'team logo',
  team1last5: [1, 1, 3],
  teamName1: 'Gimnasia y Esgrima La Plata',
  teamName2: 'Manchester City',
  BTTS: 5,
  team1cleanSheets: 100,
  team2cleanSheets: 30,
  team1goalsInBothHalfs: 5,
  team1over15: 5,
  team1over25: 3,
  team1over35: 1,
  team1lastMatches: [{
    champ: 'Copa Libertadores - Grupe', date: '15.05.22', score: '2-1', against: 'Gimnasia y Esgrima La Plata',
  },
  {
    champ: 'Copa Libertadores - Grupe', date: '15.05.22', score: '2-1', against: 'Gimnasia y Esgrima La Plata',
  },
  {
    champ: 'Copa Libertadores - Grupe', date: '15.05.22', score: '2-1', against: 'Gimnasia y Esgrima La Plata',
  },
  {
    champ: 'Copa Libertadores - Grupe', date: '15.05.22', score: '2-1', against: 'Gimnasia y Esgrima La Plata',
  },
  {
    champ: 'Copa Libertadores - Grupe', date: '15.05.22', score: '2-1', against: 'Gimnasia y Esgrima La Plata',
  }],

};

const main = document.getElementsByTagName('main').item(0);

const infoBar = document.createElement('div');
infoBar.classList = 'flex justify-between info-bar flex-gap-5';

const team1logo = document.createElement('img');
team1logo.src = data.team1src;
team1logo.alt = data.team1alt;
team1logo.className = 'team-logo';

const team2logo = document.createElement('img');
team2logo.src = data.team2src;
team2logo.alt = data.team2alt;
team2logo.className = 'team-logo';

const barItem = document.createElement('div');
barItem.classList = 'flex bar-item flex-col';
barItem.innerHTML = `<div class="green-pill ml-26">${data.team1last5[0]} draw</div>
<div class="percentage-bar">
    <span class="green">${data.team1last5[0] * 20}%</span>
    <span class="yellow">${data.team1last5[1] * 20}%</span>
    <span class="red">${data.team1last5[2] * 20}%</span>
</div>
<div class="flex justify-between" >
    <span class="green-pill ml-5">${data.team1last5[1]} win</span>
    <span class="green-pill mr-20">${data.team1last5[2]} losses</span>
</div>`;
infoBar.append(team1logo, barItem, team2logo);

const teamNameBar = document.createElement('div');
teamNameBar.classList = 'flex justify-between align-center team-name-bar';
teamNameBar.innerHTML = `<div class="team-name">${data.teamName1}</div>
<div class="flex button-container">
    <button class="button-pressed">5</button>
    <button>10</button>
    <button>Toate</button>
</div>
<div class="team-name text-align-right">${data.teamName2}</div>`;

const paragraph = document.createElement('p');
paragraph.className = 'paragraph';
paragraph.innerText = 'If the teams finish with equal points, the tie is made in the operation of the direct activity. Lorem ipsum dolor.';

const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
gridContainer.innerHTML = `
<div class="flex flex-col bg-light-green justify-between">
<div class="flex justify-between align-vertical">
    <p class="number-matches text-green" >${data.BTTS}/5 matches</p>
    <p class="matches-percentage text-green">${data.BTTS * 20}%</p>
</div>
<p class="stats-matches text-green">BTTS</p>
</div>
<div class="flex flex-col bg-light-green justify-between">
<p class="clean-sheets text-green">Clean Sheets</p>
<div>
    <div class="green-bar">${data.team1cleanSheets}%</div>
    <div class="flex justify-between align-center">
        <div class="red-bar"></div>
        <div class="red-bar-percentage">${data.team2cleanSheets}%</div>
    </div>
</div>
</div>
<div class="flex flex-col bg-light-green justify-between">
<div class="flex justify-between align-vertical">
    <p class="number-matches text-green" >${data.team1goalsInBothHalfs}/5 matches</p>
    <p class="matches-percentage text-green">${data.team1goalsInBothHalfs * 20}%</p>
</div>
<p class="stats-matches text-green">Goals in both halfs</p>
</div>
<div class="flex flex-col bg-light-green justify-between">
<div class="flex justify-between align-vertical">
    <p class="number-matches text-green" >${data.team1over15}/5 matches</p>
    <p class="matches-percentage text-green">${data.team1over15 * 20}%</p>
</div>
<p class="stats-matches text-green">Over 1.5</p>
</div>
<div class="flex flex-col justify-between yellow-card">
<div class="flex justify-between align-vertical">
    <p class="number-matches text-yellow" >${data.team1over25}/5 matches</p>
    <p class="matches-percentage text-yellow">${data.team1over15 * 20}%</p>
</div>
<p class="stats-matches text-yellow">Over 2.5</p>
</div>
<div class="flex flex-col red-card justify-between">
<div class="flex justify-between align-vertical">
    <p class="number-matches text-red" >${data.team1over35}/5 matches</p>
    <p class="matches-percentage text-red">${data.team1over35 * 20}%</p>
</div>
<p class="stats-matches text-red">Over 3.5</p>
</div>`;

const hr = document.createElement('hr');

const horizontalStats = document.createElement('div');
horizontalStats.className = 'horizontal-stats';
horizontalStats.innerHTML = `<button class="button-pressed">All</button>
<button>${data.teamName1} - Home</button>
<button>${data.teamName2} - Away</button>`;

const pastMatchesContainer = document.createElement('div');
pastMatchesContainer.classList = 'flex flex-col flex-gap-5 past-matches-container';

data.team1lastMatches.forEach((item) => {
  const matchContainer = document.createElement('div');
  matchContainer.classList = 'flex align-center match-container flex-gap-10';
  matchContainer.innerHTML = `
    <div class="match-division">
    <div class="fs-10 line-height-12">${item.champ}</div>
    <div class="flex align-center flex-gap-5"> 
        <img src="./EU flag.png" alt="european flag">
        <span class="fs-10">${item.date}</span>
    </div>
</div>
<div class="fs-12 match-teams line-height-12">${data.teamName1}</div>
<div class="fs-12 match-score">${item.score}</div>
<div class="fs-12 match-teams line-height-12">${item.against}</div>`;
  pastMatchesContainer.append(matchContainer);
});

const buttonContainer = document.createElement('div');
buttonContainer.classList = 'flex justify-center';

const showMoreButton = document.createElement('button');
showMoreButton.innerText = 'Show more';
showMoreButton.className = 'show-more-button';

buttonContainer.append(showMoreButton);

main.append(infoBar, teamNameBar, paragraph, gridContainer, hr, horizontalStats, pastMatchesContainer, buttonContainer);

const buttonsArr1 = Array.from(document.querySelector('.button-container').getElementsByTagName('button'));
const buttonsArr2 = Array.from(document.querySelector('.horizontal-stats').getElementsByTagName('button'));

const clearSelectedButton = (arr) => {
  arr.forEach((element) => {
    element.className = '';
  });
};

buttonsArr1.forEach((button) => {
  button.addEventListener('click', () => {
    const index = buttonsArr1.indexOf(button);
    clearSelectedButton(buttonsArr1);
    buttonsArr1[index].className = 'button-pressed';
  });
});

buttonsArr2.forEach((button) => {
  button.addEventListener('click', () => {
    const index = buttonsArr2.indexOf(button);
    clearSelectedButton(buttonsArr2);
    buttonsArr2[index].className = 'button-pressed';
  });
});