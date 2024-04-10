// fn test_string() {
//     let chinese = "世界，你好".to_string();
//     let english = "hello，world".to_owned();
//     let regions = [chinese, english];
//     for r in regions.iter()  {
//         println!("{}", &r)
//     }
//
// }
fn test_variable() {
    let english = "hello,world".to_string();
    let sub = &english[6..];
    println!("{:?}", sub)
}

fn main() {
    // test_string();
    test_variable();
}
