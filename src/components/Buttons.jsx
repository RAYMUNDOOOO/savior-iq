import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import style from "/src/styles/buttons.module.css"

export default function DefaultButton({ text }) {
        return (
                <button className={style.btn}>{text}</button>
        );
}

export function SignUpButton({ text }) {
        return (
                <a href="/signUp">
                        <button className={`${style.btn} ${style.signUp}`}>{text}</button>
                </a>
        );
}

export function LoginButton({ text }) {
        return (
                <a href="/login">
                        <button className={`${style.btn} ${style.login}`}>{text}</button>
                </a>
        );
}

export function GetStartedButton() {
        return (
                <button className={`${style.btn} ${style.getStarted}`}>
                        <div id={`${style.getStartedContainer}`}>
                                <span>Get Started</span>
                                <ArrowForwardIcon />
                        </div>
                </button>
        );
}

export function PlayVideoButton() {
        return (
                <a href="/">
                        <PlayCircleIcon />
                        <button className={`${style.btn} ${style.playVideo}`}>Play video</button> 
                </a>
        );
}
