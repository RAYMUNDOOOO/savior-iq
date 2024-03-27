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
