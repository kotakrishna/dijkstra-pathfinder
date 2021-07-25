## Dijkstra Algorithm - Shortest Path Finder

Dijkstra's Algo is the shortest pathfinding logic used between graphs and nodes.
 It was conceived by computer scientist Edsger W. Dijkstra in 1956


Process followed => 
    1) Created a 2D Array with objects as the element.
    2) Each Element will have values like is visited, start, finish, distance, previous node ..etc;
    3) when a user selects a node/Box it will be registered as Start representing it in Red(color);
    4) The second selection will be represented as End node/Box representing it in Green(color);
    5) starting from the first node we go through each other box touching/ adjacent to it: 
        a) if the end is not found we shall push the node/box in an array called visitedSortedArray and its distance is updated with previous node distance + 1(distance = previous + 1). And also previous node value is updated with a node of the present.
        b) for that point the next node/Box is selected and continued.
        c) till we find the end node.
    6) as we go through we will push each visited node/ box into the array and return it.
    7) as we have the final node, we can traverse back from it till we get to the start using the previous node value of each element/node.
    8) for animation for each element we can add a class name but with a set time out and time difference of its index.
    9) for the shortest path we can add a class name after the animation of find paths is done.


