let v=0;
function changecolor()
{
    v=v+1;
    if(v>5)
    {
        v=1;
    }
    switch (v)
    {
        case 1:
            {
                document.getElementById("background").style="background-color: red;";
                document.getElementById("txt").innerHTML="Red";
                break;
            }
        case 2:
            {
                document.getElementById("background").style="background-color: blue;";
                document.getElementById("txt").innerHTML="Blue";
                break;
            }
        case 3:
            {
                document.getElementById("background").style="background-color: yellow;";
                document.getElementById("txt").innerHTML="Yellow";
                break
            }
        case 4:
            {
                document.getElementById("background").style="background-color: orange;";
                document.getElementById("txt").innerHTML="Oronge";
                break
            }  
        case 5:
            {
                document.getElementById("background").style="background-color: green;";
                document.getElementById("txt").innerHTML="Green";
                break
            }              
    }
}