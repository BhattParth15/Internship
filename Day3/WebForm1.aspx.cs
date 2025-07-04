using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LogingWeb
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            String username = txtUser.Text;
            String password = txtPass.Text;

            if (username == "admin" && password == "admin")
            {
                Response.Write("<script type='text/javascript'>alert('Login Successful');</script>");
            }
            else
            {
                Response.Write("<script type='text/javascript'>alert('Login Error');</script>");
            }
        }
    }
}
