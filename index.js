// 1.	Make class box has width ,height, array contain books 
// and hava Book class has id,name, writer_name and num of pages 
// (a)	make function valueof in  box class and return sum of all pages of books in this box 
// (b)	in this box  make  method to clac area of this box

class box {
    constructor(_width, _height,_arr_books) {
        this.width = _width;
        this.height = _height;
        this.arr_books = _arr_books;
    }
}

class books {

    constructor(_id, _bookName, _writer_name,_num_of_pages) {
                this.id = _id;
                this.bookName = _bookName;
                this.writer_name = _writer_name;
                this.num_of_pages = _num_of_pages;
    }
}

box.prototype.valueof =function()
{
    var sum=0;
    for(var i=0;i<this.arr_books.length;i++)
    {
        sum+=this.arr_books[i].num_of_pages;
    }
    return sum;
}

books.prototype=Object.create(box.prototype);

var b1=new books(1,'js','Eng.Negm',350);
var b2=new books(1,'c++','Eng.Taha',750);
var b3=new books(1,'php','Eng.Amira',250);

var box1=new box(10,10,[b1,b2,b3]);

console.log(b1);
console.log(b2);
console.log(b3);

console.log(box1.valueof());

///////////////////////////////////////////////////////////////////////////////////////////

// 2. Implement class Point3D using JavaScript 


class num {

    constructor(_x,_y,_z) {
                this.x = _x||0;
                this.y = _y||0;
                this.z = _z||0;
    }

    print3DPoint(p1,p2)
    {
        var d=Math.sqrt((p1,p2)^2+(p1-p2)^2+(p1-p2)^2);

        console.log(d);
    }
}

var p1=new num(1,2,3);
var p2=new num(4,5,6);

p1.print3DPoint();
p2.print3DPoint();

// console.log(num.x);
// console.log(num.y);
// console.log(num.z);

///////////////////////////////////////////////////////////////////////////////////////////

// 3.Make new class Course, and make the student class has an array from course objects.

class courses {
    constructor(_cource_id, _cource_name,_student_arr) 
    {
        this.cource_id = _cource_id;
        this.cource_name = _cource_name;
        this.student_arr = _student_arr;
    }
}

class students {

    constructor(_id, _name) 
    {
        this.id = _id;
        this.name = _name;
    }
}

courses.prototype.cour =function()
{
    var students=0;
    for(var i=0;i<student_arr.length;i++)
    {
        students+=this.cource_name;
    }
    return students;
}

courses.prototype=Object.create(students.prototype);

var s1=new students(1,'ahmed');
var s2=new students(1,'ali');
var s3=new students(1,'adel');

var c1=new courses(1,'js',[s1,s2,s3]);
// var c2=new courses(1,'c++');
// var c3=new courses(1,'php');

console.log(c1);
console.log(c1.student_arr);

// console.log(c2);
// console.log(c3);



