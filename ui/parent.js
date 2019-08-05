class Parent {
    message(){
    console.log("hello");
}
static getmessage()
{
    console.log("hey");
}
}
class Child extends Parent
{
    message()
    {
        console.log("boss");
        super.message();
        document.write("hi");
    }
    
}
const ch=new Child();
    ch.message();
