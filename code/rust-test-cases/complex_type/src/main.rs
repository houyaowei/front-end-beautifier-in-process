fn test_req_status() -> u32 {
    200
}
fn test_match1() {
    let status = test_req_status();
    match status {
        200 => println!("Request successfully!"),
        404 => println!("Service not found!"),
        500 => println!("Service error!"),
        _ => {
            println!("Request failed!")
        }
    }
}
fn test_match2() {
    let x = 2;
    let message = match x {
        0 | 1  => "very few",
        2 ..= 9 => "a few",
        _      => "lots"
    };
    println!("test match2 result: {}", message);
}
#[derive(Debug)]
struct User {
    is_actived: bool,
    username: String,
    email: String,
    token: String,
    age: u128
}
impl User {
    fn say(&self) -> String {
        self.username
    }
}
fn build_instance() -> User {
    User {
        is_actived: false,
        username: String::from("hyw"),
        email: String::from("houyw@163.com"),
        token: String::from("sxWdeeD*990033KSp22cxxkekl@sdf2swXa"),
        age: 22
    }
}
fn test_struct_impl() {
    let u = User {
        is_actived: false,
        username: String::from("hyw"),
        email: String::from("houyw@163.com"),
        token: String::from("sxWdeeD*990033KSp22cxxkekl@sdf2swXa"),
        age: 22
    };
    print!("username by impl : {}", u.say());
}
fn test_struct() {
    let user = build_instance();
    println!("build user is: {:?}", user);
    assert_eq!(user.username,"hyw");
}
#[derive(Debug)]
struct Position(f32, f32);
fn build_couple_struct() -> Position {
    Position(116.404053,39.915046) //故宫百度坐标
}
fn test_couple_struct() {
    let postion = build_couple_struct();
    println!("build position is: {:?}", postion);
    assert_eq!(postion.0, 3.1415926);
}

fn main() {
    // test_match1();
    // test_match2();
    // test_struct();
    // test_couple_struct();
    // test_struct_impl();
}
