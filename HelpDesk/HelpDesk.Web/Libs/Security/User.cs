using HelpDesk.Web.Libs.Ext;

namespace HelpDesk.Web.Libs.Security
{
  public class User : ExtObject
  {
    public User() { }

    public User(string username)
    {
      Username = username;
    }
    public User(string username, string[] permissions)
    {
      Username = username;
      Permissions = permissions;
    }

    public string Username { get; set; }
    public string[] Permissions { get; set; }


    public override object ToExtObject()
    {
      return new { username = Username, permissions = Permissions };
    }
  }
}