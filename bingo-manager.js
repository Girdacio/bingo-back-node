class BingoManager {
    constructor() {
        this.bingos = [];
    }

    addBingo(body) {        
        console.log(body);
        let bingo = { hash: Math.random().toString(36).substr(2, 5) };
        this.bingos.push(bingo);
        return bingo;
    }

    getBingos() {         
        return JSON.stringify(this.bingos);
    };
}

let bingoManagerInstance = new BingoManager();

module.exports = bingoManagerInstance;