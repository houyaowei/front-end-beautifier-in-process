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
fn test_string() {
    let mut s1 = String::from("hi,rust!");
    s1.insert_str(8, "I like it!");

    println!("mut s1: {s1}")
}

fn test_add( a:i8, b:i8) -> i8 {
    a+b
}
fn main() {
    test_string();
    test_variable();
    println!("add func ,result: {:?}", test_add(3,6))
}
