using System.Web;
using System.Web.Script.Serialization;

namespace HelpDesk.Web.Libs.Ext
{
  public abstract class ExtHttpHandler : IHttpHandler
  {
    public bool IsReusable { get { return false; } }

    protected HttpContext Context;
    public void ProcessRequest(HttpContext context)
    {
      Context = context;
      var result = new JavaScriptSerializer().Serialize(InvokeAction(Param("action")).ToExtObject());
      context.Response.Write(result);
    }
    protected string Param(string name)
    {
      return Context.Request.Params[name];
    }
    protected abstract ExtObject InvokeAction(string action);
  }
}