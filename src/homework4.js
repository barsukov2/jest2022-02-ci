/**
 * @param name string
 * @returns {string}
 */
export function kolobok(name) {
    switch (name) {
        case 'дедушка':
            return 'Я от дедушки ушел';
        case 'бабушка':
            return 'Я от бабушки ушел';
        case 'заяц':
            return 'Я от зайца ушел';
        case 'волк':
            return 'Я от волка ушел';
        case 'медведь':
            return 'Я от медведя ушел';
        case 'лиса':
            return 'Я от лисы не ушел';
        default:
            throw new Error(`Неизвестный персонаж. Список корректных: дедушка, бабушка, заяц, волк, медведь, лиса`);
    }
}

/**
 * @param name string
 * @returns {string}
 */
export function newYear(name) {
    switch (name) {
        case 'Снегурочка':
            return `${name}! ${name}! ${name}!`;
        case 'Дед Мороз':
            return `${name}! ${name}! ${name}!`;
        default:
            throw new Error(`Неизвестный персонаж. Список корректных: Дед Мороз, Снегурочка`);
    }
}