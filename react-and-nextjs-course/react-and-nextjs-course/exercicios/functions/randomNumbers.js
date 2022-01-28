
function numberUpTo(max) {
    return Number.parseInt(Math.random() * max) + 1
}

export function randomNumbers(qtd, numbers=[]) {
    if (numbers.length === qtd) {
        return numbers.sort()
    } else {
        let randomInt = numberUpTo(60)
        if (numbers.includes(randomInt)) {
            return randomNumbers(qtd, numbers)
        } else {
            return randomNumbers(qtd, [...numbers, randomInt])
        }
    }
}

