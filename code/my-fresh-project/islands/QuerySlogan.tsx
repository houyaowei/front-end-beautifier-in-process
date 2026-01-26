import { useState, useCallback } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const url = `https://api.github.com/users/denoland`;
    const res = await fetch(url);
    const data = await res.json();
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    setAvatar(data.avatar_url);
    return resp;
  },
};

export default function GetSlogan(props: PageProps) {
  console.log("Props:", props);
  const [code, setCityCode] = useState("101110101");
  const [weather, setWeather] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");

  const _email = sessionStorage.getItem("email");
  console.log("email:", _email);
  if (_email) {
    setEmail(_email);
  }

  async function handleSearch() {
    try {
      const url = `https://api.github.com/users/denoland`;
      const res = await fetch(url);
      const data = await res.json();
      console.log("res:", data);

      setWeather(data.name);
    } catch (e) {
      alert(`错误：${e.message}`);
    }
  }

  return (
    <section>
      <h2>Deno</h2>
      <form method="post">
        <div class="m-2 flex">
          <label class="inline-block w-24">头像:</label>
          {avatar != "" ? (
            <img src={avatar} style="height: 100px;width: 100px;" />
          ) : (
            ""
          )}
        </div>
      </form>
    </section>
  );
}
