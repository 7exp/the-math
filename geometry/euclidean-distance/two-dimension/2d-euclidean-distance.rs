/*
* In Eucledian distance the distance between two points is the square root 
* of the sum of the squares of the differences of their coordinates
*/

fn euclidean_distance(x1: f64, y1: f64, x2: f64, y2: f64) -> f64 {
    ((x2 - x1).powi(2) + (y2 - y1).powi(2)).sqrt()
}

fn main() {
    let result = euclidean_distance(3.0, 4.0, 4.0, 3.0);
    println!("{:.15}", result); // 1.414213562373095
}
