import { useState } from "react";
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
                <a href="/">
                        <button className={`${style.btn} ${style.getStarted}`}>Get Started</button>
                        // Insert arrow ligature on the right side.
                </a>
        );
}

export function PlayVideo() {
        return (
                <a href="/">
                        // Insert play button here.
                        <button className={`${style.btn} ${style.playVideo}`}>Play  video</button>
                </a>
        );
}
