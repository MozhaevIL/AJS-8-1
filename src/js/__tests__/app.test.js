import Team from '../app';

const fighter = { name: 'Fighty', className: 'fighter' };
const cleric = { name: 'Healy', className: 'cleric' };
const mage = { name: 'Casty', className: 'mage' };

test('should add correct character to the team', () => {
  const myTeam = new Team();
  myTeam.add(mage);
  const recieved = myTeam.members.has(mage);
  expect(recieved).toBe(true);
});

test('should throw an error when trying to add character already in team', () => {
  expect(() => {
    const myTeam = new Team();
    myTeam.add(fighter);
    myTeam.add(fighter);
  }).toThrow('Этот персонаж уже в команде');
});

test('should add multiple characters to a team without duplication', () => {
  const myTeam = new Team();
  myTeam.addAll(fighter, cleric, mage, fighter, cleric, mage);
  const recieved = myTeam.members.size;
  expect(recieved).toBe(3);
});

test('should convert set to array correctly', () => {
  const myTeam = new Team();
  myTeam.addAll(fighter, cleric);
  const recieved = myTeam.toArray();
  const expected = [
    { name: 'Fighty', className: 'fighter' },
    { name: 'Healy', className: 'cleric' },
  ];

  expect(recieved).toEqual(expected);
});
