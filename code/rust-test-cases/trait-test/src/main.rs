//特征定义，可以有默认实现的方法
pub trait Summary {
    fn summarize(&self) -> String;
}
pub struct Post{
    pub title: String,
    pub author: String,
    pub content: String
}
impl Summary for Post  {
    fn summarize(&self) -> String {
        format!("titile {}, author {}", self.title, self.author)
    }
}
fn main() {
    let post = Post {title: "hello".to_string(), author:"houyw".to_string(), content: "hello,world".to_string()};
    let msg = post.summarize();
    println!("msg: {}", msg);
}
