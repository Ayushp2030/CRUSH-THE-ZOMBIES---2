class Stone{
    constructor(x, y, r){

        options = {
            restituition : 0.1,
            friction : 0.01,
            isStatic : false
        };

        this.body = Bodies.circle(x, y, r, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
}