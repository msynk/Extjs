using System.Collections.Generic;
using HelpDesk.Business.StructureMap;
using HelpDesk.Business.BLO.Base;
using HelpDesk.Business.DTO;
using HelpDesk.Data.Services.Interfaces;
using HelpDesk.Data.Services.Interfaces.Base;
using HelpDesk.Models.Models;

namespace HelpDesk.Business.BLO
{
	public partial class UserBLO : BaseBLO<User>
  {

    public static UserBLO GetInstance()
    {
      return InstanceFactory.GetInstance<UserBLO>();
    }

    public IUserService Service { get { return _userService; } }

    private readonly IUserService _userService;
    private readonly IUnitOfWork _uow;

    public UserBLO(IUserService userService, IUnitOfWork uow)
      : base(userService, uow)
    {
      _userService = userService;
      _uow = uow;
    }

    public UserDTO GetUser(long id)
    {
      return UserDTO.FromUser(Get(id));
    }

    public IList<UserDTO> GetAllUsers()
    {
      return UserDTO.FromUsers(GetAll());
    }

    public int AddUser(UserDTO dto)
    {
      return Add(UserDTO.ToUser(dto));
    }

    public int EditUser(UserDTO dto)
    {
      return Edit(UserDTO.ToUser(dto));
    }

    public int DeleteUser(long id)
	  {
	    return Delete(id);
	  }
  }
}
