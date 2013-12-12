using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using HelpDesk.Business.DTO.Base;
using HelpDesk.Data.Services.Interfaces.Base;

namespace HelpDesk.Business.BLO.Base
{
  public class BaseBLO<T> where T : class
  {
    private readonly IRepositoryService<T> _service;
    private readonly IUnitOfWork _uow;

    public BaseBLO(IRepositoryService<T> service, IUnitOfWork uow)
    {
      _service = service;
      _uow = uow;
    }

    protected IList<T> GetAll()
    {
      return _service.Get();
    }

    protected T Get(long id)
    {
      return _service.Get(id);
    }

    protected IList<T> Get(Expression<Func<T, bool>> predicate)
    {
      return _service.Get(predicate);
    }

    protected T GetForEdit(long id)
    {
      return _service.GetForEdit(id);
    }

    protected IList<T> GetForEdit(Expression<Func<T, bool>> predicate)
    {
      return _service.GetForEdit(predicate);
    }

    protected int Add(T entity)
    {
      try
      {
        _service.Add(entity);
        return _uow.SaveChanges();
      }
      catch (Exception ex)
      {
        var a = ex;
        throw;
      }
    }

    protected T AddAndReturn(T entity)
    {
      try
      {
        var returnedEntity = _service.Add(entity);
        _uow.SaveChanges();
        return returnedEntity;
      }
      catch (Exception ex)
      {
        var a = ex;
        throw;
      }
    }

    protected int Edit(T t)
    {
      _service.Edit(t);
      return _uow.SaveChanges();
    }

    protected int Delete(long id)
    {
      _service.Delete(id);
      return _uow.SaveChanges();
    }

  }
}
