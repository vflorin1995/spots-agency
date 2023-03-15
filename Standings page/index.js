const doc = document.querySelector('.ranking');
const header = ['#', 'Team', 'MP', 'G', 'PTS'];
const data = [{
  rank: 1, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 2, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 3, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 4, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 5, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 6, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 7, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 8, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 9, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
},
{
  rank: 10, name: 'PSV Eindhoven', mp: 36, g: 28, pts: 89,
}];

const headerContainer = document.createElement('div');
headerContainer.classList = 'flex justify-between ranking-header';

header.forEach((item) => {
  const headerItem = document.createElement('p');
  headerItem.innerText = item;
  headerContainer.append(headerItem);
});

doc.append(headerContainer);

data.forEach((item) => {
  const container = document.createElement('div');
  container.classList = 'flex justify-between team-item';

  const rank = document.createElement('p');
  const span = document.createElement('span');
  span.innerText = item.rank;
  span.className = 'blue-background';
  rank.append(span);

  const teamName = document.createElement('p');
  teamName.innerText = item.name;

  const matchPlayed = document.createElement('p');
  matchPlayed.innerText = item.mp;

  const goals = document.createElement('p');
  goals.innerText = item.g;

  const points = document.createElement('p');
  points.innerText = item.pts;

  container.append(rank, teamName, matchPlayed, goals, points);

  doc.append(container);
});

const firstNav = Array.from(document.querySelector('.option-submenu').getElementsByTagName('li'));
const secondNav = Array.from(document.querySelector('.stadium-submenu').getElementsByTagName('li'));
const thirdNav = Array.from(document.querySelector('.time-submenu').getElementsByTagName('li'));

const clearSelectedButton = (arr) => {
  arr.forEach((element) => {
    element.className = '';
  });
};

firstNav.forEach((button) => {
  button.addEventListener('click', () => {
    const index = firstNav.indexOf(button);
    clearSelectedButton(firstNav);
    firstNav[index].className = 'option-submenu-selected';
  });
});

secondNav.forEach((button) => {
  button.addEventListener('click', () => {
    const index = secondNav.indexOf(button);
    clearSelectedButton(secondNav);
    secondNav[index].className = 'stadium-submenu-selected';
  });
});

thirdNav.forEach((button) => {
  button.addEventListener('click', () => {
    const index = thirdNav.indexOf(button);
    clearSelectedButton(thirdNav);
    thirdNav[index].className = 'time-submenu-selected';
  });
});