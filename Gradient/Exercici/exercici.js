document.addEventListener("DOMContentLoaded", main_f);

function main_f()
{
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    canvas.setAttribute("style", "border: 1px solid blue; width: 100%; height: 100%;");
    document.body.append(canvas);

    let ctx = canvas.getContext("2d");
    ctx.font = "25px arial blue";
    ctx.fillText("My TEXT!", 20, 60, 400);

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,0);
    ctx.lineTo(0,150);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();

}