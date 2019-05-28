class Location {
    constructor(json) {
        this.latitude = json.latitude;
        this.longitude = json.longitude;
        this.place = json.place;
    }
}

export default Location;