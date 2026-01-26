import { useState, useCallback } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
// import WeatherInfoRow from "../utils/weatherDAO.ts";

// export const handler: Handlers = {
//   async GET(req, ctx) {
//     return await ctx.render();
//   },
//   async POST(req, ctx) {
//     const form = await req.formData();
//     const code = form.get("code")?.toString();
//     console.log("code:", code);
//     const headers = new Headers();
//     headers.set("location", "/thanks-for-subscribing");
//     return new Response(null, {
//       status: 303, // See Other
//       headers,
//     });
//   },
// };

export default function Login(props: PageProps) {
  const [name, setName] = useState(""); //name
  const [email, setEmail] = useState(""); //name
  const [avatar, setAvatar] = useState(""); //头像
  const [followers, setFollowers] = useState(""); //关注人
  const [blog, setBlog] = useState(""); //blog
  const [twitter, setTwitter] = useState(""); //blog

  async function handleSearch() {
    try {
      const url = `https://api.github.com/users/denoland`;
      const res = await fetch(url);
      const data = await res.json();
      console.log("res:", data);

      setName(data.name);
      setAvatar(data.avatar_url);
      setEmail(data.email);
      setFollowers(data.followers);
      setBlog(data.blog);
      setTwitter(data.twitter_username);
    } catch (e) {
      alert(`错误：${e.message}`);
    }
  }

  const handleSubmit = (e) => {
    handleSearch();
  };

  return (
    <section>
      <form>
        {/* <div class="m-2">
          <label class="inline-block w-24">选择城市(无请求):</label>
          <select name="code" value={code} onChange={onChange}>
            <option value="101110101">西安</option>
            <option value="101210101">杭州</option>
            <option value="101010100">北京</option>
          </select>
        </div> */}
        <div class="m-2">
          <label class="inline-block w-24">名称:</label>
          <input name="weather" value={name} disabled />
        </div>
        <div class="m-2 flex">
          <label class="inline-block w-24">头像:</label>
          {avatar != "" ? (
            <img src={avatar} style="height: 60px;width: 60px;" />
          ) : (
            ""
          )}
        </div>
        <div class="m-2 flex">
          <label class="inline-block w-24">关注人数:</label>
          {followers != "" ? <span>{followers}</span> : ""}
        </div>
        <div class="m-2 flex">
          <label class="inline-block w-24">网站:</label>
          {blog != "" ? <a href={blog}>{blog}</a> : ""}
        </div>
        <div class="m-2 flex">
          <label class="inline-block w-24">Twitter:</label>
          {twitter != "" ? <span>{twitter}</span> : ""}
        </div>

        <Button type="button" onClick={handleSubmit}>
          查询Deno
        </Button>
      </form>
    </section>
  );
}
