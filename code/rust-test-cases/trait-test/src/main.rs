//特征定义，可以有默认实现的方法
pub trait Summary {
    fn summarize(&self) -> String;
}
pub struct Book{
    pub title: String,
    pub author: String,
    pub content: String
}
impl Summary for Book  {
    fn summarize(&self) -> String {
        format!(" book name: {},  author: {}, content is: {}",self.title, self.author, self.content)
    }
}
fn main() {
    let book = Book {
        title: "frontend complete book".to_string(),
        author:"houyw".to_string(),
        content: "development with js".to_string()
    };
    let msg = book.summarize();
    println!("msg: {}", msg);
}
