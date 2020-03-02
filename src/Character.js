import React, { useState } from "react"


const Character = () => {

    const player = [
        {id: 1, name: "スネーク", skill: "射撃" },
        {id: 2, name: "ピカチュウ", skill: "でんこうせっか" },
        {id: 3, name: "ロックマン", skill: "ロックバスター" },
        {id: 4, name: "テリー", skill: "パワーゲイザー" },
        {id: 5, name: "リュウ", skill: "昇竜拳" }
    ]

    return (
            player.map((data, id) =>
                <Profile
                    data={data}
                    key={id}
                />
                )
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
