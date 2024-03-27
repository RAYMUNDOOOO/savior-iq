import { useState } from "react";
import style from "/src/styles/buttons.module.css"

export default function DefaultButton({ text }) {
        return (
                <button className={style.btn}>{text}</button>
        );
}

export function SignUpButton({ text }) {
        return (
                <button className={`${style.btn} ${style.signUp}`}>{text}
                        <a href="/signUp"></a>
                </button>
        );
}

export function LoginButton({ text }) {
        return (
                <button className={`${style.btn} ${style.login}`}>{text}
                        <a href="/login"></a>
                </button>
        );
}
