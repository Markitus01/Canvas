document.addEventListener("DOMContentLoaded", main_f);

function main_f()
{
    let mid = 10;

    let canvas = document.createElement("canvas");
    canvas.setAttribute("id", "dibuix");
    canvas.setAttribute("style", "border: 5px solid #192a56");
    canvas.setAttribute("width", "250");
    canvas.setAttribute("height", "250");
    document.body.append(canvas);

    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(0, 0, mid, mid);
    ctx.fillStyle  = '#e1b12c';
    ctx.fillRect (0, 0, mid, mid);

    let tope = false;
    setInterval(() =>
    {
        ctx.clearRect(0,0,mid,mid);

        if (mid < 250 && !tope)
        {
            mid++;
        }
        else
        {
            tope = true;
        }

        if (mid > 10 && tope)
        {
            mid--;
        }
        else
        {
            tope = false;
        }

        ctx.fillRect (0, 0, mid, mid);
        // console.log(mid);

    }, 10);
    
    ctx.closePath();
}