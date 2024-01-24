document.addEventListener("DOMContentLoaded", main_f);

function main_f()
{
    let mid = 10;

    let canvas = document.createElement("canvas");
    canvas.setAttribute("id", "dibuix1");
    canvas.setAttribute("style", "border: 5px solid #192a56");
    canvas.setAttribute("width", "250");
    canvas.setAttribute("height", "250");
    document.body.append(canvas);

    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(0, 0, mid, mid);
    ctx.fillStyle  = '#e1b12c';
    ctx.fillRect (0, 0, mid, mid);

    let canvas2 = document.createElement("canvas");
    canvas2.setAttribute("id", "dibuix2");
    canvas2.setAttribute("style", "border: 5px solid #192a56");
    canvas2.setAttribute("width", "250");
    canvas2.setAttribute("height", "250");
    document.body.append(canvas2);

    let ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.rect(250, 250, -mid, -mid);
    ctx2.fillStyle  = '#e1b12c';
    ctx2.fillRect (250, 250, -mid, -mid);

    let canvas3 = document.createElement("canvas");
    canvas3.setAttribute("id", "dibuix3");
    canvas3.setAttribute("style", "border: 5px solid #192a56");
    canvas3.setAttribute("width", "250");
    canvas3.setAttribute("height", "250");
    document.body.append(canvas3);

    let ctx3 = canvas3.getContext("2d");

    ctx3.beginPath();
    ctx3.rect(0, 250, mid, -mid);
    ctx3.fillStyle  = '#e1b12c';
    ctx3.fillRect (0, 250, mid, -mid);

    let canvas4 = document.createElement("canvas");
    canvas4.setAttribute("id", "dibuix4");
    canvas4.setAttribute("style", "border: 5px solid #192a56");
    canvas4.setAttribute("width", "250");
    canvas4.setAttribute("height", "250");
    document.body.append(canvas4);

    let ctx4 = canvas4.getContext("2d");

    ctx4.beginPath();
    ctx4.rect(250, 0, -mid, mid);
    ctx4.fillStyle  = '#e1b12c';
    ctx4.fillRect (250, 0, -mid, mid);
    
    let canvas5 = document.createElement("canvas");
    canvas5.setAttribute("id", "dibuix5");
    canvas5.setAttribute("style", "border: 5px solid #192a56");
    canvas5.setAttribute("width", "250");
    canvas5.setAttribute("height", "250");
    document.body.append(canvas5);

    let ctx5 = canvas5.getContext("2d");

    ctx5.beginPath();
    ctx5.rect(125-mid/2, 125+mid/2, mid, -mid);
    ctx5.fillStyle  = '#e1b12c';
    ctx5.fillRect (125-mid/2, 125+mid/2, mid, -mid);

    let tope = false;
    setInterval(() =>
    {
        ctx.clearRect(0,0,mid,mid);
        ctx2.clearRect(250,250,-mid,-mid);
        ctx3.clearRect(0,250,mid,-mid);
        ctx4.clearRect(250,0,-mid,mid);
        ctx5.clearRect(125-mid/2,125+mid/2,mid,-mid);

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

        ctx.fillRect(0, 0, mid, mid);
        ctx2.fillRect(250,250,-mid,-mid)
        ctx3.fillRect(0,250,mid,-mid);
        ctx4.fillRect(250,0,-mid,mid);
        ctx5.fillRect(125-mid/2,125+mid/2,mid,-mid);
    }, 10);
    
    ctx.closePath();
}