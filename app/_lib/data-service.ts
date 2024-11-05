"use server";
import { supabase } from "./supabase";

export async function createGuest(newGuest:unknown) {

    console.log(newGuest);

    const { data, error } = await supabase.from("newsletter").insert([newGuest]);

    if (error) {
        console.error(error);
        throw new Error("Guest could not be created");
    }

    //await createGuest({ email: user.email, fullName: user.name });

    return data;
}