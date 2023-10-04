/*
In Eucledian distance the distance between two points is the square root 
of the sum of the squares of the differences of their coordinates
*/

#include <iostream>
#include <cmath>

double euclideanDistance(double x1, double y1, double x2, double y2) {
    return std::sqrt(std::pow(x2 - x1, 2) + std::pow(y2 - y1, 2));
}

int main() {
    double result = euclideanDistance(3.0, 4.0, 4.0, 3.0);
    std::cout << result << std::endl; // 1.4142135623730951
    return 0;
}
