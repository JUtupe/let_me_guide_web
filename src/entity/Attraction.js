import Location from "./Location"

class Attraction {
    constructor(json) {
        this.id = json.id;
        this.descriptions = json.descriptions;
        this.location = new Location(json.location)
    }
}

export default Attraction;