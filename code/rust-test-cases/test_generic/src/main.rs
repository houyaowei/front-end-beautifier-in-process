#[derive(Debug)]
struct Point<T> {
    x: T,
    y: T
}
impl<T> Point<T>  {
    fn console(&self) -> &T {
        &self.x
    }
}
fn test_generic() {
    let p1 = Point{x: 2, y:3}; //类型不一致就报错,如果类型不一样，需要声明两个类型
    println!("p1:{:?}", p1);
    println!("p1.console:{}", p1.console());
}

#[derive(Debug)]
struct Circle<T,U> {
    x: T,
    y: U
}
impl<T,U> Circle<T,U>  {
    fn minup<V,W>(self, other: Circle<V,W>) -> Circle<T, W> {
        Circle {
            x: self.x,
            y: other.y
        }
    }
}
fn test_generic2() {
    let p1 = Circle{x: 2, y:3.33}; 
    let p2 = Circle { x: "Hello", y: 'c'};

    let p = p1.minup(p2);

    println!("test_generic2:{:?}", p); //p1和p2也出现了借用，
}
//函数泛型测试
fn display_array(arr: [i32; 3]) {
    println!("{:?}", arr);
}
fn test_fn_generic() {
    let arr: [i32; 3] = [1, 2, 3];
    display_array(arr);

    //let arr: [i32;2] = [1,2];
    //display_array(arr) // error, [i32; 2] 和 [i32; 3] 是不同的数组类型
}
//const 泛型
fn display_array_extend<T:std::fmt::Debug, const N:usize>(arr:[T;N]) {
    println!("{:?}", arr);
}
fn test_fn_generic_extend() { 
    let arr: [i32; 3] = [1, 2, 3];
    display_array_extend(arr);

    let arr2: [i32;2] = [4,5];
    display_array_extend(arr2)
}
fn display_array2(arr: &[i32]) {
    println!("{:?}", arr);
}
fn test_fn_generic2() {
    let arr: [i32; 3] = [1, 2, 3];
    display_array2(&arr);

    let arr2: [i32;2] = [4,5];
    display_array2(&arr2)
}

fn add<T: std::ops::Add<Output = T>>(a:T, b:T) -> T {
    a + b
}
fn test_fn_generic3() {
    let a = 32 ;
    let b = 10;
    println!("generic add ,value is :{}", add(a,b));
}
//参数为数组地址
// fn largest<T:std::cmp::PartialOrd>(list: &[T]) -> T {
//     let mut largest = list[0];
//     for &item in list.iter() {
//         if item > largest {
//             largest = item;
//         }
//     }
//     largest
// }
// fn test_fn_generic4() {
//     let number_list = vec![34, 50, 25, 100, 65];
//     let result = largest(&number_list);
//     println!("The largest number is {}", result);
// }
fn main() {
    test_generic();
    test_generic2();
    // test_fn_generic();
    // test_fn_generic_extend();
    // test_fn_generic2();
    // test_fn_generic4();
}
