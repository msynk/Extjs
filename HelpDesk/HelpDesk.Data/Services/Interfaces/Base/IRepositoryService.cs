namespace HelpDesk.Data.Services.Interfaces.Base
{
  public interface IRepositoryService<T> : IDbService<T> where T : class
  {
    T Get(long id);
    T GetForEdit(long id);
    void Delete(long id);
  }
}
