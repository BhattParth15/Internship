<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="LogingWeb.WebForm1" %>


<!DOCTYPE html>
<script runat="server">

    protected void btnLogin_Click(object sender, EventArgs e)
    {

    }
</script>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <h1 align="center">Login Form</h1>
    <form id="form1" runat="server">
        <table align="center">
            <tr>
                <td>Username</td>
                <td>
                    <asp:TextBox ID="txtUser" runat="server"></asp:TextBox>
                </td>
            </tr>
            
            <tr>
                <td>Password</td>
                <td>
                    <asp:TextBox ID="txtPass" runat="server" TextMode="Password"></asp:TextBox>
                </td>
            </tr>
            <tr>
                 <td></td>
                 <td>
                      <asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" />
                 </td>
            </tr>
        </table>
    </form>
</body>
</html>

