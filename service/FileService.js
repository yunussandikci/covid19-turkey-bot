import fs from "fs";
const latestDataFile = "./data/latest.json"

export default class FileService {
    getLatest = async function () {
        return JSON.parse(fs.readFileSync(latestDataFile));
    }

    saveLatest = async function (data) {
        return fs.writeFileSync(latestDataFile, JSON.stringify(data));
    }
}
