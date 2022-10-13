import { generateDiamond, addLine } from "./utils";

describe("Generate Line", () => {
    it("returns empty string if the difference of index and length is smaller than 0", () => {
        expect(addLine(2, 1)).toBe("");
        expect(addLine(0, -10)).toBe("");
        expect(addLine(10, 6)).toBe("");
    });

    it("returns empty string if index is smaller than 0", () => {
        expect(addLine(-2, 1)).toBe("");
        expect(addLine(-1, -10)).toBe("");
    });

    it("returns A for zero index", () => {
        expect(addLine(0, 1)).toBe("A");
        expect(addLine(0, 5)).toBe("    A");
    });

    it("returns proper lines", () => {
        expect(addLine(3, 6)).toBe("  D     D");
        expect(addLine(2, 7)).toBe("    C   C");
    });
});

describe("Generate Diamond", () => {
    it("returns empty string if the input is an empty string", () => {
        expect(generateDiamond("")).toBe("");
    });

    it("returns A if the letter is A", () => {
        expect(generateDiamond("A")).toBe("A");
    });

    it("generates proper diamonds", () => {
        expect(generateDiamond("B").replace(new RegExp("\r?\n", "g"), "&")).toBe(" A&B B& A");
        expect(generateDiamond("H").replace(new RegExp("\r?\n", "g"), "&")).toBe(
            "       A&      B B&     C   C&    D     D&   E       E&  F         F& G           G&H             H& G           G&  F         F&   E       E&    D     D&     C   C&      B B&       A"
        );
        expect(generateDiamond("R").replace(new RegExp("\r?\n", "g"), "&")).toBe(
            "                 A&                B B&               C   C&              D     D&             E       E&            F         F&           G           G&          H             H&         I               I&        J                 J&       K                   K&      L                     L&     M                       M&    N                         N&   O                           O&  P                             P& Q                               Q&R                                 R& Q                               Q&  P                             P&   O                           O&    N                         N&     M                       M&      L                     L&       K                   K&        J                 J&         I               I&          H             H&           G           G&            F         F&             E       E&              D     D&               C   C&                B B&                 A"
        );
    });
});
