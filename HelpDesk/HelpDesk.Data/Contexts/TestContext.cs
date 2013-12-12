using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using HelpDesk.Data.Services.Interfaces.Base;

namespace HelpDesk.Data.Contexts
{
  public partial class TestContext : IUnitOfWork
  {
    #region IUnitOfWork Members

    public new IDbSet<TEntity> Set<TEntity>() where TEntity : class
    {
      return base.Set<TEntity>();
    }

    public void Modify(object entity)
    {
      Entry(entity).State = EntityState.Modified;
    }

    public override int SaveChanges()
    {
      try
      {
        return base.SaveChanges();
      }
      catch (System.Data.Entity.Validation.DbEntityValidationException ex)
      {
        var exception = new Exception("A DbEntityValidationException occured.", ex);
        exception = ex.EntityValidationErrors.Aggregate(exception, (exc, result) => result.ValidationErrors.Aggregate(exc, (current, error) => new Exception(error.ErrorMessage, current)));
        throw exception;
      }
    }

    #endregion
  }
}
