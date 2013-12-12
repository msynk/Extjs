namespace HelpDesk.Web.Libs.Ext
{
  public class ExtBoolean : ExtObject
  {
    public bool Value { get; private set; }

    public ExtBoolean(bool value)
    {
      Value = value;
    }

    public override object ToExtObject()
    {
      return Value;
    }
  }
}