// Drum Arrays


let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

function toggleDrum(sound, index) {
    if (index <= 15 && index >= 0)
        switch (sound) {
            case 'kicks':
                return kicks[index] = !kicks[index];
            case 'snares':
                return snares[index] = !snares[index];
            case 'hiHats':
                return hiHats[index] = !hiHats[index];
            case 'rideCymbals':
                return rideCymbals[index] = !rideCymbals[index];
            default:
                break;
        }
}

function clear(sound) {
    switch (sound) {
        case 'kicks':
            return kicks.fill(false);
        case 'snares':
            return snares.fill(false);
        case 'hiHats':
            return hiHats.fill(false);
        case 'rideCymbals':
            return rideCymbals.fill(false);
        default:
            break;
    }
}

function invert(sound) {
    switch (sound) {
        case 'kicks':
            return kicks = kicks.map(value => !value);
        case 'snares':
            return snares = snares.map(value => !value);
        case 'hiHats':
            return hiHats = hiHats.map(value => !value);
        case 'rideCymbals':
            return rideCymbals = rideCymbals.map(value => !value);
        default:
            break;
    }
}

function getNeighborPads(x, y, size) {
    if (x > size - 1 || y > size - 1 || x < 0 || y < 0) return [];
    const response = [];
    response.push([x - 1, y]);
    response.push([x + 1, y]);
    response.push([x, y - 1]);
    response.push([x, y + 1]);
    return response.filter(value => {
        return value.every(v => {
            return v >= 0 && v < size;
        })
    });

}


