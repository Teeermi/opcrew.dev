"use client";

import { addNewsletter } from "../_lib/data-service";

export default function FormNewsletter() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string | null;
    if (email) {
      addNewsletter(email);
    } else {
      console.error("Email is null");
    }
  }

  return (
    <form action="" className="headerEmailContainer" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" />
      <button>Sign</button>
    </form>
  );
}
