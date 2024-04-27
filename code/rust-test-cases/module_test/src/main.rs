
mod my_struct;
mod others;
mod integration;

use crate::my_struct::MyStruct;
// use crate::others::AnotherStruct;
// use crate::others::stu_struct:: StuStruct;
// use crate::others:: {AnotherStruct, stu_struct:: StuStruct}; //Preludes

/**
 * 可以替换第9行
 */
mod prelude {                            
    pub use crate::others:: {AnotherStruct, stu_struct:: StuStruct};
}
use crate::prelude::*;


fn main() {
    let _ms = MyStruct{ name: "houyw".to_string(), age: 22};
    println!("name in struct is: {}", _ms.name);

    let oms: AnotherStruct = AnotherStruct{ name: "hyw".to_string()};
    println!("name in other struct is: {}", oms.name);

    let _stu = StuStruct{};

    crate::others::say_in_others("other".to_string());
}
