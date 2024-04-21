
fn test_give_option (gift: Option<&str>) {
    match gift {
        Some("flower") => println!("This is Flower."),
        Some(inner)   => println!("{}? How nice.", inner),
        None          => println!("No gift? Oh well.")
    }
}
// 使用 unwrap 隐式地处理。隐式处理要么返回 Some 内部的元素，要么就 panic。
fn give_princess(gift: Option<&str>) {
    // `unwrap` 在接收到 `None` 时将返回 `panic`。
    let inside = gift.unwrap();
    if inside == "snake" {
        panic!("snake! boom!");
    }

    println!("I love {}s!!!!!", inside);
}
fn main() {
    let flower = Some("flower");
    let void = None;
    test_give_option(flower);
    test_give_option(void);

    // let bird = Some("robin");
    // let nothing = None;

    // give_princess(bird);
    // give_princess(nothing); //注意
}
