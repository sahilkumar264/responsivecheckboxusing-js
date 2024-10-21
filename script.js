document.getElementById("Submit").onclick = function()
{
    if(document.getElementById("Subscribe").checked)
    {
        document.getElementById("p1").textContent = `You choose to subscribe`;
        let a = function()
        {
            if(document.getElementById("UPI").checked)
            {
                return 1;
            }
            else if(document.getElementById("Visa").checked)
            {
                return 2;
            }
            else if(document.getElementById("MasterCard").checked)
            {
                return 3;
            }
            else
            {
                return 4;
            }
        }
        switch(a())
        {
            case 1:
                document.getElementById("p2").textContent = `You choose to UPI`;
                break;
            case 2:
                document.getElementById("p2").textContent = `You choose to Visa`;
                break;
            case 3:
                document.getElementById("p2").textContent = `You choose to MasterCard`;
                break;
            case 4:
                document.getElementById("p2").textContent = `You choose to PayPal`;
                break;
            default:
                document.getElementById("p2").textContent = ``;
                break;
        }
    }
    else
    {
        document.getElementById("p1").textContent = `You did'nt choose to subscribe`
    }
}
