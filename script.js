//complete this code
class Rectangle {
	constructor(width,height)
	{
		this.width=width;
		this.height=height;
	}
	width()
	{
	 return this.width;
	}
	height()
	{
		return this.height;
	}
	getArea()
	{
		let area=this.height*this.width;
		return area;
	}
}

class Square extends Rectangle {
	
	constructor(side)
{
	super(side,side)
}
	getPerimeter()
	{
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
