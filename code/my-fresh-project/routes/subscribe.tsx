import { Handlers } from "$fresh/server.ts";

//form表单如果是post请求，会进入handler的post方法
export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    console.log("request:", req);
    const form = await req.formData();

    const email = form.get("email")?.toString();
    // console.log("form:", form);
    localStorage.setItem("email", email);

    const headers = new Headers();
    //跳转
    headers.set("location", "/subscribe-result?name=hyw");

    return new Response(null, {
      status: 301, // moved Permanently
      headers,
    });
  },
};

export default function Subscribe() {
  return (
    <>
      <form method="post">
        <h4>请输入邮箱订阅</h4>
        <div class="m-2">
          <label class="inline-block w-24">邮箱:</label>
          <input type="email" name="email" value="" />
        </div>
        <button type="submit">确认</button>
      </form>
    </>
  );
}
