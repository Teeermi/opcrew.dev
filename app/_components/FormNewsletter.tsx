"use client";

import {addNewsletter} from "../_lib/data-service";


export default function FormNewsletter() {

function handleSubmit(e:unknown) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    addNewsletter(email);

}


    return (
        <form action="" className="headerEmailContainer" onSubmit={handleSubmit} >
            <input type="email" name="email" placeholder="Enter your email"/>
            <button>Sign</button>
        </form>
    )
}