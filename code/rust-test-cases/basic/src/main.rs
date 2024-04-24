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
fn calc2(m: &str) -> Factory {
    match m {
        "add" => test_add,
        "sub" => test_sub,
        _ => todo!()
    }
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
    let _other = language.clone();
    println!("String language: {}", language);

    // let s1  = String::from("hi,rust~");
    // let mut s2 = s1;
    // println!("s1 moved value: {}", s1);
}
fn test_partial_move() {
    #[derive(Debug)]
    struct Person {
        name: String,
        age: u8,
    }

    let person = Person {
        name: String::from("houyw"),
        age: 20,
    };

    let Person { name, ref age } = person;

    println!("The person's age is {}", age);
    println!("The person's name is {}", name);
    // println!("get name by object is {}", person.name);
    // println!("The person is {:?}", person);
}

fn take_ownership(c: &mut String) {
    c.push_str(" you are good!")
}
fn test_ownership() {
    let mut hello = String::from("hi,rust!");
    take_ownership(&mut hello);
    println!("original variable hello: {}", hello);
}

fn test_if_regular() {
    let a = 22;
    let is_bigger = if a > 10  {
        true
    }else {
        false
    };
    println!("variable is bigger than 10? {:?}.", is_bigger);

}
fn main() {
    // test_string();
    // test_variable();
    // let f = test_diverging(false);
    // println!("diverging functions: {:?}", f);
    // println!("add func ,result: {:?}", test_add(3,6));
    // test_basic_type();
    // test_partial_move();
    // test_ownership();
    // println!("HOF add, {}", calc(test_add, 20, 20));
    // println!("HOF sub, {}", calc(test_sub, 60, 21));
    //
    // println!("HOF add2, {}", calc2("add")(20, 20));
    // println!("HOF sub2, {}", calc2("sub")(60, 21));
    test_if_regular()
}
