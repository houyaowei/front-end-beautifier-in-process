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
fn main() {
    test_match1();
    test_match2();
}
