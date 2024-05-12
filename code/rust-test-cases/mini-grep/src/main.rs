use std::env;
use std::process;
use mini_grep::Config;

//解析输入参数，不怎么面向对象，所以换成
// fn parse_config(args: &[String]) -> Config {
//     let query_content = args[1].to_string();
//     let file_path = args[2].clone(); //直接完整的复制目标数据，无需被所有权、借用等问题

//     Config {
//         query_content,
//         file_path
//     }
// }

//命令 cargo run -- 搜索字符串 文件路径+名称
fn main() {
    let args: Vec<String> = env::args().collect();
    let config = Config::build(&args).unwrap_or_else(|err| {
        println!("Argument parse error: {err}");
        process::exit(1);
    }); //关联函数调用

    if let Err(e) = mini_grep::run(config) {
        println!("Application error:{e}");
        process::exit(1);
    }
    
}
