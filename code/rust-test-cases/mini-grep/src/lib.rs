use std::fs;
use std::error::Error;

pub struct Config {
  query_content: String,
  file_path: String
}
impl Config {
  pub fn build (args: &[String]) -> Result<Config, &'static str> {
      // println!("terminal args: {:?}", args);
      if args.len() < 3 {
          return Err("Params are not enough;")
      }
      let query_content = args[1].to_string();
      let file_path = args[2].clone(); //直接完整的复制目标数据，无需被所有权、借用等问题
      Ok(Config {
          query_content,
          file_path
      })
  }
}

pub fn run (config: Config) -> Result<(), Box<dyn Error>> {
  let contents = fs::read_to_string(config.file_path)?;
  // println!("file content:\n{contents}");
  // println!("lines: {:?}", contents);
  for line in contents.lines() {
    if line.to_lowercase().contains(&config.query_content) {
        println!("{}", line.to_lowercase());
    }
  }
  Ok(())
}
