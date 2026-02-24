// 1 задача
export function calculatePower(voltage, resistance) {
    return voltage / resistance;
}
// 2 задача
export function swapCase(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
// 3 задача
export function formatAddress(street, city, country, index) {
    return `${street}, ${city}, ${index}, ${country}`;
}
// 4 задача
export function getTimeOfDay(time) {
    if (typeof time !== 'number' || time < 0 || time > 23) {
        return 0;
    }
    
    if (time >= 0 && time <= 5) {
        return "Ночь";
    } else if (time >= 6 && time <= 11) {
        return "Утро";
    } else if (time >= 12 && time <= 17) {
        return "День";
    } else {
        return "Вечер";
    }
}
// 5 задача
export function countLetter(text, symb) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symb) {
            count++;
        }
    }
    return count;
}