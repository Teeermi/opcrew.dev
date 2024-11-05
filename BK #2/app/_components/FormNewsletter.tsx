"use client";

import {createGuest} from "../_lib/data-service";


export default function FormNewsletter() {

function handleSubmit(e:unknown) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    createGuest({email});

}


    return (
        <form action="" className="headerEmailContainer" onSubmit={handleSubmit} >
            <input type="email" name="email" placeholder="Enter your email"/>
            <button>Sign</button>
        </form>
    )
}