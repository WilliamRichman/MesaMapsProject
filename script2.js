function fit_to_screen() {
    img.removeAttribute("style");
    var winX = window.innerWidth + "px";
    var winY = window.innerHeight + "px";
    var vbar = false;
    if (document.body.scrollHeight > document.body.clientHeight) // vertical scrollbar
    {
        img.style.height = winY;
        vbar = true;
    }
    if (document.body.scrollWidth > document.body.clientWidth) // horizontal scrollbar
    {
        if (vbar) // both scrollbars
        {
            if ((document.body.scrollHeight - document.body.clientHeight) > (document.body.scrollWidth - document.body.clientWidth)) // let's see which one is bigger
            {
                img.removeAttribute("style");
                img.style.height = winY;
            }
            else {
                img.removeAttribute("style");
                img.style.width = winX;
            }
        }
        else {
            img.removeAttribute("style");
            img.style.width = winX;
        }
    }
}