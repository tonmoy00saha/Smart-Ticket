function displayhiddensection(elementID)
{
    document.getElementById(elementID).classList.remove('hidden');
}
function removeshowsection(elementID)
{
    document.getElementById(elementID).classList.add('hidden');
}
function backgroundcolorchange(elementID)
{
    document.getElementById(elementID).classList.add("bg-green");
}
function removebackgroundcolor(elementID)
{
    document.getElementById(elementID).classList.remove("bg-green");
}
function textcolorchange(elementID)
{
    document.getElementById(elementID).classList.add("text-white");
}
function removetextcolor(elementID)
{
    document.getElementById(elementID).classList.remove("text-white");
}
