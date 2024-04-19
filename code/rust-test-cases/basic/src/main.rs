// fn test_string() {
//     let chinese = "世界，你好".to_string();
//     let english = "hello，world".to_owned();
//     let regions = [chinese, english];
//     for r in regions.iter()  {
//         println!("{}", &r)
//     }
//
// }
// fn test_variable() {
//     let english = "hello,world".to_string();
//     let sub = &english[6..];
//     println!("{:?}", sub)
// }
// fn test_string() {
//     let mut s1 = String::from("hi,rust!");
//     s1.insert_str(8, "I like it!");
//
//     println!("mut s1: {s1}")
// }


// fn test_add( a:i8, b:i8) -> i8 {
//     return a+b;
// }
// fn test_diverging(b:bool) -> u8{
//     if b {
//         30
//     } else {
//         panic!("test diverging")
//     }
// }
type Factory = fn(a:i8, b:i8) -> i8;
fn calc(fnc: Factory, a: i8, b: i8) -> i8 {
    fnc(a, b)
}
fn test_add( a:i8, b:i8) -> i8 {
    a+b
}
fn test_sub( a:i8, b:i8) -> i8 {
    a-b
}
fn main() {
    // test_string();
    // test_variable();
    // let f = test_diverging(false);
    // println!("diverging functions: {:?}", f);
    // println!("add func ,result: {:?}", test_add(3,6));
    println!("HOF add, {}", calc(test_add, 20, 20));
    println!("HOF sub, {}", calc(test_sub, 60, 21));

}
