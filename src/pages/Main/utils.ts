const startingCharCode = "A".charCodeAt(0);

const padding = (length: number) => " ".repeat(length);

export const addLine = (index: number, length: number) => {
    if (length - index < 1 || index < 0) {
        return "";
    }

    const letter = String.fromCharCode(startingCharCode + index);
    const leftPadding = padding(length - index - 1);

    if (index === 0) {
        return `${leftPadding}${letter}`;
    }

    return `${leftPadding}${letter}${padding(index * 2 - 1)}${letter}`;
};

export const generateDiamond = (letter: string) => {
    if (letter === "") {
        return "";
    }

    if (letter === "A") {
        return "A";
    }

    const charCode = letter.charCodeAt(0);
    const length = charCode - startingCharCode + 1;
    const upperHalf = Array.from(Array(length).keys()).map((index) => addLine(index, length));
    const lowerHalf = upperHalf.slice(0, upperHalf.length - 1).reverse();

    return [...upperHalf, ...lowerHalf].join("\n");
};
