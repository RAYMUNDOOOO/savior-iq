import { useState } from "react";
import style from "/src/styles/buttons.module.css"

export default function DefaultButton({ text }) {
        return (
                <button className={style.btn}>{text}/>
        );
}

export function SignUpButton({ text }) {
        return (
                <div>
                        <button className={style.btn, style.sign-up}>{text}</button>
                </div>
        );
}

export function LoginButton({ text }) {
        return (
                <button className={style.btn, style.login}>{text}/>
        );
}
