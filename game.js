"use strict";
var _a;
const boardSize = 35;
let currentPlayerIndex = 0;
const players = [
    { id: 'player1', name: 'Player 1 🧙🏽‍♂️', icon: '🧙🏽‍♂️', money: 5000, position: 0, properties: [], active: true },
    { id: 'player2', name: 'Player 2 🧞‍♂️', icon: '🧞‍♂️', money: 5000, position: 0, properties: [], active: false }
];
const tilesData = [
    {
        id: "0",
        name: "GO",
        type: "special",
        description: "Collect $200 when you pass."
    },
    {
        id: "1",
        name: "Mediterranean Avenue",
        type: "property",
        color: "brown",
        price: 60,
        rent: [2, 10, 30, 90, 160, 250],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "2",
        name: "Community Chest",
        type: "special",
        description: "Draw a Community Chest card."
    },
    {
        id: "3",
        name: "Baltic Avenue",
        type: "property",
        color: "brown",
        price: 60,
        rent: [4, 20, 60, 180, 320, 450],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "4",
        name: "Income Tax",
        type: "tax",
        amount: 200
    },
    {
        id: "5",
        name: "Reading Railroad",
        type: "railroad",
        price: 200,
        rent: [25, 50, 100, 200]
    },
    {
        id: "6",
        name: "Oriental Avenue",
        type: "property",
        color: "light blue",
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "7",
        name: "Chance",
        type: "special",
        description: "Draw a Chance card."
    },
    {
        id: "8",
        name: "Vermont Avenue",
        type: "property",
        color: "light blue",
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "9",
        name: "Connecticut Avenue",
        type: "property",
        color: "light blue",
        price: 120,
        rent: [8, 40, 100, 300, 450, 600],
        houseCost: 50,
        hotelCost: 50
    },
    {
        id: "10",
        name: "Jail",
        type: "special",
        description: "Just visiting or in jail."
    },
    {
        id: "11",
        name: "St. Charles Place",
        type: "property",
        color: "pink",
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "12",
        name: "Electric Company",
        type: "utility",
        price: 150,
        rentMultiplier: [4, 10]
    },
    {
        id: "13",
        name: "States Avenue",
        type: "property",
        color: "pink",
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "14",
        name: "Virginia Avenue",
        type: "property",
        color: "pink",
        price: 160,
        rent: [12, 60, 180, 500, 700, 900],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "15",
        name: "St. James Place",
        type: "property",
        color: "orange",
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "16",
        name: "Tennessee Avenue",
        type: "property",
        color: "orange",
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "17",
        name: "New York Avenue",
        type: "property",
        color: "orange",
        price: 200,
        rent: [16, 80, 220, 600, 800, 1000],
        houseCost: 100,
        hotelCost: 100
    },
    {
        id: "18",
        name: "Free Parking",
        type: "special",
        description: "No action."
    },
    {
        id: "19",
        name: "Kentucky Avenue",
        type: "property",
        color: "red",
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "20",
        name: "Indiana Avenue",
        type: "property",
        color: "red",
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "21",
        name: "Illinois Avenue",
        type: "property",
        color: "red",
        price: 240,
        rent: [20, 100, 300, 750, 925, 1100],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "22",
        name: "B&O Railroad",
        type: "railroad",
        price: 200,
        rent: [25, 50, 100, 200]
    },
    {
        id: "23",
        name: "Atlantic Avenue",
        type: "property",
        color: "yellow",
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "24",
        name: "Ventnor Avenue",
        type: "property",
        color: "yellow",
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "25",
        name: "Water Works",
        type: "utility",
        price: 150,
        rentMultiplier: [4, 10]
    },
    {
        id: "26",
        name: "Marvin Gardens",
        type: "property",
        color: "yellow",
        price: 280,
        rent: [24, 120, 360, 850, 1025, 1200],
        houseCost: 150,
        hotelCost: 150
    },
    {
        id: "27",
        name: "Go to Jail",
        type: "special",
        description: "Move directly to Jail. Do not pass GO, do not collect $200."
    },
    {
        id: "28",
        name: "Pacific Avenue",
        type: "property",
        color: "green",
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "29",
        name: "North Carolina Avenue",
        type: "property",
        color: "green",
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "30",
        name: "Pennsylvania Avenue",
        type: "property",
        color: "green",
        price: 320,
        rent: [28, 150, 450, 1000, 1200, 1400],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "31",
        name: "Short Line",
        type: "railroad",
        price: 200,
        rent: [25, 50, 100, 200]
    },
    {
        id: "32",
        name: "Park Place",
        type: "property",
        color: "dark blue",
        price: 350,
        rent: [35, 175, 500, 1100, 1300, 1500],
        houseCost: 200,
        hotelCost: 200
    },
    {
        id: "33",
        name: "Luxury Tax",
        type: "tax",
        amount: 100
    },
    {
        id: "34",
        name: "Boardwalk",
        type: "property",
        color: "dark blue",
        price: 400,
        rent: [50, 200, 600, 1400, 1700, 2000],
        houseCost: 200,
        hotelCost: 200
    }
];
const tiles = tilesData.map(tile => (Object.assign(Object.assign({}, tile), { element: document.getElementById(tile.id) })));
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const movePlayerIcons = () => {
    players.forEach((player, index) => {
        const currentTile = tiles[player.position];
        const existingIcon = document.querySelector(`.player${index + 1}-icon`);
        if (existingIcon)
            existingIcon.remove();
        const playerIcon = document.createElement('span');
        playerIcon.classList.add(`player${index + 1}-icon`);
        playerIcon.textContent = player.icon;
        currentTile === null || currentTile === void 0 ? void 0 : currentTile.element.appendChild(playerIcon);
    });
};
const updateUI = () => {
    players.forEach((player, index) => {
        const playerMoneyElement = document.querySelector(`.player${index + 1} .player-money`);
        const playerCard = document.querySelector(`.player${index + 1}`);
        if (playerMoneyElement) {
            playerMoneyElement.textContent = `$${player.money}`;
        }
        if (playerCard) {
            playerCard.classList.toggle('active', player.active);
        }
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const buyHouseButtons = document.querySelectorAll(".buy-house");
    const buyRailroadButtons = document.querySelectorAll(".buy-railroad");
    const buyUtilityButtons = document.querySelectorAll(".buy-utility");
    buyHouseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentPlayer = players[index];
            const currentTile = tiles[currentPlayer.position];
            if (currentTile && currentTile.type === "property" && currentPlayer.money >= currentTile.houseCost) {
                handleBuyHouse(currentPlayer, currentTile);
            }
            else if (currentTile && currentTile.type === "property") {
                alert(`${currentPlayer.name} does not have enough money to buy a house on ${currentTile.name}`);
            }
        });
    });
    buyRailroadButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentPlayer = players[index];
            const currentTile = tiles[currentPlayer.position];
            if (currentTile && currentTile.type === "railroad" && currentPlayer.money >= currentTile.price) {
                handleBuyRailroad(currentPlayer, currentTile);
            }
            else if (currentTile && currentTile.type === "railroad") {
                alert(`${currentPlayer.name} does not have enough money to buy the railroad ${currentTile.name}`);
            }
        });
    });
    buyUtilityButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentPlayer = players[index];
            const currentTile = tiles[currentPlayer.position];
            if (currentTile && currentTile.type === "utility" && currentPlayer.money >= currentTile.price) {
                handleBuyUtility(currentPlayer, currentTile);
            }
            else if (currentTile && currentTile.type === "utility") {
                alert(`${currentPlayer.name} does not have enough money to buy the utility ${currentTile.name}`);
            }
        });
    });
});
const handleBuyHouse = (currentPlayer, property) => {
    const alreadyOwns = currentPlayer.properties.some(p => p.name === property.name);
    if (alreadyOwns) {
        alert(`${property.name} has already been pushed to your properties.`);
        return;
    }
    if (currentPlayer.money >= property.houseCost) {
        currentPlayer.money -= property.houseCost;
        property.houses += 1;
        alert(`${currentPlayer.name} bought a house on ${property.name} for $${property.houseCost}`);
        if (!property.owner) {
            property.owner = currentPlayer;
            currentPlayer.properties.push(property);
        }
        updatePlayerProperties(currentPlayer);
        updateUI();
    }
    else {
        alert(`${currentPlayer.name} does not have enough money to buy a house on ${property.name}`);
    }
};
const handleBuyRailroad = (currentPlayer, railroad) => {
    const alreadyOwns = currentPlayer.properties.some(p => p.name === railroad.name);
    if (alreadyOwns) {
        alert(`${railroad.name} has already been pushed to your properties.`);
        return;
    }
    if (currentPlayer.money >= railroad.price) {
        currentPlayer.money -= railroad.price;
        alert(`${currentPlayer.name} bought the railroad ${railroad.name} for $${railroad.price}`);
        if (!railroad.owner) {
            railroad.owner = currentPlayer;
            //@ts-ignore
            currentPlayer.properties.push(railroad);
        }
        updatePlayerProperties(currentPlayer);
        updateUI();
    }
    else {
        alert(`${currentPlayer.name} does not have enough money to buy ${railroad.name}`);
    }
};
const handleBuyUtility = (currentPlayer, utility) => {
    const alreadyOwns = currentPlayer.properties.some(p => p.name === utility.name);
    if (alreadyOwns) {
        alert(`${utility.name} has already been pushed to your properties.`);
        return;
    }
    if (currentPlayer.money >= utility.price) {
        currentPlayer.money -= utility.price;
        alert(`${currentPlayer.name} bought the utility ${utility.name} for $${utility.price}`);
        if (!utility.owner) {
            utility.owner = currentPlayer;
            //@ts-ignore
            currentPlayer.properties.push(utility);
        }
        updatePlayerProperties(currentPlayer);
        updateUI();
    }
    else {
        alert(`${currentPlayer.name} does not have enough money to buy ${utility.name}`);
    }
};
const handleProperty = (currentPlayer, tile) => {
    if (!tile.owner) {
        if (currentPlayer.money >= tile.price) {
            currentPlayer.money -= tile.price;
            const purchaseMessage = tile.type === "property"
                ? `can now buy a house on ${tile.name} by clicking 'Buy House'`
                : tile.type === "railroad"
                    ? `can now buy a railroad on ${tile.name} by clicking 'Buy Railroad'`
                    : tile.type === "utility"
                        ? `can now buy a utility on ${tile.name} by clicking 'Buy Utility'`
                        : '';
            alert(`${currentPlayer.name} ${purchaseMessage}`);
        }
        else {
            alert(`${currentPlayer.name} does not have enough money to buy ${tile.name}`);
        }
    }
    else if (tile.owner === currentPlayer) {
        const ownershipMessage = tile.type === "property"
            ? "Click 'Buy House' to purchase a house."
            : tile.type === "railroad"
                ? "You already own this railroad."
                : tile.type === "utility"
                    ? "You already own this utility."
                    : '';
        alert(`${currentPlayer.name} already owns ${tile.name}. ${ownershipMessage}`);
    }
    else {
        alert(`${currentPlayer.name} has to pay rent to ${tile.owner.name}`);
    }
    updateUI();
};
const updatePlayerProperties = (player) => {
    const playerPropertiesDiv = document.querySelector(`.player${players.indexOf(player) + 1} .player-properties`);
    if (playerPropertiesDiv) {
        playerPropertiesDiv.innerHTML = '';
        player.properties.forEach(property => {
            const propertyTile = document.createElement('div');
            propertyTile.classList.add('property-tile');
            propertyTile.textContent = `${property.name} - $${property.price}`;
            playerPropertiesDiv.appendChild(propertyTile);
        });
    }
};
const handleRentPayment = (currentPlayer, tile) => {
    const owner = tile.owner;
    if (owner && owner !== currentPlayer) {
        let rentArray;
        const tileData = tilesData.find(t => t.id === tile.id);
        if (!tileData) {
            console.error(`Tile data for ID ${tile.id} not found.`);
            return;
        }
        if (tile.type === "property") {
            rentArray = tileData.rent; // Rent for property
        }
        else if (tile.type === "railroad" || tile.type === "utility") {
            rentArray = tileData.rentMultiplier; // Rent multiplier for railroad or utility
        }
        if (!rentArray) {
            console.error(`Rent array not found for tile ID ${tile.id}`);
            return;
        }
        //@ts-ignore
        if (tile.currentRentIndex === undefined) {
            //@ts-ignore
            tile.currentRentIndex = 0;
        }
        const rentAmount = rentArray[tile.currentRentIndex];
        if (currentPlayer.money >= rentAmount) {
            currentPlayer.money -= rentAmount;
            owner.money += rentAmount;
            alert(`${currentPlayer.name} paid $${rentAmount} in rent to ${owner.name}`);
            //@ts-ignore
            tile.currentRentIndex = (tile.currentRentIndex + 1) % rentArray.length;
        }
        else {
            const shortfall = rentAmount - currentPlayer.money;
            alert(`${currentPlayer.name} does not have enough money to pay $${rentAmount} in rent to ${owner.name}. 
                 They are short by $${shortfall}. Bankruptcy imminent!`);
        }
    }
};
const handleChanceOrCommunityChest = (currentPlayer, tile) => {
    //@ts-ignore
    if (tile.type === "communityChest" || tile.type === "chance") {
        const randomChance = Math.random();
        if (randomChance <= 0.99) {
            currentPlayer.money += 1000;
            alert("Success! You won $1000!");
        }
    }
};
const handleTileAction = (currentPlayer, currentTile) => {
    switch (currentTile.type) {
        case "property":
        case "railroad":
        case "utility":
            if (!currentTile.owner) {
                handleProperty(currentPlayer, currentTile);
            }
            else {
                handleRentPayment(currentPlayer, currentTile);
            }
            break;
        case "special":
            alert(`${currentPlayer.name} landed on ${currentTile.name}.`);
            break;
        case "tax":
            if (currentTile.amount !== undefined) {
                currentPlayer.money -= currentTile.amount;
                alert(`${currentPlayer.name} paid $${currentTile.amount} in taxes.`);
            }
            break;
        case "chance":
        case "communityChest":
            handleChanceOrCommunityChest(currentPlayer, currentTile);
            break;
    }
};
const startTurn = () => {
    const currentPlayer = players[currentPlayerIndex];
    const roll = rollDice();
    alert(`${currentPlayer.name} rolled a ${roll}`);
    currentPlayer.position = (currentPlayer.position + roll) % boardSize;
    movePlayerIcons();
    const currentTile = tiles.find(tile => tile.id === currentPlayer.position.toString());
    if (currentTile) {
        handleTileAction(currentPlayer, currentTile);
    }
    updatePlayerProperties(currentPlayer);
    updateUI();
    nextPlayer();
};
const nextPlayer = () => {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    players.forEach((player, index) => {
        player.active = index === currentPlayerIndex;
    });
    updateUI();
};
(_a = document.getElementById("rollDiceButton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startTurn);
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});
const initializeGame = () => {
    updateUI();
    movePlayerIcons();
};
initializeGame();
