import SubscribeResult from "../islands/SubscribeResult.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any> = {
  async GET(_, ctx) {
    console.log("GET ctx:", ctx);
    //可以在这里请求数据
    const subscribeName = ctx.url.searchParams.get("name") ?? "";
    // console.log("subscribeName:", subscribeName);
    return ctx.render({ name: subscribeName });
  },
};
export default function GetResult({ data, url }) {
  const _email = localStorage.getItem("email");
  console.log("data from handler:", data);
  return <SubscribeResult email={_email} name={data.name} />;
}
