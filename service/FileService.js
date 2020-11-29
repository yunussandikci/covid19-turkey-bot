const fs = require('fs');

const latestDataFile = "./data/latest.json"

class FileService {
    constructor() {
    }

    async getLatest () {
        return JSON.parse(fs.readFileSync(latestDataFile));
    }

    async saveLatest (data) {
        return fs.writeFileSync(latestDataFile, JSON.stringify(data));
    }

}

module.exports = { FileService }