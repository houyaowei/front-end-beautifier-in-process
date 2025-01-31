fn array_test() {
    let  letters = ["a", "b", "c", "d"];
    let _demension_array = [[1, 2, 0], [44, 22, 0], [100, 90, 1]];
    println!("index 2 of letters is : {}", letters[1]);
}
fn tuple_test(){
    let num_and_string :(i8,&str) = (25,"hello,tuple");
    println!("first tuple : {:?}", num_and_string);
    let (age, say) = num_and_string;
    println!("elements in tuple: {} and {}", age, say);
    println!("get element by index: {} and {}", num_and_string.0, num_and_string.1);
}
fn vec_test() {
    let mut vec: Vec<_> = Vec::new();

    vec.push("name");
    vec.push("age");
    if vec.get(1) == Some(&"age") {
        println!("equal")
    }else {
        println!("not equal")
    }
    // vec.push("sex2"); //容量成倍增加 *2
    println!("vec's capbility: {}, length is: {}, second item:{:?}", vec.capacity(), vec.len(), vec.get(1));
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
fn test_slice(){
    let numbers:[i32; 4] = [32,20,3,11];
    let shared_slice = &numbers[1..3];
    println!("shared slice: {:?}", shared_slice);
    //shared_slice[0] = 0; // error

    let mut mut_numbers:[i32; 4] = [32,20,3,11];
    let mutable_slice = &mut mut_numbers[1..3];
    println!("origin slice: {:?}", mutable_slice);
    mutable_slice[0] = 0;
    println!("modified slice: {:?}", mutable_slice);
    println!("origin array : {:?}", mut_numbers);

    let mut boxed_array = Box::new([1,2,3]);
    let boxed_slice = &mut boxed_array[..];
    println!("boxed slice: {:?}", boxed_slice);
    println!("slice length:{:?}", get_slice_length(boxed_slice));
}
fn get_slice_length(arr :  &mut [u32])-> usize  {
    arr[0] = 32;
    println!("arr: {:?}", arr);
    return arr.len();
}
fn main() {
    array_test();
    tuple_test();
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
    test_slice();
}
