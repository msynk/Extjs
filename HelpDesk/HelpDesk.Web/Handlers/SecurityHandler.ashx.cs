using System.Threading;
using HelpDesk.Web.Libs.Ext;
using HelpDesk.Web.Libs.Security;

namespace HelpDesk.Web.Handlers
{
  /// <summary>
  /// Summary description for SecurityHandler
  /// </summary>
  public class SecurityHandler : ExtHttpHandler
  {
    protected override ExtObject InvokeAction(string action)
    {
      ExtObject result = null;
      switch (action)
      {
        case "SignIn":
          result = SignIn();
          break;
        case "SignOut":
          result = SignOut();
          break;
      }
      return result;
    }

    private ExtObject SignIn()
    {
      //Thread.Sleep(1000);
      var username = Param("username");
      var password = Param("password");
      return (ExtObject)SecurityManager.SignIn(username, password) ?? new ExtBoolean(false);
    }
    private ExtObject SignOut()
    {
      var username = Param("username");
      return new ExtBoolean(SecurityManager.SignOut(username));
    }
  }
}