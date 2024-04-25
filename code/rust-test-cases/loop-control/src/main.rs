/**
 * for item in collection  转移所有权
 * for item in &collection  不可变借用
 * for item in &mut collection  可变借用
 */

//可以随时返回数据
fn test_if() -> i8 {
    let b  = false;
    if b == true {
        println!("b is true");
        1
    } else {
        println!("b is false");
        0
    }
}
fn test_for() {
    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    for i in 1..=3  {
        println!("index: {i}")
    }
    //每个元素值
    for i in months  {
        println!("every months item: {i}")
    }
    //索引+元素
    for  (i,v) in months.iter().enumerate()  {
        println!("index {i} months item: {v}")
    }
}
fn test_loop() {
    let mut count = 0;
    loop {
        count += 1;
        if count == 3 {
            println!("get three");
            continue;
        }
        if count == 5 {
            println!("big bang");
            break;
        }
    }
}
//匹配模式
enum Direction {
    East,
    West,
    North,
    South 
}
fn test_match() {
    let dir = Direction::South;
    match dir {
        Direction::East => println!("East"),
        Direction::South | Direction::West => println!("South West"),
        _ => println!("Other")
    }
}
enum Action {
    Say(String),
    MoveTo(i32, i32),
    ChangeColorRGB(u16, u16, u16),
}
fn test_match2() {
    let actions = [
        Action::Say("Hello Rust".to_string()),
        Action::MoveTo(1,2),
        Action::ChangeColorRGB(255,255,0),
    ];
    for action in actions {
        match action {
            Action::Say(s) => {
                println!("{}", s);
            },
            Action::MoveTo(x, y) => {
                println!("point from (0, 0) move to ({}, {})", x, y);
            },
            Action::ChangeColorRGB(r, g, _) => {
                println!("change color into '(r:{}, g:{}, b:0)', 'b' has been ignored",
                    r, g,
                );
            }
        }
    }
}
fn test_match3(){
    let v = Some(3u8);
    if let Some(3) = v {
        println!("three");
    }
}
fn main() {
    let b = test_if();
    println!("return value is: {b}");

    // test_for();
    // test_match();
    // test_match2();
    // test_match3();
    test_loop();
}
