/*
In Eucledian distance the distance between two points is the square root 
of the sum of the squares of the differences of their coordinates
*/
using System;

class Program {
    static double EuclideanDistance(double x1, double y1, double x2, double y2) {
        return Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));
    }

    static void Main() {
        double result = EuclideanDistance(3.0, 4.0, 4.0, 3.0);
        Console.WriteLine(result); // 1.4142135623730951
    }
}
