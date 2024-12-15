"use strict";
var _a;
const boardSize = 35; // 35 tiles
let currentPlayerIndex = 0;
const tilesData = [
    {
        id: "1",
        name: "GO",
        type: "special",
        description: "Collect $200 when you pass."
    },
    {
        id: "2",
        name: "Mediterranean Avenue",
        type: "property",
        color: "brown",
        price: 60,
        rent: [2, 10, 30, 90, 160, 250],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "3",
        name: "Community Chest",
        type: "special",
        description: "Draw a Community Chest card."
    },
    {
        id: "4",
        name: "Baltic Avenue",
        type: "property",
        color: "brown",
        price: 60,
        rent: [4, 20, 60, 180, 320, 450],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "5",
        name: "Income Tax",
        type: "tax",
        amount: 200
    },
    {
        id: "6",
        name: "Reading Railroad",
        type: "railroad",
        price: 200,
        rent: [25, 50, 100, 200]
    },
    {
        id: "7",
        name: "Oriental Avenue",
        type: "property",
        color: "light blue",
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "8",
        name: "Chance",
        type: "special",
        description: "Draw a Chance card."
    },
    {
        id: "9",
        name: "Vermont Avenue",
        type: "property",
        color: "light blue",
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "10",
        name: "Connecticut Avenue",
        type: "property",
        color: "light blue",
        price: 120,
        rent: [8, 40, 100, 300, 450, 600],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "11",
        name: "Jail",
        type: "special",
        description: "Just visiting or in jail."
    },
    {
        id: "12",
        name: "St. Charles Place",
        type: "property",
        color: "pink",
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "13",
        name: "Electric Company",
        type: "utility",
        price: 150,
        rentMultiplier: [4, 10]
    },
    {
        id: "14",
        name: "States Avenue",
        type: "property",
        color: "pink",
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "15",
        name: "Virginia Avenue",
        type: "property",
        color: "pink",
        price: 160,
        rent: [12, 60, 180, 500, 700, 900],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "16",
        name: "St. James Place",
        type: "property",
        color: "orange",
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "17",
        name: "Tennessee Avenue",
        type: "property",
        color: "orange",
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "18",
        name: "New York Avenue",
        type: "property",
        color: "orange",
        price: 200,
        rent: [16, 80, 220, 600, 800, 1000],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "19",
        name: "Free Parking",
        type: "special",
        description: "No action."
    },
    {
        id: "20",
        name: "Kentucky Avenue",
        type: "property",
        color: "red",
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "21",
        name: "Indiana Avenue",
        type: "property",
        color: "red",
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "22",
        name: "Illinois Avenue",
        type: "property",
        color: "red",
        price: 240,
        rent: [20, 100, 300, 750, 925, 1100],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "23",
        name: "B&O Railroad",
        type: "railroad",
        price: 200,
        rent: [25, 50, 100, 200]
    },
    {
        id: "24",
        name: "Atlantic Avenue",
        type: "property",
        color: "yellow",
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "25",
        name: "Ventnor Avenue",
        type: "property",
        color: "yellow",
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "26",
        name: "Water Works",
        type: "utility",
        price: 150,
        rentMultiplier: [4, 10]
    },
    {
        id: "27",
        name: "Marvin Gardens",
        type: "property",
        color: "yellow",
        price: 280,
        rent: [24, 120, 360, 850, 1025, 1200],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "28",
        name: "Go to Jail",
        type: "special",
        description: "Move directly to Jail. Do not pass GO, do not collect $200."
    },
    {
        id: "29",
        name: "Pacific Avenue",
        type: "property",
        color: "green",
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "30",
        name: "North Carolina Avenue",
        type: "property",
        color: "green",
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "31",
        name: "Pennsylvania Avenue",
        type: "property",
        color: "green",
        price: 320,
        rent: [28, 150, 450, 1000, 1200, 1400],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "32",
        name: "Short Line",
        type: "railroad",
        price: 200,
        rent: [25, 50, 100, 200]
    },
    {
        id: "33",
        name: "Park Place",
        type: "property",
        color: "dark blue",
        price: 350,
        rent: [35, 175, 500, 1100, 1300, 1500],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "34",
        name: "Luxury Tax",
        type: "tax",
        amount: 100
    },
    {
        id: "35",
        name: "Boardwalk",
        type: "property",
        color: "dark blue",
        price: 400,
        rent: [50, 200, 600, 1400, 1700, 2000],
        houseCost: 200,
        hotelCost: 200
    }
];
const board = Array.from({ length: boardSize }, (_, index) => {
    return tilesData.find(tile => parseInt(tile.id) === index) || { id: String(index), name: `Tile ${index}`, type: 'empty' };
});
console.log(board);
const players = [
    { id: 'player1', name: 'Player 1 🧙🏽‍♂️', icon: '🧙🏽‍♂️', money: 1500, position: 0, properties: [], active: true },
    { id: 'player2', name: 'Player 2 🧞‍♂️', icon: '🧞‍♂️', money: 1500, position: 0, properties: [], active: false }
];
const tiles = tilesData.map(tile => (Object.assign(Object.assign({}, tile), { element: document.getElementById(tile.id) })));
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const movePlayerIcons = () => {
    players.forEach((player, index) => {
        const existingIcon = document.querySelector(`.player${index + 1}-icon`);
        if (existingIcon) {
            existingIcon.remove();
        }
        const currentTile = document.getElementById(player.position.toString());
        const playerIcon = document.createElement('span');
        playerIcon.classList.add(`player${index + 1}-icon`);
        playerIcon.textContent = player.icon;
        currentTile.appendChild(playerIcon);
    });
};
const updateUI = () => {
    players.forEach((player, index) => {
        const playerMoneyElement = document.querySelector(`.player${index + 1} .player-money`);
        if (playerMoneyElement) {
            playerMoneyElement.textContent = `$${player.money}`;
        }
    });
};
const startTurn = () => {
    const currentPlayer = players[currentPlayerIndex];
    const roll = rollDice();
    alert(`${currentPlayer.name} rolled a ${roll}`);
    currentPlayer.position = (currentPlayer.position + roll);
    if (currentPlayer.position > 35) {
        currentPlayer.position -= 35;
    }
    console.log(currentPlayer.position);
    movePlayerIcons();
    updateUI();
    nextPlayer();
};
const nextPlayer = () => {
    const currentPlayerCard = document.querySelector(`.player${currentPlayerIndex + 1}`);
    currentPlayerCard.classList.remove('active');
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    const nextPlayerCard = document.querySelector(`.player${currentPlayerIndex + 1}`);
    nextPlayerCard.classList.add('active');
};
const initializeGame = () => {
    updateUI();
    movePlayerIcons();
};
(_a = document.getElementById('rollDiceButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startTurn);
// Start the game
initializeGame();
