using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HelpDesk.Business.DTO.Base
{
  public class BaseDTO<T>
  {
    public static BaseDTO<T> From(T entity)
    {
      return default(BaseDTO<T>);
    }

    public static IList<BaseDTO<T>> From(IList<T> entities)
    {
      return new List<BaseDTO<T>>();
    }
  }
}
