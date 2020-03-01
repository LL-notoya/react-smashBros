import React, { useState } from "react"


const Character = () => {

    const player = [
        { name: "スネーク", skill: "射撃" },
        { name: "ピカチュウ", skill: "でんこうせっか" },
        { name: "ロックマン", skill: "ロックバスター" },
        { name: "テリー", skill: "パワーゲイザー" },
        { name: "リュウ", skill: "昇竜拳" }
    ]

    return (
        // <>
        // {
            player.map((data, index) =>
                <Profile
                    data={data}
                    key={index}
                />
            )
            // }
        // </>
    )
}

const Profile = (props) => {
    const [score, setScore] = useState(0)

    return (
        <div>

            <h1>名前:{props.data.name}</h1>
            <p>特技:{props.data.skill}</p>
            <p>いいね！:{score}</p>
            <button type="button" onClick={() => (setScore(score + 1))}>いいねボタン</button>

        </div>
    )
}

export default Character
