import {v4 as uuid} from 'uuid';
import { useState } from "react";

export default function EmojiClicker(){
    const [emojis , setEmoji] = useState([{ id: uuid() ,emoji: "(:"}])
    const addEmoji = () => {
        setEmoji(oldEmojis => [...oldEmojis , {id: uuid() , emoji: ":))"}]) ;
    };
    const deleteEmoji = (id) => {
        setEmoji(prevEmoji => {
            return prevEmoji.filter((e) => e.id !== id);
        }) 
    }
    return (
        <div>
            {
                emojis.map((e) => (
                    <span onClick= {() => deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem", border : "1px solid black" , borderRadius: "5px"} }>
                        {e.emoji}
                    </span>
                ))
            }
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}