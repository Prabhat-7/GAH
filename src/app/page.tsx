"use client";

import { createUser } from "@/actions/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile_no] = useState(0);
  const handleSubmit = () => {
    createUser(email, mobile_no, name).then((res) => {
      alert(res);
    });
  };
  return (
    <div>
      <h1>Home</h1>

      <form
        action="/home"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Mobile No"
          value={mobile_no}
          onChange={(e) => {
            setMobile_no(Number(e.target.value));
          }}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
