"use server";

import  connection  from "@/app/_lib/db";

export async function addNewsletter(email:string) {
    const query = 'INSERT INTO newsletter SET email=?';
    const [result, error] = await connection.execute(query, [email]);
}

export async function getScripts() {
    const query = 'SELECT * FROM scripts';
    const [result, error] = await connection.execute(query);

    return result;
}

export async function getProducts() {
    const query = 'SELECT * FROM products';
    const [result, error] = await connection.execute(query);


    return result;
}