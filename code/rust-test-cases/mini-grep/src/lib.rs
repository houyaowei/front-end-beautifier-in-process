use std::fs;
use std::error::Error;

pub struct Config {
  query_content: String,
  file_path: String
}
impl Config {
  pub fn build (args: &[String]) -> Result<Config, &'static str> {
      if args.len() < 3 {
          return Err("Params are not enough;")
      }
      let query_content = args[2].to_string();
      let file_path = args[3].clone(); //直接完整的复制目标数据，无需被所有权、借用等问题
      // Config {
      //     query_content,
      //     file_path
      // }
      Ok(Config {
          query_content,
          file_path
      })
  }
}

pub fn run (config: Config) -> Result<(), Box<dyn Error>> {
  let contents = fs::read_to_string(config.file_path)?;
  println!("With text:\n{contents}");
  Ok(())
}
