// 1. Copy and paste your prototype in here and refactor into class syntax.

function CuboidMaker(x) {
    this.length = x.length;
    this.width = x.width;
    this.height = x.height;
  }
  
  CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.height
  }

  CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }

//Refactor

class CuboidMaker2 {
    constructor(x) {
        this.length = x.length;
        this.width = x.width;
        this.height = x.height;
    }
    volume () {
        return this.length * this.width * this.height
    }
    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

cuboid = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(x) {
        super(x)
        this.side = x.side;
    }
    cubeVolume () {
        return this.side * this.side * this.side
    }

    cubeSurfaceArea () {
        return 6 * this.side * this.side
    }
}

cube = new CubeMaker ({
    side: 9
})

console.log(cube.cubeVolume()); // 729
console.log(cube.cubeSurfaceArea()); // 486