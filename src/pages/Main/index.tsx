import * as React from "react";
import "./index.css";

export const Main = () => {
    const [letter, setLetter] = React.useState("");

    const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLetter(event.target.value);
    };

    return (
        <div className="container">
            <h1>Diamond Kata</h1>
            <input type="text" value={letter} onChange={handleLetterChange} placeholder="Letter of the diamond" />
        </div>
    );
};
