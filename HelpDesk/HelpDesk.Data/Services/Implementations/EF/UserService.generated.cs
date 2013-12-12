using System.Linq;
using System.Data.Entity;
using HelpDesk.Data.Services.Implementations.EF.Base;
using HelpDesk.Data.Services.Interfaces;
using HelpDesk.Data.Services.Interfaces.Base;
using HelpDesk.Models.Models;

namespace HelpDesk.Data.Services.Implementations.EF
{
	public partial class UserService : DbServiceBase<User>, IUserService
  {
    public UserService(IUnitOfWork uow) : base(uow)
    {
    }

    public User Get(long id)
    {
      return Repository.AsNoTracking().Single(p => p.Id == id);
    }

    public User GetForEdit(long id)
    {
      return Repository.Single(p => p.Id == id);
    }

    public void Delete(long id)
    {
      var entity = GetForEdit(id);
      Delete(entity);
    }
  }
}
