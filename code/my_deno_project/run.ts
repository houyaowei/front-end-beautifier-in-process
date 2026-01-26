//need allow-run permission

const proc = Deno.run({ cmd: ["whoami"] });
console.log(proc);
