using System;
using StructureMap;

namespace HelpDesk.Business.StructureMap
{
  public class InstanceFactory
  {
    public static T GetInstance<T>()
    {
      return ObjectFactory.GetInstance<T>();
    }

    public static object GetInstance(Type t)
    {
      return ObjectFactory.GetInstance(t);
    }
  }
}
