fn array_test() {
    let  letters = ["a", "b", "c", "d"];
    let demension_array = [[1, 2, 0], [44, 22, 0], [100, 90, 1]];
}
fn vec_test() {
    let mut vec: Vec<_> = Vec::new();

    vec.push("name");
    vec.push("age");
    vec.push("address");
    vec.push("sex");
    vec.push("sex2"); //容量成倍增加 *2
    println!("vec's capbility: {}, length is: {}, second item:{:?}", vec.capacity(), vec.len(), vec.get(1));
    if vec.get(1) == Some(&"age") {
        println!("equal")
    }else {
        println!("not equal")
    }
    vec.pop();
    println!("after pop, vec's capbility: {}, length is: {}", vec.capacity(), vec.len());
    for v in &vec {
        println!("in for: {v}");
    }
}
fn vec_test2() {
    let mut v = vec![5,0,9]; //可以初始化数据
    v.push(2);
    println!("vec's capbility: {}, length is: {}", v.capacity(), v.len());
}
fn vec_test3() {
    let mut v = Vec::with_capacity(3);
    v.extend([22,33,335,62,44,22,2]);
    println!("vec's capbility: {}, length is: {}", v.capacity(), v.len());
}

#[derive(Debug)]
enum IPAddress {
    IPV4(String),
    IPV6(String)
}
fn show_address(add: IPAddress) {
    println!("ip address is : {:?}", add)
}
//特征实现vector存不同的值
trait IPAddr {
    fn display(&self);
}
struct IPV4(String);
struct IPV6(String);
impl IPAddr for IPV4 {
    fn display(&self) {
        println!("display IPV4: {}", self.0)
    }
}
impl IPAddr for IPV6 {
    fn display(&self) {
        println!("display IPV6: {}", self.0)
    }   
}
fn main() {
    vec_test();
    vec_test2();
    // 枚举实现
    let add_vec = vec![
        IPAddress::IPV4("127.0.0.1".to_string()),
        IPAddress::IPV6("fe80::c078:59ff:fe0d:4f4e".to_string())
    ];
    for a in add_vec  {
        show_address(a)
    }
    //特征实现存不同的值
    let v : Vec<Box<dyn IPAddr>> = vec![
        Box::new(IPV4("127.0.0.1".to_string())),
        Box::new(IPV6("fe80::c078:59ff:fe0d:4f4e".to_string()))
    ];
    for vv in v {
        vv.display()
    }
    vec_test3();
}
