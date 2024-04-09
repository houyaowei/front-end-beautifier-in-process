fn test_string() {
    let chinese = "世界，你好".to_string();
    let english = "hello，world".to_owned();
    let regions = [chinese, english];
    for r in regions.iter()  {
        println!("{}", &r)
    }

}
fn test_variable() {
    let chinese = "世界，你好";
    let english = "hello，world";
    let regions = [chinese, english];

    for item in regions.iter()  {
        println!("{}", &item) // 加不加&有啥区别？
    }
}

fn main() {
    test_string();
    test_variable();
}
