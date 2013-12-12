using System.Collections.Generic;
using System.Linq;

namespace HelpDesk.Web.Libs.Security
{
  public class SecurityManager
  {
    public static List<User> Users { get; private set; }
    static SecurityManager()
    {
      Users = new List<User>();
    }

    public static User SignIn(string username, string password)
    {
      if (IsAuthenticated(username))
      {
        SignOut(username);
      }
      if (Authenticate(username, password))
      {
        var user = GetUser(username);
        Users.Add(user);
        return user;
      }
      return null;
    }
    public static bool SignOut(string username)
    {
      Users.RemoveAll(u => u.Username == username);
      return true;
    }
    public static bool IsAuthenticated(string username)
    {
      return Users.Any(u => u.Username == username);
    }

    private static bool Authenticate(string username, string password)
    {
      return (username == "a" && password == "a");
    }
    private static User GetUser(string username)
    {
      return new User(username, new[] { "logon", "logoff" });
    }
  }
}