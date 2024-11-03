"use client"
import React from "react"
import DownloadIcon from "@mui/icons-material/Download"
import Link from "next/link"
import GameDetail from "./kids/GameDetail"
const ArcadeGames = () => {
    const gamesData = [
        {
            name: "Sname Game",
            file: "/games/snake_game.exe",
            details:
                "This is an  arcade snake game where your goal is to guide the snake to eat as much food as possible. Each time the snake eats, it grows longer, making it more challenging to maneuver without hitting the walls or itself. Use the arrow keys to control the snake’s direction and navigate through the playing area. You can download the game’s executable file from here and enjoy playing it directly on your desktop or laptop.",
        },
        {
            name: "Pong Game",
            file: "/games/pong_game.exe",
            details:
                "This is an arcade-style pong game, where you control two sliders. The left slider can be moved using the up/down arrow keys on the keyboard, and the right slider is controlled with the W and S keys. A ball is passed back and forth between the sliders, each controlled independently. One side scores when the other side misses the ball. You can download the executable file here and play it on your desktop or laptop.",
        },
    ]
    return (
        <div className="arc-game">
            {gamesData?.map(({ name, file, details }) => (
                <div key={name} className="arc-game-card">
                    <Link href={file} className="btn arc-game-card-btn">
                        <span>{name}</span>
                        <span>
                            <DownloadIcon />
                        </span>
                    </Link>
                    <GameDetail details={details} />
                </div>
            ))}
        </div>
    )
}

export default ArcadeGames
