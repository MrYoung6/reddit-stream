import React, { useState } from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { addK } from "../Helpers/helpers";
import { Button } from "@mui/material";
import './Votes.css';



export function Votes(props) {
    const [votes, setVotes] = useState(props.votes);
    const thousandUpVotes = addK(votes);

    function handleIncrement(e) {
        e.preventDefault();
        if (props.votes === votes) {
            setVotes(prevCount => prevCount += 1)
        } else {
            return votes;
        }

    }

    function handleDecrement(e) {
        e.preventDefault();
        setVotes(prevCount => prevCount -= 1)
    }

    return (
        <>
            <Button
                onClick={handleIncrement}
                thousandUpVotes={thousandUpVotes}
                sx={{
                    color: 'white',
                    "&:hover": {
                        color: "red",
                    },
                }
                }
            >
                <ArrowUpwardRoundedIcon
                    fontSize='large'

                />
            </Button >
            <span className="vote-count">{thousandUpVotes}</span>
            <Button
                onClick={handleDecrement}
                thousandUpVotes={thousandUpVotes}
                sx={{
                    color: 'white',
                    "&:hover": {
                        color: "lightblue",
                    },
                }}
            >
                <ArrowDownwardRoundedIcon
                    fontSize='large'

                />
            </Button>
        </>
    )
}
