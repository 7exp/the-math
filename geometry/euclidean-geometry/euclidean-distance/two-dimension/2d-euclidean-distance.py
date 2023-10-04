import math

def euclidean_distance(x1, y1, x2, y2):
    """
    In Eucledian distance the distance between two points is the square root 
    of the sum of the squares of the differences of their coordinates 
    """
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

# Example usage
result = euclidean_distance(1, 2, 3, 4)
print(result)
