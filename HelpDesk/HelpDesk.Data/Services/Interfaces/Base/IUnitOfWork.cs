using System;
using System.Data.Entity;

namespace HelpDesk.Data.Services.Interfaces.Base
{
  public interface IUnitOfWork : IDisposable
  {
    IDbSet<TEntity> Set<TEntity>() where TEntity : class;
    void Modify(object entity);
    int SaveChanges();
  }
}
