import { useState, useCallback } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";

export default function GetScribeResult(props: PageProps) {
  // console.log("Props:", props);
  const [email, setEmail] = useState("");

  const _email = localStorage.getItem("email");
  // console.log("localStorage email:", _email);

  if (_email) {
    setEmail(_email);
  }
  return (
    <section>
      <section>订阅成功</section>
      <section>hi,{props.name}</section>
      <section>
        {props.email ? <div>订阅信息将会发送到:{props.email}</div> : ""}
      </section>
    </section>
  );
}
