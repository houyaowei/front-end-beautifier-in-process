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
fn test_basic_type () {
    let a = 2;
    let _ = a;
    println!("basic type i32 a: {}", a);

    let b1 = false;
    let _ = b1;
    println!("boolean b1: {}", b1);

    let f1 = 2.3;
    let _ = f1;
    println!("float f1: {}", f1);

    let ch1 = 'a';
    let _ = ch1;
    println!("char ch1: {}", f1);

    let language = String::from("english");
    let other = language.clone();
    // let s1  = String::from("hello");
    // let s2 = s1;
     println!("String language: {}", language);
}

fn main() {
    // test_string();
    // test_variable();
    // let f = test_diverging(false);
    // println!("diverging functions: {:?}", f);
    // println!("add func ,result: {:?}", test_add(3,6));
    test_basic_type();
    println!("HOF add, {}", calc(test_add, 20, 20));
    println!("HOF sub, {}", calc(test_sub, 60, 21));

}
