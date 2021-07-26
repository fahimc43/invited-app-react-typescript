import React, { useState } from 'react';
import { IState as Props } from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        url: "",
        age: "",
        note: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.url
        ) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name: "",
            url: "",
            age: "",
            note: ""
        })
    }
    return (
        <div className="AddToList">
            <input
                className="AddToList-input"
                type="text"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={handleChange} />
            <input
                className="AddToList-input"
                type="text"
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={handleChange} />
            <input
                className="AddToList-input"
                type="text"
                name="url"
                placeholder="Image url"
                value={input.url}
                onChange={handleChange} />
            <textarea
                className="AddToList-input"
                name="note"
                placeholder="Note"
                value={input.note}
                onChange={handleChange} />

            <button onClick={handleClick} className="AddToList-btn">Add to list</button>
        </div>
    );
};

export default AddToList;