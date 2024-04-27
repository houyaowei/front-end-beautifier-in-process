use std::collections::HashMap;

fn test_map() {
    let teams_list = vec![
        ("中国队".to_string(), 100),
        ("美国队".to_string(), 10),
        ("日本队".to_string(), 50),
    ];

    let teams_map: HashMap<_,_> = teams_list.into_iter().collect(); // 类型有编译器推导
    
    println!("{:?}",teams_map)
}
fn test_map2() {
    let mut my_map = HashMap::new();
    my_map.insert("name", "hyw".to_string());
    my_map.insert("age", 22.to_string());

    println!("map: {:?}", my_map);

    println!("name in map is: {:?}",my_map.get("address"));

    let address = String::from("address");
    let value = "xi'an".to_string();
    my_map.insert(&address, value);

    for (key, value) in &my_map {
        println!("{}: {}", key, value);
    }
}
fn test_map3() {
    let name = String::from("Sunface");
    let age = 18;

    let mut handsome_boys = HashMap::new();
    handsome_boys.insert(&name, age);//如果这里的name没有&就会报错

    println!("因为过于无耻，{}已经被从帅气男孩名单中除名", name);
    println!("还有，他的真实年龄远远不止{}岁", age);
}
fn test_map4() {

    let mut scores = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let team_name = String::from("Yellow");
    let score: Option<&i32> = scores.get(&team_name);
    println!("score: {:?}, 具体的值: {}",score, score.copied().unwrap_or(0)); //返回option

    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
}
fn main() {
    // test_map();
    test_map2();
    // test_map3();
    // test_map4();
}   
