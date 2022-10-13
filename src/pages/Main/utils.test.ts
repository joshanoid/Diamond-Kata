import { generateDiamond } from "./utils";

describe("Generate Diamond", () => {
    it("returns empty string if the input is an empty string", () => {
        expect(generateDiamond("")).toBe("");
    });

    it("returns A if the letter is A", () => {
        expect(generateDiamond("A")).toBe("A");
    });
});
