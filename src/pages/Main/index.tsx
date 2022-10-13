import * as React from "react";
import { generateDiamond } from "./utils";
import "./index.css";

export const Main = () => {
    const [letter, setLetter] = React.useState("");
    const diamond = generateDiamond(letter);

    const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        const charCode = input.charCodeAt(0);

        if ((charCode >= 65 && charCode <= 90 && input.length <= 1) || !input) {
            setLetter(event.target.value);
        }
    };

    return (
        <div className="container">
            <h1>Diamond Kata</h1>
            <input type="text" value={letter} onChange={handleLetterChange} placeholder="Letter of the diamond" />
            <h2>Result</h2>
            <div className="result">{diamond}</div>
        </div>
    );
};
