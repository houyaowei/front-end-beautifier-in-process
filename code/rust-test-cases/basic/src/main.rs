fn test_variable() {
    let chinese = "世界，你好";
    let english = "World, hello";
    english = "english";

    let regions = [chinese, english];
    for item in regions.iter()  {
        println!("{}", &item) // 加不加&有啥区别？
    }
}

fn main() {
    test_variable();
}
